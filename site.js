const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav?.addEventListener('click', event => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  }
});
const form = document.querySelector('#contact-form');
form?.addEventListener('submit', async event => {
  event.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  const status = document.querySelector('#form-status');
  const data = new FormData(form);
  const contact = String(data.get('reply_to') || '').trim();
  // Formspree sets notification Reply-To for an email contact. Mobile stays in reply_to.
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) data.append('email', contact);
  button.disabled = true;
  status.textContent = 'Sending your message…';
  try {
    const response = await fetch(form.action, {
      method: 'POST', body: data, headers: { Accept: 'application/json' }
    });
    if (!response.ok) throw new Error('Submission failed');
    form.reset();
    status.textContent = 'Thank you. Your message has been sent. A volunteer will be in touch.';
  } catch {
    status.textContent = 'We could not send your message. Please try again, or email staustell@servicepoint-volunteers.com.';
  } finally {
    button.disabled = false;
  }
});
