function renderMenu(content) {
    console.log("menu");

    let wrapperMenu = document.createElement("div");
    wrapperMenu.classList.add("wrapper-menu");
    content.appendChild(wrapperMenu);

    let menuTitle = document.createElement("p");
    menuTitle.classList.add("menu-title");
    menuTitle.innerHTML = "Menu";
    wrapperMenu.appendChild(menuTitle)

    for (let i = 1; i <= 5; i++) {
        let dish = document.createElement("div");
        dish.classList.add("dish");
        wrapperMenu.appendChild(dish);

        let dishImage = document.createElement("img");
        dishImage.src = "styles/images/dish"+i+".png";
        dish.appendChild(dishImage);

        let dishDescr = document.createElement("p");
        dishDescr.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, provident!";
        dish.appendChild(dishDescr);
    }

}

export default renderMenu;