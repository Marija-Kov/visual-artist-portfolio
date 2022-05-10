let url = "/pages/data.json";

let thumbs = document.querySelector('.thumbs');

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then(data => showData(data))
  .catch(err => `Error: ${err}`);
  

  async function showData(data){
     for (let i = 0; i < data._3d.length; ++i) {
       let thumb = document.createElement("div");
       thumb.classList.add("thumb");
       thumb.setAttribute('style', `background-image: url(${data._3d[i].images[0]}); background-size: 160%; background-position-x: center;`);
       thumbs.appendChild(thumb);
     } 
  }