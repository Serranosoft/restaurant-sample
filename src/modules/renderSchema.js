const body = document.querySelector("body");

function renderHeader() {

    let header = document.createElement("header");
    header.classList.add("header");

    body.appendChild(header);

    let headerDirection = document.createElement("p");
    headerDirection.innerHTML = "Juan Sebastian Elcano, Madrid, 11011";

    header.appendChild(headerDirection);
}

function renderNav() {

    let menu = document.querySelector(".menu");
    menu.classList.add("menu");

    let homeLink = document.createElement("p");
    homeLink.classList.add("nav-link");
    homeLink.classList.add("home-link");
    homeLink.innerHTML = "Home";
    menu.appendChild(homeLink);

    let menuLink = document.createElement("p");
    menuLink.classList.add("nav-link");
    menuLink.classList.add("menu-link");
    menuLink.innerHTML = "Menu";
    menu.appendChild(menuLink);

    let contactLink = document.createElement("p");
    contactLink.classList.add("nav-link");
    contactLink.classList.add("contact-link")
    contactLink.innerHTML = "Info";
    menu.appendChild(contactLink);

}

function renderFooter() {

    let footer = document.createElement("footer");
    footer.classList.add("footer");

    body.appendChild(footer);

    let footerDirection = document.createElement("p");
    footerDirection.innerHTML = "Juan Sebastian Elcano, Madrid, 11011";
    footer.appendChild(footerDirection);

}

export {renderHeader, renderNav, renderFooter}