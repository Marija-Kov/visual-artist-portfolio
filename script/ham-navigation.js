let hamMenu = document.querySelector('#menu-toggle');
let nav = document.querySelector('nav');

hamMenu.addEventListener('click', ()=> {
    hamMenu.classList.contains('open') ? hamMenu.classList.remove('open') : hamMenu.classList.add('open');
    hamMenu.classList.contains("open")
      ? nav.setAttribute("style", "display: inline-block")
      : nav.setAttribute("style", "display: none");
})



