# DAROCHA SYSTEMS — Preview

This is the development website, connected to Hostinger preview deployment at `public_html/preview-darocha/`.

All images are now included locally in `assets/` as WebP files. The site does not require production-hosted image assets. Use relative paths in HTML (`assets/*.webp`) and CSS (`hero.webp` from `assets/styles.css`).

Do not deploy this branch into production `public_html` until the site is reviewed and approved. Review the preview on desktop and mobile. The quote request form opens the user's email application; it is not a backend form. Illustrative photos are not client project photos. No manufacturer authorization is claimed.

## Estrutura e manutenção do código

O projeto utiliza HTML, CSS e JavaScript simples, sem dependências de compilação.

| Ficheiro | Finalidade |
| --- | --- |
| `index.html` | Página inicial, serviços em destaque e área de atendimento |
| `services.html` | Serviços de eletricidade marítima |
| `power-systems.html` | Sistemas de energia e equipamentos de fabricantes |
| `about.html` | Apresentação da empresa |
| `projects.html` | Projetos e conteúdos de portefólio |
| `contact.html` | Contactos e formulário para preparar email de orçamento |
| `image-check-hd20261025.html` | Verificação visual das imagens HD |
| `assets/styles.css` | Estilos gerais, componentes, páginas e regras responsivas |
| `assets/site.js` | Menu móvel e preparação do pedido de orçamento por email |
| `assets/*.webp` | Imagens locais |
| `docs/` | Notas técnicas e documentação do projeto |

### Convenções

- Utilizar **2 espaços** para indentação em HTML, CSS e JavaScript.
- No CSS, manter **uma declaração por linha** e agrupar estilos por secção; preservar as regras `@media`.
- Usar comentários para identificar blocos importantes, sem comentar cada linha.
- Preservar os links relativos e nomes existentes dos recursos.
- O formulário abre a aplicação de email do visitante; não existe envio por servidor.
- A branch de trabalho ligada à pré-visualização da Hostinger é `development/site-refinement-v3`. Não publicar ou integrar na `main` sem aprovação explícita.
