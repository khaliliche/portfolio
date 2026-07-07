const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// Animate skill bars when the Stack section enters view
const skillBars = document.querySelectorAll('.skill-bar');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));
// Subtle cursor parallax on hero nodes
const heroVisual = document.querySelector('.hero-visual');
const nodes = document.querySelectorAll('.node');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroVisual && !prefersReducedMotion) {
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    nodes.forEach((node, i) => {
      const strength = 12 + i * 3;
      node.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
  });

  heroVisual.addEventListener('mouseleave', () => {
    nodes.forEach(node => {
      node.style.transform = '';
    });
  });
}