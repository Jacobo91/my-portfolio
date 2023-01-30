const mediaLogos = document.querySelectorAll('[data-media]');
const form = document.querySelector('[data-form]');
const nameInput = document.querySelector("[data-name]");
const emailInput = document.querySelector("[data-email]");
const message = document.querySelector("[data-message]");


const log = arg => {
    console.log(arg);
}

const bounceLogo = () => {
    event.target.classList.toggle('animate__pulse')
}


const handleForm = () => {
    event.preventDefault();
    // Submit the form using an XHR request, or any other method

    // Reset the form after successful submission
    event.target.reset(); 
}

mediaLogos.forEach(logo => logo.addEventListener('mouseover', bounceLogo));

form.addEventListener('submit', handleForm);



