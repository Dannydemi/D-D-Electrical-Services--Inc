document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".header .nav");
  const navMenu = document.getElementById("nav-menu");

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    if (nav) {
      nav.classList.toggle("open");

      // fallback (in case another CSS rule still interferes)
      if (nav.classList.contains("open")) {
        nav.style.display = "block";
      } else {
        nav.style.display = "";
      }
    }

    if (navMenu) {
      navMenu.classList.toggle("active");
    }
  });
});
