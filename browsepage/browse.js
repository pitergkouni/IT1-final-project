import { films } from "../global.js";

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
