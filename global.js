export const films = await fetch(new URL("films.json", import.meta.url)).then(
  (r) => r.json(),
);
export const filmsCount = films.length;

const arrowD = document.querySelector(".fa-angle-down");
const browseButton = document.querySelector("nav button:nth-of-type(2)");
const browseContent = document.querySelector(".dropdown");

if (browseContent) {
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
}

films.forEach((film) => {
  localStorage.setItem("filmTitle", JSON.stringify(film));
});

const maGlass = document.querySelector(".fa-magnifying-glass");
const searchContainer = document.querySelector(".searchContainer");
searchContainer.classList.add("none");

maGlass.parentElement.onclick = () => {
  searchContainer.classList.remove("none");
};

const X = document.querySelector(".fa-x");

X.parentElement.onclick = () => {
  searchContainer.classList.add("none");
};

const inputElm = document.querySelector(".searchContainer > input");

inputElm.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const inputValue = inputElm.value;
    films.forEach((film) => {
      if (inputValue == film.title) {
        console.log("The film you searched for is " + film.title);
      }
    });
  }
});
