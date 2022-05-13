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
  .then(data => showData(data).then(initShowLarger(data)))
  .catch(err => `Error: ${err}`);
  

  async function showData(data){

     let details = document.createElement("div");
     details.classList.add("details");
     gallery.appendChild(details);

      showDetails.addEventListener('click', () => {
    if(details.style.visibility === 'hidden'){
      details.style.visibility = 'visible';
      showDetails.innerText = 'collapse';
    }else{details.style.visibility = "hidden";
        showDetails.innerText = 'details';
     } 
    })
    
     for (let i = 0; i < data._3d.length; ++i) {
       let thumb = document.createElement("div");
       thumb.classList.add("thumb");
       thumb.setAttribute('id', `${i}`);
       thumb.setAttribute('style', `background-image: url(${data._3d[i].images[0]});`);
       thumbs.appendChild(thumb);
       
      
     } 
  }

  async function initShowLarger(data) {
    let thumbs = document.querySelectorAll('.thumb');
    let details = document.querySelector(".details");
    let artId;
    thumbs.forEach(thumb =>
      thumb.addEventListener('click', () => {
        artId = thumb.getAttribute('id');
        console.log(artId);
        let style = window.getComputedStyle(thumb);
        let image = style.backgroundImage.slice(5, -12) + '.jpg';
        largeImg.setAttribute('src', `${image}`);
        details.innerText = `${data._3d[artId].name} (${data._3d[artId].year}) 

                             ${data._3d[artId].medium} 

                             ${data._3d[artId].size}

                             ${data._3d[artId].description}`;
        details.style.visibility = "hidden";                     
        gallery.style.background = 'rgba(36, 23, 16, 0.8)';
        showDetails.style.visibility = "visible";
            }))
  }

  