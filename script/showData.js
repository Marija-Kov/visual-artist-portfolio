

export const showData = async (data, category) => {
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
    large.setAttribute("src", `${category[i].images[1]}`);
    large.setAttribute("id", `a${i}`);
    large.setAttribute("alt", `${category[i].alt}`);
    largeImg.appendChild(large);
  }
};
