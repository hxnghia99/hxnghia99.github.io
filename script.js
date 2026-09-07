document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-spy: highlight the nav link for the section in view
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    });
  },
  { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
);

sections.forEach((section) => spy.observe(section));

// Project filtering
const filterBar = document.getElementById('project-filters');
const projectCards = document.querySelectorAll('.project-card');

if (filterBar) {
  filterBar.addEventListener('click', (event) => {
    const chip = event.target.closest('.filter-chip');
    if (!chip) return;

    filterBar.querySelectorAll('.filter-chip').forEach((c) => c.classList.remove('is-active'));
    chip.classList.add('is-active');

    const filter = chip.dataset.filter;
    projectCards.forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
}
