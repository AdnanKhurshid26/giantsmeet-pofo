const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav-list");
  const navLinks = document.querySelectorAll("main-nav-link");
  //Toggle Navb
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  //Animate links
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
  });
};

//Div Highlight//////////////////////

navSlide();

console.log(scrollY);
