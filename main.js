// Get elements
const firstNameEl = document.querySelector("#first-name");
const lastNameEl = document.querySelector("#last-name");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const formEl = document.querySelector(".form__signup");

const firstNameContainerEl = document.querySelector(".first-name-container");
const lastNameContainerEl = document.querySelector(".last-name-container");
const emailContainerEl = document.querySelector(".email-container");
const passwordContainerEl = document.querySelector(".password-container");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  validateSimpleInput(firstNameEl, firstNameContainerEl);
  validateSimpleInput(lastNameEl, lastNameContainerEl);
  validateSimpleInput(passwordEl, passwordContainerEl);

  // Email validation
  const value = emailEl.value;
  const valid = validateEmail(value);

  if (valid) {
    emailEl.value = "";
    emailEl.classList.remove("invalid");
    emailContainerEl.querySelector("img").classList.add("hidden");
    emailContainerEl.querySelector("p").classList.add("hidden");
  } else {
    emailEl.classList.add("invalid");
    emailContainerEl.querySelector("img").classList.remove("hidden");
    emailContainerEl.querySelector("p").classList.remove("hidden");
  }
});

function validateSimpleInput(element, container) {
  if (element.value.trim() == "") {
    element.classList.add("invalid");
    container.querySelector("img").classList.remove("hidden");
    container.querySelector("p").classList.remove("hidden");
  } else {
    element.value = "";
    element.classList.remove("invalid");
    container.querySelector("img").classList.add("hidden");
    container.querySelector("p").classList.add("hidden");
  }
}

function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return input.match(validRegex) && input != "";
}
