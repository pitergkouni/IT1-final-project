const arrowD = document.querySelector(".fa-angle-down");
const browseButton = document.querySelector("nav button:nth-of-type(2)");
const browseContent = document.querySelector(".dropdown");

browseContent.classList.add("none");

browseButton.onclick = () => {
  if (arrowD.classList.contains("fa-angle-down")) {
    arrowD.classList.replace("fa-angle-down", "fa-angle-up");
    browseContent.classList.remove("none");
  } else {
    arrowD.classList.replace("fa-angle-up", "fa-angle-down");
    browseContent.classList.add("none");
  }
};

document.querySelectorAll(".dropdown div").forEach((div) => {
  div.addEventListener("mouseover", () => {
    /* document.querySelectorAll(".dropdown > div > button").forEach((button) => {
      button.style.border = "1px solid rgb(89, 89, 225)"; */
    div.firstElementChild.style.border = "1px solid rgb(89,89,225)";
  });
  div.addEventListener("mouseout", () => {
    div.firstElementChild.style.border = "1px solid rgb(46, 46, 118)";
  });
});

document.querySelectorAll(".dropdown > button").forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.firstElementChild.style.color = "rgb(89,89,225)";
    button.lastElementChild.style.color = "rgb(89,89,225)";
  });
  button.addEventListener("mouseout", () => {
    button.firstElementChild.style.color = "var(--graa-50)";
    button.lastElementChild.style.color = "var(--graa-50)";
  });
});

const categories = document.querySelectorAll(".browseCategories button");
categories.forEach((button) => {
  button.classList.add("inactive");
});
/*   button.addEventListener("mouseover", () => {
    button.classList.replace("inactive", "active");
  });
  button.addEventListener("mouseout", () => {
    button.classList.replace("active", "inactive");
  });
}); */

categories.forEach((button) => {
  button.addEventListener("click", () => {
    categories.forEach((button) => {
      button.classList.replace("active", "inactive");
    });
    button.classList.replace("inactive", "active");
  });
});

const filmWrapper = document.querySelector(".filmWrapper");

for (let i = 0; i < 16; i += 1) {
  const film = document.createElement("div");
  film.classList.add("wideFilm");
  filmWrapper.appendChild(film);
}

const historyWrapper = document.querySelector(".historyWrapper");
console.log(historyWrapper);

for (let i = 0; i < 12; i += 1) {
  const f = document.createElement("div");
  f.classList.add("wideFilm");
  historyWrapper.appendChild(f);
}

const watchlistWrapper = document.querySelector(".watchlistWrapper");

for (let i = 0; i < 12; i += 1) {
  const f = document.createElement("div");
  f.classList.add("wideFilm");
  watchlistWrapper.appendChild(f);
}