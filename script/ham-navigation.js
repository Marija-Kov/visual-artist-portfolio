export const hamburgerMenuDisplay = () => {
let hamMenu = document.querySelector('#menu-toggle');
let nav = document.querySelector('nav');

hamMenu.addEventListener('click', ()=> {
    hamMenu.classList.contains('open') ? hamMenu.classList.remove('open') : hamMenu.classList.add('open');
    hamMenu.classList.contains("open")
      ? nav.setAttribute("style", "display: inline-block")
      : nav.setAttribute("style", "display: none");

    if(((window.innerWidth < 1024) || (window.innerHeight < 768))&& document.querySelector('.details')){
      document.querySelector('.details').classList.contains('visible') ?
      document.querySelector('.details').classList.remove('visible') :
      null;

      document.querySelector('.show-details').innerText = "details >>";
       
    }
})

document.querySelector('#contact').style = "display: none";

 if(document.querySelector('.gallery')){
  nav.style.display = 'none';
  hamMenu.style.display = 'inline-block';
 }
}

