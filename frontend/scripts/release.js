#!/usr/bin/env node

/**
 * Release script.
 *
 * Usage:
 *   node scripts/release.js major|minor|patch "Titulo da versao" ["Mensagem curta"]
 *   node scripts/release.js --dry major|minor|patch          (simula, nao altera nada)
 *
 * Steps (in order):
 *   1. validations (working tree clean, no tag collision)
 *   2. compute next version from the latest tag (SemVer)
 *   3. write public/version.json + package.json version
 *   4. git commit, annotated git tag, git push --follow-tags
 *   5. build + deploy to gh-pages with a meaningful commit message
 *   6. print verification and rollback instructions
 */

const { execFileSync, spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const pkgPath = path.join(root, "package.json");
const versionPath = path.join(root, "public", "version.json");
const repoUrl = "https://github.com/axndmathias/coiffeur-denise-website";

/**
 * npm and npx are shell scripts (.cmd on Windows) and Node refuses to spawn those
 * without a shell since the CVE-2024-27980 fix. Calling them through `node` with the
 * real JS entry point avoids the shell entirely, so messages keep their spaces.
 */
const npmCli =
  process.env.npm_execpath ||
  path.join(path.dirname(process.execPath), "node_modules", "npm", "bin", "npm-cli.js");
const ghPagesBin = require.resolve("gh-pages/bin/gh-pages.js");

const dry = process.argv.includes("--dry");
const positional = process.argv.slice(2).filter((a) => a !== "--dry");
const type = (positional[0] || "").toLowerCase();
const title = positional[1] || "";
const notes = positional[2] || "";

const c = {
  reset: "\u001b[0m",
  dim: "\u001b[2m",
  bold: "\u001b[1m",
  green: "\u001b[32m",
  yellow: "\u001b[33m",
  red: "\u001b[31m",
  cyan: "\u001b[36m",
};
const ok = (s) => `${c.green}${s}${c.reset}`;
const warn = (s) => `${c.yellow}${s}${c.reset}`;
const fail = (s) => `${c.red}${s}${c.reset}`;
const info = (s) => `${c.cyan}${s}${c.reset}`;

function git(...args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
}

/** Runs a real executable (git) and fails hard on error. */
function runBin(cmd, args, extraEnv) {
  const res = spawnSync(cmd, args, {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, ...(extraEnv || {}) },
  });
  if (res.error) {
    console.error(fail(`\nNao foi possivel executar ${cmd}: ${res.error.message}`));
    process.exit(1);
  }
  if (res.status !== 0) {
    console.error(fail(`\n${cmd} ${args.join(" ")} falhou (codigo ${res.status})`));
    process.exit(res.status || 1);
  }
}

/** Runs a Node script through the current node binary (npm, gh-pages). */
function run(script, args, extraEnv) {
  const res = spawnSync(process.execPath, [script, ...args], {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, ...(extraEnv || {}) },
  });
  if (res.error) {
    console.error(fail(`\nNao foi possivel executar ${script}: ${res.error.message}`));
    process.exit(1);
  }
  if (res.status !== 0) {
    console.error(fail(`\n${path.basename(script)} ${args.join(" ")} falhou (codigo ${res.status})`));
    console.error(
      warn(
        "\nA tag e o commit ja foram enviados. Para terminar a publicacao desta\n" +
          "versao, executa manualmente:  npm run build  e depois  npx gh-pages -d build -m \"Deploy <versao>\""
      )
    );
    process.exit(res.status || 1);
  }
}

function failWith(msg) {
  console.error(fail(`\n${msg}`));
  process.exit(1);
}

function bump(version, kind) {
  const [maj, min, pat] = version.split(".").map(Number);
  if (kind === "major") return `${maj + 1}.0.0`;
  if (kind === "minor") return `${maj}.${min + 1}.0`;
  return `${maj}.${min}.${pat + 1}`;
}

function lastTag() {
  try {
    return git("describe", "--tags", "--abbrev=0");
  } catch {
    return null;
  }
}

function commitsSince(tag) {
  const range = tag ? `${tag}..HEAD` : "HEAD";
  const out = git("log", "--no-merges", "--pretty=format:%h  %s", range);
  return out ? out.split("\n") : [];
}

// ---------------------------------------------------------------- arguments

if (!["major", "minor", "patch"].includes(type)) {
  failWith(
    `Uso: node scripts/release.js major|minor|patch "Titulo" ["Mensagem"]\n` +
      `      node scripts/release.js --dry major|minor|patch`
  );
}
if (!title) {
  failWith('Falta o titulo da versao. Ex: npm run release -- minor "7 avaliacoes do Google"');
}

const currentTag = lastTag();
const baseVersion = currentTag
  ? currentTag.replace(/^v/, "")
  : JSON.parse(fs.readFileSync(pkgPath, "utf8")).version || "0.0.0";
