// === Fade-out transition between internal pages ===
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach(a => {
    if (a.hostname === location.hostname && !a.target) {
      a.addEventListener("click", e => {
        if (a.href !== location.href) {
          e.preventDefault();
          document.body.classList.add("fade-out");
          setTimeout(() => (location = a.href), 800);
        }
      });
    }
  });
});

// === Inject fade-out style so it always works ===
const style = document.createElement("style");
style.innerHTML = `
  .fade-out {
    opacity: 0;
    transition: opacity 0.8s ease;
  }
`;
document.head.appendChild(style);

// === Fade-in animation for any images with .fade-item ===
document.addEventListener("DOMContentLoaded", () => {
  const fadeItems = document.querySelectorAll(".fade-item, .logo-frame img");

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
