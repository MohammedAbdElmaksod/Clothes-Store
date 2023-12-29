let gearBtn = document.querySelector(".setting-gear");
let settings = document.querySelector(".settings");
let colorsLi = document.querySelectorAll(".settings .colors li");
let burgerBtn = document.querySelector(".burger-btn");
let menuContainer = document.querySelector(".menu-container");
let links = document.querySelectorAll(".links a");
let colorStorage = localStorage.getItem("color-option");
if (colorStorage !== null) {
  document.documentElement.style.setProperty("--orange-color", colorStorage);
  colorsLi.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color === colorStorage) {
      li.classList.add("active");
    }
  });
}
burgerBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("open");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((li) => {
      li.parentElement.classList.remove("active");
    });
    link.parentElement.classList.add("active");
  });
});
gearBtn.addEventListener("click", () => {
  settings.classList.toggle("open");
  gearBtn.children[0].classList.toggle("fa-spin");
});

colorsLi.forEach((li) => {
  li.style.backgroundColor = li.dataset.color;
  li.addEventListener("click", () => {
    colorsLi.forEach((activeLi) => {
      activeLi.classList.remove("active");
    });
    localStorage.setItem("color-option", li.dataset.color);
    li.classList.add("active");
    document.documentElement.style.setProperty(
      "--orange-color",
      li.dataset.color
    );
  });
});
