let hamMenu = document.querySelector('#menu-toggle');
let logoParts = document.querySelectorAll('#logo>span');
let logo = document.querySelector("#logo");
let nav = document.querySelector('nav');

hamMenu.addEventListener('click', ()=> {
    hamMenu.classList.contains('open') ? hamMenu.classList.remove('open') : hamMenu.classList.add('open');
    hamMenu.classList.contains("open")
      ? nav.setAttribute("style", "display: inline-block")
      : nav.setAttribute("style", "display: none");
})

window.addEventListener('scroll', ()=> {
    logo.classList.add('apart');
    setTimeout(() => {logo.classList.remove('apart')}, 3000)
})

