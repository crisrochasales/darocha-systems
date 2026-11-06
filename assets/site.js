// Navegação móvel: abrir/fechar o menu e atualizar o estado de acessibilidade.
document.querySelector('.menu')?.addEventListener('click', function () {
  const nav = document.querySelector('#site-nav');
  const open = nav.classList.toggle('open');

  this.setAttribute('aria-expanded', String(open));
});

// Pedido de orçamento: preparar um email na aplicação do visitante.
// O formulário não envia dados automaticamente para um servidor.
document.querySelector('#quote-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const f = new FormData(this);
  const body = [...f].map(([k, v]) => k + ': ' + v).join('\n');
  const subject = 'Marine electrical quote request - ' + (f.get('name') || 'Website');
  const s = document.getElementById('form-status');

  s.hidden = false;
  s.textContent = 'Your email application should open. Please send the prepared email to complete your request.';

  window.location.href =
    'mailto:info@darochasystems.com?subject=' +
    encodeURIComponent(subject) +
    '&body=' +
    encodeURIComponent(body);
});

// Pré-selecionar a área aeronáutica quando o pedido vem da página Aircraft.
const selectedService = new URLSearchParams(window.location.search).get('service');

if (selectedService === 'aircraft') {
  const serviceField = document.querySelector('#quote-form select[name="service"]');
  const typeField = document.querySelector('#quote-form select[name="project_type"]');

  if (serviceField) serviceField.value = 'Aircraft Electrical & Avionics Troubleshooting';
  if (typeField) typeField.value = 'Aircraft — Electrical / Avionics';
}
