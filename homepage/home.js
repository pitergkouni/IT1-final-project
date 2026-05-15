const tracks = document.querySelectorAll(".track");

const premiumTrack = document.querySelector(".premium-track");

const bigScreen = document.querySelector(".watchNow");

const left = document.querySelectorAll(".left");

const right = document.querySelectorAll(".right");

const arrowD = document.querySelector(".fa-angle-down");

const browseButton = document.querySelector("nav button:nth-of-type(2)");

const browseContent = document.querySelector(".dropdown");

const track2026 = document.querySelector("#top2026 .track");

const trackTop = document.querySelector("#topRated .track");

const trackChris = document.querySelector("#chrisNol .track");

const films = await fetch("../films.json").then((r) => r.json());

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

films.forEach((filmData) => {
  if (filmData.year == 2026) {
    const film = document.createElement("div");
    film.classList.add("wideFilm");
    film.style.backgroundImage = `url(${filmData.backdrop_url})`;
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
    film.style.backgroundImage = `url(${filmData.backdrop_url})`;
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

for (let i = 0; i < 15; i++) {
  const film = document.createElement("div");
  film.classList.add("narrowFilm");
  film.style.backgroundImage = `url(${films[Math.floor(Math.random() * 100)].image_url})`;
  premiumTrack.appendChild(film);
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
