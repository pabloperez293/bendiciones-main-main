// Desplegar menu hamburguersa
const menuHamburguer = document.querySelector(".menu-hamburguer");
const navLinks = document.querySelector(".navLinks");

menuHamburguer.addEventListener("click", () => {
  // cambiamos el icono
  menuHamburguer.classList.toggle("fa-bars");
  menuHamburguer.classList.toggle("fa-xmark");
  // Abrir o cerrar el menú
  const isActive = navLinks.classList.toggle("active");
  // Le damos estilos cuando este activo
  menuHamburguer.style.color = isActive ? "var(--second-color)" : "var(--first-color)";
});
// Agregar evento de clic a cada enlace del menú
const menuLinks = document.querySelectorAll(".navLinks ul li a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuHamburguer.classList.remove("fa-xmark");
    menuHamburguer.classList.add("fa-bars");
    menuHamburguer.style.color = "var(--first-color)";
  });
});

//--------- Swipper
const swiper = new Swiper('.mySwiper', { 
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    depth:500,
    modifier:1,
    slidesShadows:true,
    rotate: 0,
    stretch: 0,
  },
})
// ------------ Scroll del menu
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  let insNavbarFixed = false;

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
  
    if (scrollY > 50 && !insNavbarFixed) {
      navbar.classList.add("fixed");
      isNavbarFixed = true;
    } else if (scrollY <= 50 && insNavbarFixed) {
      navbar.classList.remove("fixed");
      isNavbarFixed = false;
    }
  });
});
