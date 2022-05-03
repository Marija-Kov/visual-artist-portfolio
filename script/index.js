let hamMenu = document.querySelector('#menu-toggle');
let logoParts = document.querySelectorAll('#logo>span');
let logo = document.querySelector("#logo");

hamMenu.addEventListener('click', ()=> {
    hamMenu.classList.contains('open') ? hamMenu.classList.remove('open') : hamMenu.classList.add('open');
})

window.addEventListener('scroll', ()=> {
    logo.classList.add('apart');
    setTimeout(() => {logo.classList.remove('apart')}, 3000)
})

