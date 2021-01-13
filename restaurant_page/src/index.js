import underscore from "underscore";
import insertHomepage from "./pages/home.js";
import insertMenu from "./pages/menu.js";
import insertAbout from "./pages/about.js";

(function () {
  const content = document.querySelector("#content");
  const homeButton = document.querySelector("#home");
  const menuButton = document.querySelector("#menu");
  const aboutMenu = document.querySelector("#about");
  const navigationBar = document.querySelector(".navbar");

  function changeNavColor() {
    console.log("Scrolled");
    if (window.scrollY > 200) navigationBar.classList.add("scrolled");
    else navigationBar.classList.remove("scrolled");
  }

  homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(...insertHomepage());
  });

  menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(...insertMenu());
  });

  aboutMenu.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(...insertAbout());
  });

  // Set Navigation bar color change
  const navTransition = underscore.throttle(changeNavColor, 100);
  window.addEventListener("scroll", navTransition);

  //  Start off page injection
  content.append(...insertHomepage());
})();
