let burgerBtn = document.querySelector(".burger-btn");
let menuContainer = document.querySelector(".menu-container");
let links = document.querySelectorAll(".links a");
burgerBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("open");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((li)=>{
        li.parentElement.classList.remove('active');
    });
    link.parentElement.classList.add('active');
  });
});
