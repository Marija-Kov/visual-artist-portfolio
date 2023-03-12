

export const indexScrollAnimation = () => {
    const logo = document.querySelector('.logo-container')
    const categories = document.querySelector(".categories");
    const startPositionLogo = getComputedStyle(logo).top.slice(0,-2);
    const startPositionCategories = getComputedStyle(categories).top.slice(0, -2);
  window.addEventListener('scroll', ()=> {
    logo.style.top =`${startPositionLogo-window.scrollY/10}px`
  })
  window.addEventListener("scroll", () => {
    categories.style.top = `${startPositionCategories - window.scrollY / 6}px`;
  });
}

