const menuMobile = document.getElementById("menu-mobile")

function toggleMenu() {
    if (menuMobile.className === "menu-mobile-active") {
        menuMobile.className = "menu-mobile"
    } else {
        menuMobile.className = "menu-mobile-active"
    }
}
