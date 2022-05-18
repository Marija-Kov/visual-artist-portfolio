let thumbs = document.querySelector(".thumbs");
let largeImg = document.querySelector(".large");
let gallery = document.querySelector(".gallery");
let showDetails = document.querySelector(".show-details");

async function showData(data, art) {
  for (let i = 0; i < data.art.length; ++i) {
    let thumb = document.createElement("div");
    thumb.classList.add("thumb");
    thumb.setAttribute("id", `a${i}`);
    thumb.setAttribute(
      "style",
      `background-image: url(${data.art[i].images[0]});`
    );
    thumbs.appendChild(thumb);
    let details = document.createElement("article");
    details.classList.add("details");
    details.setAttribute("id", `a${i}`);
    details.innerText = `${data.art[i].name} (${data.art[i].year}) 

                             ${data.art[i].medium} 

                             ${data.art[i].size}

                             ${data.art[i].description}`;
    gallery.appendChild(details);
    let large = document.createElement("img");
    large.setAttribute("src", `${data.art[i].images[1]}`);
    large.setAttribute("alt", `${data.art[i].description}`);
    large.setAttribute("id", `a${i}`);
    large.width > large.height
      ? ((large.style.width = "75%"), (large.style.maxWidth = "900px"))
      : ((large.style.height = "75%"), (large.style.maxHeight = "600px"));
    largeImg.appendChild(large);
  }
}

export const init1 = async function initShowLarger() {
  let thumbs = document.querySelectorAll(".thumb");
  let larges = document.querySelectorAll(".large>img");
  let articles = document.querySelectorAll(".details");
  thumbs.forEach((thumb) =>
    thumb.addEventListener("click", () => {
      // let style = window.getComputedStyle(thumb);
      // let image = style.backgroundImage.slice(5
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
export const init2 = async function initShowDetails() {
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

