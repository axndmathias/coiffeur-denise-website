# BACKLOG

Todas as tasks conhecidas do site. Ficheiro vivo: actualiza-o no mesmo commit da task.

## Como usar

1. Task nova → acrescenta com ID sequencial e prioridade
2. Trabalhar → faz a alteração
3. Publicar com `npm run release` → só então marcar `[x]` e pôr a tag
4. P1 e P2 nunca saem sem decisão explícita

| Prioridade | Significado |
| --- | --- |
| **P1** | correcção necessária — o site ou a documentação estão errados |
| **P2** | melhoria com impacto real em SEO, performance ou confiança |
| **P3** | opcional, "quando houver tempo" |

## Aberto

### Documentação
- [ ] **B-03 · P1** Instalar o `gh` CLI para as GitHub Releases deixarem de ser manuais

### SEO e redes sociais
- [ ] **B-04 · P2** Criar `favicon.ico` e `apple-touch-icon` (hoje o separador usa o ícone por omissão)
- [ ] **B-05 · P2** Open Graph + Twitter card + `canonical` no `index.html` (partilha no WhatsApp/Instagram sem imagem)
- [ ] **B-06 · P2** `robots.txt` + `sitemap.xml` e registo no Google Search Console
- [ ] **B-08 · P2** Confirmar o Google Business Profile: as avaliações vêm do Google, a listagem aponta Instagram
- [ ] **B-10 · P3** `lang="en"` fixo no `index.html` num site DE/EN — avaliar `hreflang`

### Imagens
Peso actual medido: 12,65 MB em 52 ficheiros, todos servidos de `public/` com nome opaco
(`foto_56.jpg`) e sem compressão.

| Página | Peso | Nº de imagens |
| --- | --- | --- |
| Home | 6,7 MB | 23 |
| Gallery | 2,4 MB | 9 |
| About | 777 KB | 1 |
| Services | 355 KB | 4 |

- [ ] **B-15 · P2** Apagar as 19 imagens não referenciadas — **−3,71 MB** em cada deploy. Recuperáveis pelo histórico Git se algum dia forem precise
- [ ] **B-16 · P2** Passar as imagens para `src/assets/` com pastas por finalidade (`bride/`, `portfolio/`, `services/`, `testimonials/`, `hero/`, `about/`) e `import`. Dá hash no nome (cache busting — hoje trocar uma foto não muda o URL, por isso o browser e o CDN continuam a servir a antiga) e elimina o `${process.env.PUBLIC_URL}`, que foi a causa do bug de caminhos do `844ed58`
- [ ] **B-17 · P2** Converter para WebP e redimensionar. Alvo: Home abaixo de 1,5 MB

### Ferramentas
- [ ] **B-09 · P2** Verificar se `npm start` funciona em Node 24 sem `--openssl-legacy-provider`; se não, criar script `dev`
- [ ] **B-11 · P3** `npm test` existe mas não há testes — decidir se vale a pena
- [ ] **B-12 · P3** Limpar os servidores locais duplicados (3000 e 3103 servem o mesmo build)

### Conteúdo
- [ ] **B-13 · P3** Decidir se o feed do Instagram volta ao rodapé (foi removido em favor da galeria)

## Entregue

- [x] **B-01 · P1** Corrigir a tabela semanal de horários do `docs/PRD.md` (§8) e os open items (§12) — `v1.1.2`
- [x] **B-02 · P1** Ligar `BACKLOG` e `RELEASES` no índice `docs/README.md` — `v1.1.2`
