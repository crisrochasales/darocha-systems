# DAROCHA SYSTEMS — Preview

This is the development website, connected to Hostinger preview deployment at `public_html/preview-darocha/`.

All images are now included locally in `assets/` as WebP files. The site does not require production-hosted image assets. Use relative image paths in HTML (`assets/*.webp`). The home hero now features a supplied equipment photograph instead of a yacht background.

Do not deploy this branch into production `public_html` until the site is reviewed and approved. Review the preview on desktop and mobile. The quote request form opens the user's email application; it is not a backend form. Illustrative photos are not client project photos. No manufacturer authorization is claimed.

## Estrutura e manutenção do código

O projeto utiliza HTML, CSS e JavaScript simples, sem dependências de compilação.

| Ficheiro | Finalidade |
| --- | --- |
| `index.html` | Página inicial, serviços em destaque e área de atendimento |
| `services.html` | Serviços de eletricidade marítima |
| `aircraft-troubleshooting.html` | Aircraft Electrical & Avionics Troubleshooting, âmbito regulamentar e contacto |
| `power-systems.html` | Sistemas de energia e equipamentos de fabricantes |
| `about.html` | Apresentação da empresa |
| `projects.html` | Projetos e conteúdos de portefólio |
| `contact.html` | Contactos e formulário para preparar email de orçamento |
| `assets/styles.css` | Estilos gerais, componentes, páginas e regras responsivas |
| `assets/site.js` | Menu móvel e preparação do pedido de orçamento por email |
| `assets/*.webp` | Imagens locais |
| `docs/power-systems-review.md` | Orientações de imagens, revisão e publicação dos sistemas de energia |

### Convenções

- Utilizar **2 espaços** para indentação em HTML, CSS e JavaScript.
- No CSS, manter **uma declaração por linha** e agrupar estilos por secção; preservar as regras `@media`.
- Usar comentários para identificar blocos importantes, sem comentar cada linha.
- Preservar os links relativos e nomes existentes dos recursos.
- O formulário abre a aplicação de email do visitante; não existe envio por servidor. Permite pedidos marítimos ou aeronáuticos; o link `?service=aircraft#quote` pré-seleciona o serviço aeronáutico.
- A branch de trabalho ligada à pré-visualização da Hostinger é `development/site-refinement-v3`. Não publicar ou integrar na `main` sem aprovação explícita.

## Limpeza de imagens e ficheiros

Os recursos `assets/*.webp` mantidos são aqueles que as páginas HTML ou a folha de estilos utilizam. A abertura da página inicial apresenta `assets/victron-source-preserved-20261025.webp` como imagem técnica de equipamento. O antigo banner de iate `assets/hero.webp` deixou de ser utilizado e foi removido.

Foram removidas cópias de imagens com nomes alternativos, imagens antigas que já não aparecem no site, uma página auxiliar de verificação e um checklist histórico desatualizado. Se for necessário recuperar algum desses recursos, o histórico de commits do GitHub conserva as versões anteriores.

Antes de publicar novas alterações, confirmar as imagens, a navegação e o formulário em `/preview-darocha/`.

## Landing page orientada à engenharia

- A home preserva **AVIATION-INSPIRED PRECISION** e **Marine Electrical Expertise.**, com destaque para **Troubleshooting Specialist**.
- `index.html`: abertura técnica, método de troubleshooting, cartões de serviços, tecnologias embarcadas, resumo da experiência, diferenciais e contacto.
- `about.html`: formação técnica, quase 25 anos de experiência na aviação e percurso em eletrónica, automação, robótica e sistemas embarcados.
- `power-systems.html`: visão de tecnologias e categorias de equipamentos; as marcas Victron Energy e Mastervolt são apenas exemplos.
- As imagens de equipamentos foram fornecidas para utilização no website e não são apresentadas como projetos executados pela DAROCHA SYSTEMS.
- `assets/styles.css` inclui estilos responsivos para as novas secções.

## Aircraft Troubleshooting

A experiência em sistemas elétricos e eletrónicos aeronáuticos é apresentada numa landing page própria, separada da página inicial marítima. O acesso é feito por uma ligação destacada no centro do cabeçalho fixo em desktop e pelo menu em dispositivos menores. A página `aircraft-troubleshooting.html` não declara licença A&P, certificação de repair station, aprovação FAA ou autoridade para aprovar retorno ao serviço. Quaisquer intervenções aeronáuticas devem respeitar os privilégios de certificação, a supervisão e as regras FAA aplicáveis.

Não anunciar aprovação de retorno ao serviço nem manutenção independente sem confirmar primeiro as autorizações correspondentes. Referência oficial: https://www.faa.gov/mechanics/become/faq

## Cabeçalho e navegação

- O cabeçalho permanece fixo ao navegar ou rolar as páginas.
- O logótipo e nome DAROCHA SYSTEMS não se repetem; a área aeronáutica aparece como um acesso dedicado.
- No desktop, a ligação **AIRCRAFT ELECTRICAL & AVIONICS / TROUBLESHOOTING** ocupa a área central do cabeçalho; em telemóveis fica no menu.
- A página inicial retoma a versão centrada em serviços marítimos, com a assinatura **AVIATION-INSPIRED PRECISION / Marine Electrical Expertise.** e foco em troubleshooting.
- Os links com âncoras respeitam a altura do cabeçalho fixo.
