function renderHome(content) {

    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    content.appendChild(wrapper);

    let contentTitle = document.createElement("p");
    contentTitle.classList.add("content-title");
    contentTitle.innerHTML = "Serranosoft Restaurant";
    wrapper.appendChild(contentTitle);

    let homeInfo = document.createElement("div");
    homeInfo.classList.add("home-info");
    wrapper.appendChild(homeInfo);

    let scheduleDays = document.createElement("p");
    scheduleDays.innerHTML = "Open monday to sunday";
    let scheduleHours = document.createElement("p");
    scheduleHours.innerHTML = "7:00 PM - 1:30 AM";

    homeInfo.appendChild(scheduleDays);
    homeInfo.appendChild(scheduleHours);

}

export default renderHome;