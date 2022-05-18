
let gallery = document.querySelector(".gallery");
let showDetails = document.querySelector(".show-details");

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
};
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
};
