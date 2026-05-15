const arrowD = document.querySelector(".fa-angle-down");
const browseButton = document.querySelector("nav button:nth-of-type(2)");
const browseContent = document.querySelector(".dropdown");
const films = await fetch("../films.json").then((r) => r.json());
const historyH1 = document.querySelector("h1");
const watchListH1 = document.querySelector("h1:last-of-type");
historyH1.classList.add("none");
watchListH1.classList.add("none");

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

const filmWrapper = document.querySelector(".filmWrapper");

films.forEach((filmData) => {
  const film = document.createElement("div");
  film.classList.add("wideFilm");
  film.style.backgroundImage = `url(${filmData.backdrop_url})`;
  film.dataset.genre = filmData.genre;
  film.dataset.popular = filmData.popular;
  film.title = filmData.title;
  const logo = document.createElement("img");
  logo.src = filmData.logo_url;
  film.appendChild(logo);
  filmWrapper.appendChild(film);
});

categories.forEach((button) => {
  button.addEventListener("click", () => {
    categories.forEach((button) => {
      button.classList.replace("active", "inactive");
      document.querySelectorAll(".filmWrapper div").forEach((film) => {
        film.classList.add("none");
      });
    });
    button.classList.replace("inactive", "active");
    document.querySelectorAll(".filmWrapper div").forEach((film) => {
      if (film.dataset.genre == button.textContent) {
        film.classList.remove("none");
      }
    });
  });
});

document.querySelector(".browseCategories button").onclick = () => {
  const movies = document.querySelectorAll(".filmWrapper .wideFilm");
  movies.forEach((movie) => {
    if (movie.dataset.popular == "true") {
      movie.classList.remove("none");
    }
  });
};

const historyWrapper = document.querySelector(".historyWrapper");
historyWrapper.classList.add("none");

for (let i = 0; i < 12; i += 1) {
  const f = document.createElement("div");
  f.classList.add("wideFilm");
  historyWrapper.appendChild(f);
}

const watchlistWrapper = document.querySelector(".watchlistWrapper");
watchlistWrapper.classList.add("none");

for (let i = 0; i < 12; i += 1) {
  const f = document.createElement("div");
  f.classList.add("wideFilm");
  watchlistWrapper.appendChild(f);
}
