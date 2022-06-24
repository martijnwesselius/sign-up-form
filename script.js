const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#passwordConfirm");

emailInput.oninput = (e) => validateEmail(e.target.value);
phoneInput.oninput = (e) => validatePhone(e.target.value);
passwordInput.oninput = (e) => validatePassword(e.target.value);
passwordConfirmation.oninput = (e) => confirmPassword(e.target.value);


// https://www.html5pattern.com/


function validateEmail(email) {

}

function validatePhone(phoneNumber) {
    
}

function validatePassword(password) {

}

function confirmPassword(passwordConfirm) {
    console.log(passwordConfirm === passwordInput.value);
}