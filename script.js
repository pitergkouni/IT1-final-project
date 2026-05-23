const signinSection = document.querySelector(".signinsection");
const signUpButtons = document.querySelectorAll(".getStarted, #signUp");
const xBtn = document.querySelector(".signincontainer i");
const transBtn = document.querySelector("#trans");
const trans2Btn = document.querySelector(
  ".transContainer > button:last-of-type",
);
const transBtnText = document.querySelector(".trans1text");
const arrowDown = document.querySelector(".fa-angle-down");
let isEnglish = true;

signinSection.classList.add("none");
trans2Btn.classList.add("none");

signUpButtons.forEach((button) => {
  button.onclick = () => {
    signinSection.classList.remove("none");
  };
});

xBtn.onclick = () => {
  signinSection.classList.add("none");
};

transBtn.onclick = () => {
  trans2Btn.classList.toggle("none");
  if (arrowDown.classList.contains("fa-angle-down")) {
    arrowDown.classList.replace("fa-angle-down", "fa-angle-up");
  } else {
    arrowDown.classList.replace("fa-angle-up", "fa-angle-down");
  }
};

document.querySelector("section:last-of-type").onclick = () => {
  trans2Btn.classList.add("none");
  arrowDown.classList.replace("fa-angle-up", "fa-angle-down");
};

signinSection.onclick = () => {
  trans2Btn.classList.add("none");
  arrowDown.classList.replace("fa-angle-up", "fa-angle-down");
};

trans2Btn.onclick = () => {
  trans2Btn.classList.add("none");
  arrowDown.classList.replace("fa-angle-up", "fa-angle-down");
  if (isEnglish) {
    transBtnText.textContent = "Norsk bokmål";
    trans2Btn.textContent = "English";
  } else {
    transBtnText.textContent = "English";
    trans2Btn.textContent = "Norsk bokmål";
  }
  isEnglish = !isEnglish;
};