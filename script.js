const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.textContent = '☰';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      'Hello Phótizó Solar Solutions, I would like to make an enquiry.',
      `Name: ${form.get('name')}`,
      `Phone: ${form.get('phone')}`,
      `Service: ${form.get('interest')}`,
      `Project details: ${form.get('message') || 'Not provided'}`
    ].join('\n');
    window.open(`https://wa.me/237679590876?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
}

// Gentle scroll reveals; content remains visible if the browser lacks observer support.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-ready');
  const revealTargets = document.querySelectorAll(
    '.section-heading, .service-card, .product-category, .generator-grid article, .division-card, .training-copy, .training-gallery, .specialty-card, .testimonial-card, .project-gallery figure, .award-card, .admission-side, .contact-panel'
  );
  revealTargets.forEach((el, index) => {
    el.classList.add('reveal');
    if (el.matches('.service-card, .product-category, .generator-grid article, .testimonial-card')) {
      el.style.setProperty('--reveal-delay', `${(index % 4) * 65}ms`);
    }
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  revealTargets.forEach(el => observer.observe(el));
}
