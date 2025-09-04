
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    toggle.setAttribute('aria-expanded', String(!open));
  });
  // Close on link click (mobile)
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (window.innerWidth <= 820) links.style.display = 'none';
  }));
}
// Current year
document.getElementById('year').textContent = new Date().getFullYear();
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      history.pushState(null, '', `#${id}`);
    }
  });
});
