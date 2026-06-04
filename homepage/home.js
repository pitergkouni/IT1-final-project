import { films, filmsCount } from "../global.js";

const tracks = document.querySelectorAll(".track");
const premiumTrack = document.querySelector(".premium-track");
const bigScreen = document.querySelector(".watchNow");
const left = document.querySelectorAll(".left");
const right = document.querySelectorAll(".right");
const track2026 = document.querySelector("#top2026 .track");
const trackTop = document.querySelector("#topRated .track");
const trackChris = document.querySelector("#chrisNol .track");
const historyButton = document.querySelector(
  ".dropdown > button:first-of-type",
);
const watchLButton = document.querySelector(
  ".dropdown > button:nth-of-type(2)",
);

films.forEach((filmData) => {
  if (filmData.year == 2026) {
    const film = document.createElement("div");
    film.classList.add("wideFilm");
    film.style.backgroundImage = "url(" + filmData.backdrop_url + ")";
    const logo = document.createElement("img");
    logo.src = filmData.logo_url;
    film.appendChild(logo);
    track2026.appendChild(film);
  }
});

films.forEach((filmData) => {
  if (filmData.imdb_rating > 8.9) {
    const film = document.createElement("div");
    film.classList.add("wideFilm");
    film.style.backgroundImage = "url(" + filmData.backdrop_url + ")";
    const logo = document.createElement("img");
    logo.src = filmData.logo_url;
    film.appendChild(logo);
    trackTop.appendChild(film);
  }
});

films.forEach((filmData) => {
  if (filmData.director == "Christopher Nolan") {
    const film = document.createElement("div");
    film.classList.add("wideFilm");
    film.style.backgroundImage = `url(${filmData.backdrop_url})`;
    const logo = document.createElement("img");
    logo.src = filmData.logo_url;
    film.appendChild(logo);
    trackChris.appendChild(film);
  }
});

let displayedFilms = [];

for (let i = 0; i < 15; i++) {
  const filmElm = document.createElement("div");
  filmElm.classList.add("narrowFilm");

  let filmIndex = Math.floor(Math.random() * filmsCount);

  while (displayedFilms.includes(filmIndex)) {
    filmIndex = Math.floor(Math.random() * filmsCount);
  }

  filmElm.style.backgroundImage = `url(${films[filmIndex].image_url})`;
  displayedFilms.push(filmIndex);

  premiumTrack.appendChild(filmElm);
}

function filmShower() {
  let filmIndex = Math.floor(Math.random() * filmsCount);
  bigScreen.style.backgroundImage =
    "url(" + films[filmIndex].backdrop_url + ")";
  const oldLogo = bigScreen.querySelector("img:not(.graddy)");
  if (oldLogo) oldLogo.remove();
  const filmLG = document.createElement("img");
  filmLG.src = films[filmIndex].logo_url;
  bigScreen.appendChild(filmLG);
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

filmShower();
setInterval(filmShower, 6000);
