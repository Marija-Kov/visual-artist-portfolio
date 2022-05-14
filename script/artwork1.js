let url = "/pages/data.json";

let thumbs = document.querySelector('.thumbs');
let largeImg = document.querySelector('.fit-large');
let gallery = document.querySelector('.gallery');
let showDetails = document.querySelector('.show-details');




fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => showData(data))
  .then(initShowLarger)
  .then(initShowDetails)
  .catch((err) => `Error: ${err}`);
  
  async function showData(data) {
    for (let i = 0; i < data._3d.length; ++i) {
      let thumb = document.createElement("div");
      thumb.classList.add("thumb");
      thumb.setAttribute("id", `${i}`);
      thumb.setAttribute("style",`background-image: url(${data._3d[i].images[0]});`);
      thumbs.appendChild(thumb);
      let details = document.createElement("article");
      details.classList.add("details");
      details.setAttribute('id', `a${i}`);
      details.innerText = `${data._3d[i].name} (${data._3d[i].year}) 

                             ${data._3d[i].medium} 

                             ${data._3d[i].size}

                             ${data._3d[i].description}`;
      gallery.appendChild(details);
    }
  }

  async function initShowLarger() {
    let thumbs = document.querySelectorAll(".thumb");
    let articles = document.querySelectorAll(".details");
    thumbs.forEach((thumb) =>
      thumb.addEventListener("click", () => {
        let style = window.getComputedStyle(thumb);
        let image = style.backgroundImage.slice(5, -12) + ".jpg";
        let artId = thumb.getAttribute('id');
        largeImg.setAttribute("src", `${image}`);
        gallery.style.background = "rgba(36, 23, 16, 0.8)";
        showDetails.setAttribute('id', `a${artId}`);
        showDetails.style.filter = "opacity(1)";
        showDetails.innerText = 'details';
         articles.forEach((article) => {
           article.classList.contains("visible")
             ? article.classList.remove("visible")
             : null;
         });

      })
    );
  }
  
  async function initShowDetails(){
    let articles = document.querySelectorAll(".details");
   showDetails.addEventListener('click', () => {
     console.log(`clicked  ${showDetails.getAttribute('id')}`);
           articles.forEach(article => {
             article.getAttribute('id') === showDetails.getAttribute('id') ?
             article.classList.add('visible') :
             article.classList.remove('visible');
           })
          showDetails.innerText === 'details' ?
          showDetails.innerText = 'collapse' :
          (showDetails.innerText = 'details', 
          articles.forEach(article => {
            article.classList.contains('visible') ?
            article.classList.remove('visible') :
            null
          })) 
         })
    }
 