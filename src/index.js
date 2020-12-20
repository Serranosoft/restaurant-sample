import renderHome from "./modules/renderHome";
import { renderHeader, renderFooter, renderNav } from "./modules/renderSchema";
import renderMenu from "./modules/renderMenu";
import renderStaff from "./modules/renderStaff";

const content =  document.getElementById("content");


const init = (() => {
    content.classList.add("content");
    renderHeader();
    renderNav();
    renderFooter();
    renderHome(content);

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
            renderStaff(content);
            break;
    }
};

function clearScreen() {

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

export default render();






