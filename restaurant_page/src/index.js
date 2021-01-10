import insertHomepage from "./pages/home.js";
import insertMenu from "./pages/menu.js";

(function () {
  const content = document.querySelector("#content");
  const homeButton = document.querySelector("#home");
  const menuButton = document.querySelector("#menu");
  const aboutMenu = document.querySelector("#about");

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
  });

  //  Start off page injection
  content.append(...insertHomepage());
})();