const nextVersion = bump(baseVersion, type);
const tagName = `v${nextVersion}`;

const branch = git("rev-parse", "--abbrev-ref", "HEAD");
const sha = git("rev-parse", "--short", "HEAD");
const dirty = git("status", "--porcelain");

if (dirty && !dry) {
  console.error(fail("A arvore de trabalho tem alteracoes por confirmar. Faz commit primeiro:\n"));
  console.error(dirty);
  process.exit(1);
}

if (lastTag() === tagName) {
  failWith(`A tag ${tagName} ja existe. Escolhe outro tipo de bump.`);
}

// ---------------------------------------------------------------- preview

const changes = commitsSince(currentTag);

console.log(`\n${c.bold}Release ${info(tagName)}${c.reset}  ${c.dim}(${type}, a partir de ${currentTag || "sem tags"})${c.reset}`);
console.log(`${c.dim}branch ${branch} @ ${sha}${c.reset}`);
if (changes.length) {
  console.log(`\n${c.bold}Alteracoes included${c.reset}`);
  for (const line of changes) console.log(`  ${c.dim}${line}${c.reset}`);
} else {
  console.log(`\n${warn("Aviso: nao ha commits novos desde a ultima tag.")}`);
}

if (dry) {
  console.log(`\n${warn("--dry: nada foi alterado.")}`);
  console.log(`\nO que aconteceria:`);
  console.log(`  1. ${c.dim}public/version.json${c.reset}  -> ${tagName}, ${sha}, ${new Date().toISOString().slice(0, 10)}`);
  console.log(`  2. ${c.dim}package.json${c.reset}        -> version ${tagName}`);
  console.log(`  3. ${c.dim}commit + tag anotada${c.reset}  -> ${tagName}`);
  console.log(`  4. ${c.dim}push --follow-tags${c.reset}`);
  console.log(`  5. ${c.dim}build + deploy${c.reset}       -> commit "Deploy ${tagName}"`);
  console.log(`\nVerificar: ${info("https://coiffeur-denise.ch/version.json")}\n`);
  process.exit(0);
}

// ---------------------------------------------------------------- write files

const versionFile = {
  version: tagName,
  commit: sha,
  date: new Date().toISOString().slice(0, 10),
  title,
};
fs.writeFileSync(versionPath, JSON.stringify(versionFile, null, 2) + "\n", "utf8");

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
pkg.version = nextVersion;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");

// ---------------------------------------------------------------- commit + tag

runBin("git", ["add", "public/version.json", "package.json"]);
runBin("git", ["commit", "-m", `Release ${tagName}: ${title}`]);

const tagMessage = notes
  ? `${tagName} - ${title}\n\n${notes}\n\nCommit: ${sha}`
  : `${tagName} - ${title}\n\nCommit: ${sha}`;
runBin("git", ["tag", "-a", tagName, "-m", tagMessage]);
runBin("git", ["push", "--follow-tags", "origin", branch]);

// ---------------------------------------------------------------- build + deploy

console.log(`\n${c.bold}Build e deploy...${c.reset}\n`);
run(npmCli, ["run", "build"], { CI: "true" });
run(ghPagesBin, ["-d", "build", "-m", `Deploy ${tagName} (${sha})`]);

// ---------------------------------------------------------------- report

async function report() {
  let liveJson = null;
  try {
    const res = await fetch("https://coiffeur-denise.ch/version.json", { cache: "no-store" });
    if (res.ok) liveJson = await res.json();
  } catch {
    liveJson = null;
  }

  console.log(`\n${ok("Release " + tagName + " publicada.")}`);
  console.log(`  tag     ${tagName} -> ${sha}`);
  if (liveJson) {
    const match = liveJson.version === tagName;
    console.log(
      `  no ar   ${match ? ok(liveJson.version) : warn(liveJson.version)}  ${c.dim}(commit ${liveJson.commit}, ${liveJson.date})${c.reset}`
    );
  } else {
    console.log(`  no ar   ${warn("ainda nao propagado")} ${c.dim}(o GitHub Pages pode demorar 1-2 min)${c.reset}`);
  }
  console.log(`\n${c.bold}Rollback${c.reset}`);
  console.log(`  conteudo errado:  ${c.dim}git revert <commit>  ->  npm run release -- patch "Corrige <x>"${c.reset}`);
  console.log(`  site partido:     ${c.dim}git push origin <sha-antigo-gh-pages>:gh-pages${c.reset}`);
  console.log(`\n${c.dim}Release no GitHub (opcional): ${repoUrl}/releases/new?tag=${tagName}${c.reset}`);
  console.log(`\nVerificar: ${info("https://coiffeur-denise.ch/version.json")}\n`);
}

report();
