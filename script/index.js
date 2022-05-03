let hamMenu = document.querySelector('#menu-toggle');

hamMenu.addEventListener('click', ()=> {
    hamMenu.classList.contains('open') ? hamMenu.classList.remove('open') : hamMenu.classList.add('open');
})
