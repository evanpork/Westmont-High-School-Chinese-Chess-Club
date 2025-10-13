// Fade transition between pages
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a').forEach(a => {
    if (a.hostname === location.hostname && !a.target) {
      a.addEventListener('click', e => {
        if (a.href !== location.href) {
          e.preventDefault();
          document.body.classList.add('fade-out');
          setTimeout(() => (location = a.href), 800);
        }
      });
    }
  });
});

// Style for fade-out transition
const style = document.createElement("style");
style.innerHTML = `
  .fade-out {
    opacity: 0;
    transition: opacity 0.8s ease;
  }
`;
document.head.appendChild(style);

// === Gallery fade-in animation ===
document.addEventListener("DOMContentLoaded", () => {
  const fadeItems = document.querySelectorAll(".gallery img");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeItems.forEach(item => observer.observe(item));
});
