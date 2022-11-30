export const intersectionObserver = () => {
let sections = document.querySelectorAll(".art-abt");
let header = document.querySelector("header");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      let current = entry.target.getAttribute("id");
      document.querySelector("h3").textContent = current;
      document.querySelector("nav").style.visibility = "hidden";
    });
  },
  {
    threshold: 0.6,
  }
);
sections.forEach((section) => {
  observer.observe(section);
});

const observer1 = new IntersectionObserver(
  (entry) => {
    if (!entry.isIntersecting) {
      document.querySelector("nav").style.visibility = "visible";
      return;
    }
    document.querySelector("nav").style.visibility = "hidden";
  },
  {
    threshold: 0.7,
  }
);
observer1.observe(header);
}
