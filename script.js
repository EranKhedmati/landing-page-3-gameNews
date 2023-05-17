// Toggle menu ----------------------------------------------------

// Get elements
const menu = document.getElementById("menu"),
  menuCheck = document.getElementById("menu-check");
let menuIsOpen = false;

menuCheck.addEventListener("click", (e) => {
    if(menuIsOpen) {
        menu.style.right = "100%";
        menuIsOpen = false;
    } else {
        menu.style.right = "0";
        menuIsOpen = true;
    }
});
