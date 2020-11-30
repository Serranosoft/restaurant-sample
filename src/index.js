import renderHome from "./modules/renderHome";
import { renderHeader, renderFooter, renderNav } from "./modules/renderSchema";
import renderMenu from "./modules/renderMenu";

const content =  document.getElementById("content");


const init = (() => {
    content.classList.add("content");
    renderHeader();
    renderNav();
    renderFooter();
    renderHome(content);

    document.querySelector(".home-link").addEventListener("click", () => {
        render("home");
    })
    document.querySelector(".menu-link").addEventListener("click", () => {
        render("menu");
    })
    document.querySelector(".contact-link").addEventListener("click", () => {
        render("contact");
    })


})();

const render = (page) => {

    clearScreen();
    switch(page) {
        case "home":
            renderHome(content);
            break;
        case "menu":
            renderMenu(content);
            break;
        case "contact":
            console.log("contact");
            break;
    }
};

function clearScreen() {

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}






