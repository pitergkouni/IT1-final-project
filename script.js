const signinSection = document.querySelector(".signinsection");
const signUpButtons = document.querySelectorAll(".getStarted, #signUp");
const xBtn = document.querySelector(".signincontainer i");
const transBtn = document.querySelector("#trans");
const trans2Btn = document.querySelector(
  ".transContainer > button:last-of-type",
);
const transBtnText = document.querySelector(".trans1text");
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
};

document.querySelector("section:last-of-type").onclick = () => {
  trans2Btn.classList.add("none");
};

signinSection.onclick = () => {
  trans2Btn.classList.add("none");
};

trans2Btn.onclick = () => {
  trans2Btn.classList.add("none");
  if (isEnglish) {
    transBtnText.textContent = "Norsk bokmål";
    trans2Btn.textContent = "English";
  } else {
    transBtnText.textContent = "English";
    trans2Btn.textContent = "Norsk bokmål";
  }
  isEnglish = !isEnglish;
};
