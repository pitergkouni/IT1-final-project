const tracks = document.querySelectorAll(".track");
const premiumTrack = document.querySelector(".premium-track");
const bigScreen = document.querySelector(".watchNow");
const left = document.querySelectorAll(".left");
const right = document.querySelectorAll(".right");

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
