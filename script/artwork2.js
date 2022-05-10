let url = "/pages/data.json";

let thumbs = document.querySelector(".thumbs");
let largeImg = document.querySelector(".fit-large");

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
  .catch((err) => `Error: ${err}`);


async function showData(data) {
  for (let i = 0; i < data._2d.length; ++i) {
    let thumb = document.createElement("div");
    thumb.classList.add("thumb");
    thumb.setAttribute(
      "style",
      `background-image: url(${data._2d[i].images[0]});`
    );
    thumbs.appendChild(thumb);
  }
}

  async function initShowLarger() {
    let thumbs = document.querySelectorAll(".thumb");
    thumbs.forEach((thumb) =>
      thumb.addEventListener("click", () => {
        let style = window.getComputedStyle(thumb);
        let image = style.backgroundImage.slice(5, -12) + ".jpg";
        largeImg.setAttribute("src", `${image}`);
      })
    );
  }
