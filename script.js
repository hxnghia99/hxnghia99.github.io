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

// Docs modal: open project docs inline instead of navigating away
const docsModal = document.getElementById('docs-modal');
const docsModalFrame = document.getElementById('docs-modal-frame');
const docsModalBackdrop = document.getElementById('docs-modal-backdrop');
const docsModalClose = document.getElementById('docs-modal-close');

function openDocsModal(url) {
  docsModalFrame.src = url;
  docsModal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeDocsModal() {
  docsModal.hidden = true;
  docsModalFrame.src = '';
  document.body.style.overflow = '';
}

document.querySelectorAll('.docs-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openDocsModal(link.getAttribute('href'));
  });
});

docsModalBackdrop.addEventListener('click', closeDocsModal);
docsModalClose.addEventListener('click', closeDocsModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !docsModal.hidden) closeDocsModal();
});

window.addEventListener('message', (event) => {
  if (event.data === 'close-docs-modal') closeDocsModal();
});
