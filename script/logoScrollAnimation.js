

export const logoScrollAnimation = () => {
    const logo = document.querySelector('.logo-container')
    const startPosition = getComputedStyle(logo).top.slice(0,-2);
  window.addEventListener('scroll', ()=> {
    logo.style.top =`${startPosition-window.scrollY/10}px`
  })
}

