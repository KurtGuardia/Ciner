

//_________________Hamburger Navbar___________________
const navSlide = () => {
  const burger2 = document.querySelector(".burger2");
  const navMini = document.querySelector(".nav-mini");
  const navLinksMini = document.querySelectorAll(".nav-mini li");

  // Toggle NavBar Mini
  burger2.addEventListener("click", () => {
    navMini.classList.toggle("nav-active");
    // Animate links
    navLinksMini.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });
    // Burger Animation
    burger2.classList.toggle("toggle");
  });
};

navSlide();
