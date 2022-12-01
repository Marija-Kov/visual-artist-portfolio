export const initShowLarger = async () => {
  let thumbs = document.querySelectorAll(".thumb");
  let larges = document.querySelectorAll(".large>img");
  let gallery = document.querySelector(".gallery");
  let showDetails = document.querySelector(".show-details");
  let nav = document.querySelector("nav");
  let articles = document.querySelectorAll(".details");
  thumbs.forEach((thumb) =>
    thumb.addEventListener("click", () => {
      if (window.innerWidth < 1024 || window.innerHeight < 740) {
        nav.setAttribute("style", "display: none");
      }
      let artId = thumb.getAttribute("id");
      larges.forEach((large) => {
        large.getAttribute("id") === artId
          ? (large.style.filter = "opacity(1)")
          : (large.style.filter = "opacity(0)");
      });
      let thumbsContainer = document.querySelector('.thumbs');
      let rgb = getComputedStyle(thumbsContainer)
        .getPropertyValue("background")
        .match(/\d+, \d+, \d+/);
      gallery.style.background = `rgba(${rgb}, 0.8)`;
      showDetails.setAttribute("id", `${artId}`);
      showDetails.style.filter = "opacity(1)";
      showDetails.innerText = "?";
      articles.forEach((article) => {
        article.classList.contains("visible")
          ? article.classList.remove("visible")
          : null;
      });
    })
  );
};

export const initShowDetails = async () => {
  let hamMenu = document.querySelector("#menu-toggle");
  let showDetails = document.querySelector(".show-details");
  let nav = document.querySelector("nav");
  let articles = document.querySelectorAll(".details");
  showDetails.addEventListener("click", () => {
    articles.forEach((article) => {
      article.getAttribute("id") === showDetails.getAttribute("id")
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
