# Releases e versioning

Como o site está em produção em `coiffeur-denise.ch`, cada alteração publicada tem de ser
rastreável e reversível. Isto descreve o processo usado a partir de `v1.0.0`.

## Os dois branches

| Branch | O que é | Quem escreve |
|---|---|---|
| `main` | código-fonte e conteúdo | commits normais |
| `gh-pages` | **cada build publicado**, um commit por deploy | automático no `npm run deploy` |

O `gh-pages` é configurado com `history: true` (default do `gh-pages`), por isso o push é
fast-forward e **nada é sobrescrito**. Todos os builds publicados ficam guardados nesse
branch — é o arquivo de emergency.

## Esquema de versao: SemVer

| Tipo | Quando usar | Exemplo real |
|---|---|---|
| `MAJOR` v2.0.0 | quebra: remove uma página, muda URLs, redesign | remoção do Admin/backend |
| `MINOR` v1.1.0 | conteudo ou funcionalidade nova | 7 avaliacoes novas do Google |
| `PATCH` v1.1.1 | correccao: erro de texto, foto errada, espaco | limpeza de chaves mortas |

Regra rapida: *acrescentar conteudo = minor; corrigir = patch; mudar a estrutura = major.*

## Publicar uma versao

```bash
# 1. simular primeiro (nao altera nada)
npm run release:dry -- minor "7 avaliacoes do Google"

# 2. publicar a serio
npm run release -- minor "7 avaliacoes do Google" "texto opcional para a tag"
```

O script faz, por ordem:

1. recusa correr se a arvore de trabalho tiver alteracoes por confirmar
2. calcula a proxima versao a partir da ultima tag
3. escreve `public/version.json` (versao + commit + data)
4. actualiza `version` no `package.json`
5. `git commit` + `git tag -a` + `git push --follow-tags`
6. `build` + `deploy`, com a mensagem `Deploy vX.Y.Z (sha)` no `gh-pages`
7. imprime a versao publicada e os comandos de rollback

Fluxo normal de trabalho: **pedir alteracao → ver em `http://localhost:3001` →
publicar com `npm run release`**.

## Saber o que esta no ar

Abre **https://coiffeur-denise.ch/version.json**:

```json
{ "version": "v1.1.0", "commit": "6bc2c46", "date": "2026-09-25", "title": "7 avaliacoes do Google" }
```

O campo `commit` e o ultimo commit de **codigo** da versao. O commit seguinte
(`Release vX.Y.Z: <titulo>`) so acrescenta a `version.json` e a versao do
`package.json`, por isso o sitio visivel e identico nos dois.

Historico completo de versoes:

```bash
git tag -l --format="%(refname:short)  %(creatordate:short)  %(contents:subject)"
```

O que ha em cada versao:

```bash
git log --oneline v1.0.0..v1.1.0
git diff --stat v1.0.0 v1.1.0
```

## Rollback

### Conteudo errado (o normal)
Nao reescreves o historico — revertes e publicas uma correccao:

```bash
git revert <commit-errado>
npm run release -- patch "Corrige <descricao>"
```

### Site partido (emergencia)
Repoe um build exacto, sem rebuild, em segundos:

```bash
# ver os builds disponiveis, do mais recente para o mais antigo
git log --oneline origin/gh-pages

# repor um deles
git push origin <sha-do-gh-pages>:gh-pages
```

O build volta ao estado exacto desse dia. O commit no `gh-pages` fica depois reescrito pela
proxima release, por isso se o site esta partido **faz isto primeiro** e so depois faz a
correccao com `git revert`.

## Tags anotadas vs assinatura

As tags sao anotadas (`git tag -a`), com data e resumo — suficiente para historico.
Assinatura GPG nao esta configurada.

## Releases no GitHub (opcional)

O `gh` CLI nao esta instalado, por isso a release e criada a mao:
`https://github.com/axndmathias/coiffeur-denise-website/releases/new?tag=vX.Y.Z`
(URL impressa pelo proprio script no final de cada release).
