import insertHomepage from "./pages/home.js";

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
  });

  aboutMenu.addEventListener("click", () => {
    content.innerHTML = "";
  });

  //  Start off page
  content.append(...insertHomepage());
})();
