# DAROCHA SYSTEMS — Preview

This is the development website, connected to Hostinger preview deployment at `public_html/preview-darocha/`.

All images are now included locally in `assets/` as WebP files. The site does not require production-hosted image assets. Use relative paths in HTML (`assets/*.webp`) and CSS (`hero.webp` from `assets/styles.css`).

Do not deploy this branch into production `public_html` until the site is reviewed and approved. Review the preview on desktop and mobile. The quote request form opens the user's email application; it is not a backend form. Illustrative photos are not client project photos. No manufacturer authorization is claimed.

## Organização do código

Este projeto é um website estático. Para encontrar e editar cada parte:

- `index.html`: página inicial (destaque, serviços, sistemas de energia, área de serviço e chamadas à ação).
- `services.html`: descrição dos serviços.
- `power-systems.html`: soluções de sistemas de energia.
- `about.html`: apresentação da empresa.
- `projects.html`: projetos e informações associadas.
- `contact.html`: contactos e formulário de pedido de orçamento.
- `image-check-hd20261025.html`: página auxiliar de verificação das imagens HD.
- `assets/styles.css`: estilos globais e regras responsivas (no final do ficheiro).
- `assets/site.js`: comportamento do menu móvel e preparação do email do formulário.
- `assets/*.webp`: imagens utilizadas nas páginas.
- `docs/`: documentação complementar.

Os ficheiros HTML são formatados com indentação de **dois espaços**, e os blocos CSS e JavaScript estão divididos por finalidade. Para preservar o funcionamento, mantenha os caminhos relativos existentes ao alterar ou mover recursos. O formulário de contacto abre o cliente de email do visitante; não existe envio automático por backend.
