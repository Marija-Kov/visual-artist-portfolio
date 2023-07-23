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

export const initShowDetailsBtn = async () => {
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

export const showDetails = async (category) => {
  let thumbs = document.querySelector(".thumbs");
  let largeImg = document.querySelector(".large");
  let gallery = document.querySelector(".gallery");
 for (let i = 0; i < category.length; ++i) {
   let thumb = document.createElement("div");
   thumb.classList.add("thumb");
   thumb.setAttribute("id", `a${i}`);
   thumb.setAttribute(
     "style",
     `background-image: url(${category[i].images[0]});`
   );
   thumbs.appendChild(thumb);
   let details = document.createElement("article");
   details.classList.add("details");
   details.setAttribute("id", `a${i}`);
   details.innerText = `${category[i].name} (${category[i].year}) 

                            ${category[i].medium} 

                            ${category[i].size}

                            ${category[i].description}`;
   gallery.appendChild(details);
   let large = document.createElement("img");
   if(window.innerWidth > 500){
    large.setAttribute("src", `${category[i].images[1]}`);
   } else {
    large.setAttribute("src", `${category[i].images[2]}`);    
   }
   large.setAttribute("id", `a${i}`);
   large.setAttribute("alt", `${category[i].alt}`);
   largeImg.appendChild(large);
 }
};
