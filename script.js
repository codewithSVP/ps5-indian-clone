// Function for the index page

function noStockAlert() {
    alert("We are out of stock currently. Please try again later!");
}


// Account page

const container = document.querySelector('.formContainer');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    container.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    container.classList.remove('active');
})