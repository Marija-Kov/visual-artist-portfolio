
export const loading = () => {
  window.addEventListener('load', () => {
    let loading = document.querySelector('#loading');
    setTimeout(() => {loading.style = "display: none";}, 1500)
})  
}
