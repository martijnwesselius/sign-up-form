const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");
const passwordError = document.querySelector("#passwordError");
const passwordConfirmError = document.querySelector("#passwordConfirmError");

firstNameInput.oninput = () => validateFirstName();
lastNameInput.oninput = () => validateLastName();
emailInput.oninput = () => validateEmail();
phoneInput.oninput = () => validatePhone();
passwordInput.oninput = () => validatePassword();
// passwordInput.oninput = () => confirmPassword();
passwordConfirm.oninput = () => confirmPassword();

// https://www.html5pattern.com/

function validateFirstName() {
    if (firstNameInput.validity.valueMissing) {
        firstNameError.textContent = 'Please type in your first name';
    } else {
        firstNameError.textContent = '';
    }
}

function validateLastName() {
    if (lastNameInput.validity.valueMissing) {
        lastNameError.textContent = 'Please type in your last name';
    } else {
        lastNameError.textContent = '';
    }
}

function validateEmail() {
    // Do not use regex pattern to validate email!!!
    if ((emailInput.validity.typeMismatch) || emailInput.value === "") {
        emailError.textContent = "Please enter a valid email: john@email.com";
    } else {
        emailError.textContent = "";
    }   
}

function validatePhone() {
    if ((phoneInput.validity.patternMismatch) || phoneInput.value === "") {
        phoneError.textContent = "Please enter a valid phone number: +31(06)12345678";
    } else {
        phoneError.textContent = "";
    }
}

function validatePassword() {

    console.log("test1");

    const regexCapital = new RegExp('[A-Z]', 'g');
    const regexDigit = new RegExp('[0-9]', 'g');
    let errorMessage = "";

    if (passwordInput.validity.patternMismatch) {

        console.log("test2");

        if (regexCapital.test(passwordInput.value)) {
            errorMessage += "";
        } else {
            errorMessage += "Missing at least 1 capital letter\n"
        }

        if (regexDigit.test(passwordInput.value)) {
            errorMessage += "";
        } else {
            errorMessage += "Missing at least 1 number\n";
        }

        if (passwordInput.value.length < 9) {
            errorMessage += "Must be at least 8 characters long\n"
        } else {
            errorMessage += "";
        }

        console.log(errorMessage)
        passwordError.textContent = errorMessage;

    } else {
        console.log("test3");

        passwordError.textContent = "";
    }  
}

function confirmPassword() {
    if (passwordInput.value !== passwordConfirm.value) {
        passwordConfirmError.textContent = "Passwords do not match";
    } else {
        passwordConfirmError.textContent = "";
    }
}