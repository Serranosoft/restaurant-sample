function renderStaff(content) {

    let wrapperStaff = document.createElement("div");
    wrapperStaff.classList.add("wrapper-staff");
    content.appendChild(wrapperStaff);

    let staffTitle = document.createElement("p");
    staffTitle.classList.add("staff-title");
    staffTitle.innerHTML = "Any question?";

    wrapperStaff.appendChild(staffTitle);

    let staffDescr = document.createElement("p");
    staffDescr.classList.add("staff-descr");
    staffDescr.innerHTML = "Fill this form and we're going to answer you as soon we can!";

    wrapperStaff.appendChild(staffDescr);

    let staffForm = document.createElement("form");
    staffForm.classList.add("staff-form");

    wrapperStaff.appendChild(staffForm);

    let formContact = document.createElement("h3");
    formContact.innerHTML = "Contact Us!";

    staffForm.appendChild(formContact);

    let nameFieldSet = document.createElement("fieldset");
    staffForm.appendChild(nameFieldSet);

    let nameInput = document.createElement("input");
    nameInput.placeholder = "Your name";
    nameInput.autofocus = "true";
    nameInput.required = "true";
    nameFieldSet.appendChild(nameInput);

    let emailFieldSet = document.createElement("fieldset");
    staffForm.appendChild(emailFieldSet);

    let emailInput = document.createElement("input");
    emailInput.placeholder = "Your name";
    emailInput.autofocus = true;
    emailInput.required = true;
    emailFieldSet.appendChild(emailInput);

    let textArea = document.createElement("textarea");
    textArea.placeholder = "Type your message here...";
    staffForm.appendChild(textArea);

    let submitFieldSet = document.createElement("fieldset");
    staffForm.appendChild(submitFieldSet);

    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.classList.add("form-submit");
    submitButton.innerHTML = "Submit";

    submitFieldSet.appendChild(submitButton);

}

export default renderStaff;