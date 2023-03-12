export const initShowLarger = async () => {
  let thumbs = document.querySelectorAll(".thumb");
  let larges = document.querySelectorAll(".large>img");
  let gallery = document.querySelector(".gallery");
  let showDetailsBtn = document.querySelector(".show-details");
  let hamMenu = document.querySelector("#menu-toggle");
  let nav = document.querySelector("nav");
  let articles = document.querySelectorAll(".details");
  thumbs.forEach((thumb) =>
    thumb.addEventListener("click", () => {
      if (window.innerWidth < 1024 || window.innerHeight < 740) {
        nav.setAttribute("style", "display: none");
      }
      let artId = thumb.getAttribute("id");
      larges.forEach((large) => {
       if(large.getAttribute("id") === artId){
        large.style.filter = "opacity(1)";
        large.style.zIndex = 20;
        hamMenu.classList.contains('open') ?
        hamMenu.classList.remove('open') :
         null;
       } else large.style.filter = "opacity(0)";
      });
      let thumbsContainer = document.querySelector('.thumbs');
      let rgb = getComputedStyle(thumbsContainer)
        .getPropertyValue("background")
        .match(/\d+, \d+, \d+/);
      gallery.style.background = `rgba(${rgb}, 0.8)`;
      showDetailsBtn.setAttribute("id", `${artId}`);
      showDetailsBtn.style.filter = "opacity(1)";
      showDetailsBtn.innerText = "?";
      articles.forEach((article) => {
        article.classList.contains("visible")
          ? article.classList.remove("visible")
          : null;
      });
    })
  );
};

export const initshowDetailsBtn = async () => {
  let hamMenu = document.querySelector("#menu-toggle");
  let showDetailsBtn = document.querySelector(".show-details");
  let nav = document.querySelector("nav");
  let articles = document.querySelectorAll(".details");
  showDetailsBtn.addEventListener("click", () => {
    articles.forEach((article) => {
      article.getAttribute("id") === showDetailsBtn.getAttribute("id")
        ? article.classList.add("visible")
        : article.classList.remove("visible");  
      article.addEventListener('click', ()=>{
        article.classList.remove("visible");
      })
  });
  hamMenu.classList.contains('open') ?
  hamMenu.classList.remove('open') :
  null;

  if((window.innerWidth < 1200) || (window.innerHeight < 768)){
    nav.setAttribute('style', 'display: none');
  }

  });
};
