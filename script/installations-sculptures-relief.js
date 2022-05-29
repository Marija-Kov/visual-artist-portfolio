
let url = "/pages/data.json";
let thumbs = document.querySelector('.thumbs');
let largeImg = document.querySelector('.large');
let gallery = document.querySelector('.gallery');
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => showData(data))
  .then(init1)
  .then(init2)
  .catch((err) => `Error: ${err}`);
  async function showData(data) {
    for (let i = 0; i < data._3d.length; ++i) {
      let thumb = document.createElement("div");
      thumb.classList.add("thumb");
      thumb.setAttribute("id", `a${i}`);
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
      let large = document.createElement('img');
      large.setAttribute("src", `${data._3d[i].images[1]}`);
      large.setAttribute("alt", `${data._3d[i].alt}`);
      large.setAttribute("id", `a${i}`);
      largeImg.appendChild(large);
    }
  }
 

  import {init1, init2} from "./artDisplay.js";