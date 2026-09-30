const whatsappNumber = '558496455274';
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(link.dataset.whatsapp)}`;
});
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu'); }
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
window.matchMedia('(min-width: 601px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
const floatingContact = document.querySelector('.floating-wa');
if ('IntersectionObserver' in window) {
  const visibleContactButtons = new Set();
  const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visibleContactButtons.add(entry.target);
      else visibleContactButtons.delete(entry.target);
    });
    floatingContact.hidden = visibleContactButtons.size > 0;
  }, { threshold: 0.2 });
  document.querySelectorAll('.button[data-whatsapp]').forEach(button => contactObserver.observe(button));
}
const viewer = document.querySelector('#photo-viewer');
const fullPhoto = document.querySelector('#photo-full');
let photoTrigger;
document.querySelectorAll('[data-gallery]').forEach(link => {
  link.addEventListener('click', event => {
    if (typeof viewer.showModal !== 'function') return;
    event.preventDefault();
    photoTrigger = link;
    fullPhoto.src = link.href;
    fullPhoto.alt = link.querySelector('img').alt;
    document.querySelector('#photo-title').textContent = link.dataset.title;
    document.querySelector('#photo-description').textContent = link.dataset.description;
    viewer.showModal();
    document.body.classList.add('photo-open');
  });
});
document.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => {
  const rect = viewer.getBoundingClientRect();
  if (event.target === viewer && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) viewer.close();
});
viewer.addEventListener('close', () => {
  document.body.classList.remove('photo-open');
  photoTrigger?.focus({ preventScroll: true });
});
