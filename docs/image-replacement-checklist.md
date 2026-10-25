# DAROCHA SYSTEMS — Checklist final de imagens

> **Status:** Guia técnico da prévia em `/preview-darocha/`, não aprovação para substituir o site principal. Revisto em 24/10/2026.

## Problemas confirmados

- A foto principal **já existe** em `assets/hero.webp` (1920 × 730 px; ~128 KB); o problema pode ser a camada de fundo no CSS. Uma alteração em `assets/styles.css` transferiu o banner para o fundo de `.hero`, removendo o empilhamento negativo de `.hero-bg`. Confirmar no navegador da Hostinger.
- As nove miniaturas de serviços são 640 × 360 px e derivam de recortes de uma montagem, não de imagens originais detalhadas.
- As fotos Victron e Mastervolt têm 900 × 540 px; substituir por material de origem maior.
- É importante evitar aumento artificial de resolução: redimensionar uma imagem pequena não acrescenta detalhes.

## Mapa de arquivos e substituições

| Nome atual em `assets/` | Local no website | Dimensão atual | Nova fonte recomendada | Prioridade |
|---|---|---:|---:|---|
| `hero.webp` | Home: banner superior, seletor `.hero` em `assets/styles.css` | 1920×730 | Foto panorâmica original de iate, **2400–3000 px de largura**, barco predominantemente à direita e espaço livre para texto à esquerda. Proporção ~3:1. | P0 |
| `diagnostics.webp` | Home/Services/Projects: diagnóstico | 640×360 | Foto real 1600×900 (mín. 1200×675) de análise de painel/teste | P1 |
| `repairs.webp` | Home/Services: reparos elétricos | 640×360 | 1600×900 (mín. 1200×675) | P1 |
| `installs.webp` | Home/Services: instalações | 640×360 | 1600×900 (mín. 1200×675) | P1 |
| `battery.webp` | Home/Services/Projects: baterias | 640×360 | 1600×900 (mín. 1200×675) | P1 |
| `shore.webp` | Home/Services: shore power | 640×360 | 1600×900 (mín. 1200×675) | P1 |
| `lighting.webp` | Home/Services: iluminação | 640×360 | 1600×900 (mín. 1200×675) | P1 |
| `solar.webp` | Home/Services/Projects: solar | 640×360 | 1600×900 (mín. 1200×675) | P1 |
| `navigation.webp` | Home/Services/Projects: navegação | 640×360 | 1600×900 (mín. 1200×675) | P1 |
| `rewiring.webp` | Home/Services/Projects: fiação | 640×360 | 1600×900 (mín. 1200×675) | P1 |
| `victron.webp` | Home/Power Systems: sistema Victron | 900×540 | Foto original ≥1600 px de largura; produtos legíveis sem ampliar miniaturas | P1 |
| `mastervolt.webp` | Home/Power Systems: sistema Mastervolt | 900×540 | Foto original ≥1600 px de largura; produtos legíveis sem ampliar miniaturas | P1 |
| `helm.webp` | Home/About: cockpit/painel náutico | 1100×640 | Foto original 1800×1000 ou maior | P2 |
| `logo.webp` | Todas: cabeçalho, rodapé e favicon | 480×480 | Manter original fornecido pelo cliente; exportar 1024×1024 com transparência, conservando detalhes | P2 |
| `yacht-detail.webp` | Reserva no pacote de imagens, não usada pelas páginas atuais | 1100×640 | Opcional 1800×1000 | P3 |

## Regras de seleção, edição e exportação

- Usar **imagens de origem em alta resolução**, não ampliar recortes de screenshots, mockups ou fotografias de baixa qualidade.
- Para os serviços usar recorte consistente em **16:9**, mesmo enquadramento e orientação; não incluir títulos legíveis *dentro* da foto, pois já aparecem nas legendas HTML.
- O hero deve preservar o iate no lado direito e deixar espaço negativo à esquerda. O CSS usa `background-size: cover`: em diferentes telas algum corte será inevitável. Para evitar remover partes essenciais, criar uma composição com folga ao redor do barco.
- Exportar fotografias em **WebP com qualidade ~82–90**, preservando dimensões. Reduzir arquivo sem destruir textura e leitura dos equipamentos; verificar cada saída em 100%.
- Usar os mesmos **nomes de arquivo**, com letras minúsculas, diretamente em `assets/`, para não precisar reescrever os caminhos HTML. Se optar por novos nomes, atualizar todas as referências.
- Para detalhes de produtos Victron/Mastervolt, usar arquivos oficiais com direitos de uso adequados ou imagens devidamente licenciadas. **Não atribuir instalações de terceiros à DAROCHA SYSTEMS** nem sugerir credenciamento oficial.
- Manter a seção de depoimentos oculta até haver avaliações reais de clientes.

## CSS e páginas envolvidas

- `assets/styles.css`: `.hero` / `.hero-bg`, `.service-card>img`, `.power-image img`, `.detail-card>img`, `.systems-card>img`, `.about-strip>img`.
- `index.html`: banner, 9 serviços, Victron, Mastervolt e About.
- `services.html`: 9 serviços.
- `power-systems.html`: Victron e Mastervolt.
- `about.html`: cockpit.
- `projects.html`: diagnóstico, bateria, solar, navegação e rewiring.
- `contact.html`: logomarca e informações de contato.

## Checklist de revisão antes de publicação definitiva

- [ ] Banner aparece em `/preview-darocha/` após o commit de CSS e atualização automática da Hostinger.
- [ ] Em desktop (1440 e 1920 px), iate visível à direita e título legível à esquerda.
- [ ] Em tablet e celular, banner não corta excessivamente o barco e mantém boa leitura do título.
- [ ] Imagens de serviços têm nitidez natural e enquadramento coerente.
- [ ] Blocos Victron e Mastervolt têm proporções e textos alinhados.
- [ ] Todos os caminhos de imagem retornam conteúdo real (não 404) diretamente em `/preview-darocha/assets/<nome>`.
- [ ] O site principal em `/` permanece inalterado até aprovação.
- [ ] Licenças/direitos das fotografias confirmados antes de publicação comercial.

## Teste direto do banner

Abrir no navegador:

- `https://darochasystems.com/preview-darocha/assets/hero.webp`
- `https://darochasystems.com/preview-darocha/`

Se o arquivo direto abre, mas não aparece na Home, o problema é de CSS/cache. O commit de CSS removeu a dependência de z-index negativo; recarregue a prévia ignorando cache (Ctrl+Shift+R). Se o arquivo direto não abre, revisar envio no GitHub/Hostinger.
