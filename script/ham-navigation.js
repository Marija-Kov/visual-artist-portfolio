export const hamburgerMenuDisplay = () => {
let hamMenu = document.querySelector('#menu-toggle');
let nav = document.querySelector('nav');

hamMenu.addEventListener('click', ()=> {
    if(hamMenu.classList.contains('open')){
      hamMenu.classList.remove('open');
      nav.style.display = "none";
    } else {
      hamMenu.classList.add('open');
      let visibleDetails = document.querySelector(".visible");
      visibleDetails ? visibleDetails.classList.remove('visible') : null;
      nav.style.display = "inline-block";
    } 
});
 if(document.querySelector('.gallery')){
  nav.style.display = 'none';
  hamMenu.style.display = 'inline-block';
 };
 window.addEventListener("resize", () => {
  hamMenu.classList.remove("open");
  if (window.innerWidth >= 1024 && !document.querySelector(".gallery")) {
   nav.style.display = "inline-block";
   hamMenu.style.display = "none";
  } else {
  nav.style.display = "none";
  hamMenu.style.display = "inline-block";
  }
 })
 
}

