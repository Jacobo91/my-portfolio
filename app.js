const mediaLogos = document.querySelectorAll('[data-media]');

const log = arg => {
    console.log(arg);
}

const bounceLogo = () => {
    event.target.classList.toggle('animate__pulse')
}

log(mediaLogos)

mediaLogos.forEach(logo => logo.addEventListener('mouseover', bounceLogo));