// Fade transition between pages
document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll("a");
  for (let a of anchors) {
    if (a.hostname === window.location.hostname && !a.target) {
      a.addEventListener("click", function (e) {
        if (a.href !== window.location.href) {
          e.preventDefault();
          document.body.classList.add("fade-out");
          setTimeout(() => {
            window.location = a.href;
          }, 800);
        }
      });
    }
  }
});

// Fade-out animation class
const style = document.createElement("style");
style.innerHTML = `
  .fade-out {
    opacity: 0;
    transition: opacity 0.8s ease;
  }
`;
document.head.appendChild(style);
