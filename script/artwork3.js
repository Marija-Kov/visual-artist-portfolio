let url = "/pages/data.json";

let thumbs = document.querySelector(".thumbs");
let largeImg = document.querySelector(".large");
let gallery = document.querySelector(".gallery");
let showDetails = document.querySelector(".show-details");

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
  for (let i = 0; i < data.embroidery.length; ++i) {
    let thumb = document.createElement("div");
    thumb.classList.add("thumb");
    thumb.setAttribute("id", `a${i}`);
    thumb.setAttribute(
      "style",
      `background-image: url(${data.embroidery[i].images[0]});`
    );
    thumbs.appendChild(thumb);
    let details = document.createElement("article");
    details.classList.add("details");
    details.setAttribute("id", `a${i}`);
    details.innerText = `${data.embroidery[i].name} (${data.embroidery[i].year}) 

                             ${data.embroidery[i].medium} 

                             ${data.embroidery[i].size}

                             ${data.embroidery[i].description}`;
    gallery.appendChild(details);
    let large = document.createElement("img");
    large.setAttribute("src", `${data.embroidery[i].images[1]}`);
    large.setAttribute("id", `a${i}`);
    large.setAttribute("alt", `${data.embroidery[i].description}`);
    large.width > large.height
      ? (large.style.width = "75%")
      : (large.style.height = "75%");
    largeImg.appendChild(large);
  }
}

async function initShowLarger() {
  let thumbs = document.querySelectorAll(".thumb");
  let larges = document.querySelectorAll(".large>img");
  let articles = document.querySelectorAll(".details");
  thumbs.forEach((thumb) =>
    thumb.addEventListener("click", () => {
      let artId = thumb.getAttribute("id");
      larges.forEach((large) => {
        large.getAttribute("id") === artId
          ? (large.style.filter = "opacity(1)")
          : (large.style.filter = "opacity(0)");
      });

      gallery.style.background = "rgba(36, 23, 16, 0.8)";
      showDetails.setAttribute("id", `${artId}`);
      showDetails.style.filter = "opacity(1)";
      showDetails.innerText = "details";
      articles.forEach((article) => {
        article.classList.contains("visible")
          ? article.classList.remove("visible")
          : null;
      });
    })
  );
}

async function initShowDetails() {
  let articles = document.querySelectorAll(".details");
  showDetails.addEventListener("click", () => {
    console.log(`clicked  ${showDetails.getAttribute("id")}`);
    articles.forEach((article) => {
      article.getAttribute("id") === showDetails.getAttribute("id")
        ? article.classList.add("visible")
        : article.classList.remove("visible");
    });
    showDetails.innerText === "details"
      ? (showDetails.innerText = "collapse")
      : ((showDetails.innerText = "details"),
        articles.forEach((article) => {
          article.classList.contains("visible")
            ? article.classList.remove("visible")
            : null;
        }));
  });
}
