// Menu de navegação: alterna a visibilidade no modo móvel.
document.querySelector('.menu')?.addEventListener('click', function () {
  const nav = document.querySelector('#site-nav');
  const open = nav.classList.toggle('open');

  this.setAttribute('aria-expanded', String(open));
});

// Formulário de orçamento: prepara um email na aplicação do visitante.
// Não envia dados automaticamente para um servidor.
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
