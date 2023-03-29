const form = document.querySelector("form");
const password = document.querySelector("#pwd");
const confirmedPassword = document.querySelector("#confirm-pwd");
const passwordDiv = document.querySelector(".cpwd");
const pwdErrorMessage = document.createElement("p");


pwdErrorMessage.textContent = "* Passwords don't match";
pwdErrorMessage.classList.add("pwd-error");

confirmedPassword.addEventListener("change", () => {
  if (password.value != confirmedPassword.value) {
    passwordDiv.appendChild(pwdErrorMessage);
  }
  else {
    passwordDiv.removeChild(pwdErrorMessage);
  }
})

form.addEventListener("submit", (event) => {
  if (passwordDiv.lastChild === pwdErrorMessage) {
    event.preventDefault;
    event.stopPropagation;
  }
})

