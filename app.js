const navLinks = [...document.querySelectorAll("nav a")];
const sections = navLinks
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-25% 0px -65% 0px" });

sections.forEach(section => observer.observe(section));

document.querySelectorAll(".sim-cards a").forEach(link => {
  link.target = "_blank";
  link.rel = "noreferrer";
});
