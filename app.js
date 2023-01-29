const mediaLogos = document.querySelectorAll('[data-media]');
const emailInput = document.querySelector("[data-email]");

const log = arg => {
    console.log(arg);
}

const bounceLogo = () => {
    event.target.classList.toggle('animate__pulse')
}

const checkEmail = () => {
    console.log(event.target.value);
}

log(mediaLogos)

mediaLogos.forEach(logo => logo.addEventListener('mouseover', bounceLogo));



// Listen for the input's input event
emailInput.addEventListener("input", function() {
  if (!emailInput.validity.valid) {
    emailInput.classList.add("invalid");
  } else {
    emailInput.classList.remove("invalid");
  }
});


