
export const sendMessage = () => {
  let send = document.querySelector("button");
  let firstName = document.querySelector("#firstname");
  let email = document.querySelector("#email");
  let message = document.querySelector("textarea");

  send.addEventListener("click", () => {
    if (
      message.value &&
      email.value &&
      email.value.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ) &&
      firstName.value
    ) {
      send.innerText = "sending...";
      setTimeout(() => {
        send.innerText = "Thanks! I will respond shortly.";
      }, 500);
      setTimeout(() => {
        send.innerText = "Back to Home now...";
      }, 2500);
    } else {
      send.innerText = "Please fill out all the fields properly.";
      setTimeout(() => {
        send.innerText = "send";
      }, 3000);
    }
  });
};