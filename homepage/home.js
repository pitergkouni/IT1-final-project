const tracks = document.querySelectorAll(".track");
const premiumTrack = document.querySelector(".premium-track");
const bigScreen = document.querySelector(".watchNow");
const left = document.querySelectorAll(".left");
const right = document.querySelectorAll(".right");
const arrowD = document.querySelector(".fa-angle-down");
const browseButton = document.querySelector("nav button:nth-of-type(2)");
const browseContent = document.querySelector(".dropdown");

// at line 10
const films = await fetch("../films.json").then((r) => r.json());

console.log(films);

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

tracks.forEach((div) => {
  for (let i = 0; i < 15; i++) {
    const film = document.createElement("div");
    film.classList.add("wideFilm");
    div.appendChild(film);
  }
});

for (let i = 0; i < 15; i++) {
  const film = document.createElement("div");
  film.classList.add("narrowFilm");
  premiumTrack.appendChild(film);

  const hElm = document.createElement("h2");
  hElm.textContent = films[i].title;
  film.appendChild(hElm);

  const imgElm = document.createElement("img");
  imgElm.src = films[i].image_url;
  film.appendChild(imgElm);
}

right.forEach((button) => {
  button.onclick = () => {
    button.nextElementSibling.scrollLeft += 310;
  };
});

left.forEach((button) => {
  button.onclick = () => {
    button.nextElementSibling.nextElementSibling.scrollLeft -= 310;
  };
});

const moviesBtn = document.querySelector(".dropdown div");
console.log(moviesBtn);
