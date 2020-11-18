console.log('yes Im connected');

const modal = document.querySelector(".modal");
const carousel = document.querySelector('.carousel');
const carouselImage= document.querySelector(".carousel img");
const carouselNext = document.querySelector('.carousel-next');
const carouselPrevious = document.querySelector('.carousel-previous');
const carouselSelect = document.querySelector('.carousel-select');
const getStarted = document.querySelector('.get-started');

const backgroundImages = [
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im7INtlYerIc/v0/-1x-1.jpg",
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iE0BNpkKOeE0/v0/-1x-1.png",
    "https://i.redd.it/3st0k7nrdad21.jpg"
];

const togglemodal = () => {
    modal.classList.toggle("open");
}

const updateCarouselImage = () => {
    carouselImage.setAttribute('src', backgroundImage[slideIndex]);
}
updateCarouselImage();

const changeSlideNext = () => {
    if(slideIndex < backgroundImage.length -1) {
    slideIndex++;
} else {
    slideIndex = 0;
}
    updateCarouselImage();
}

const changeSlidePrevious = () => {
    if(slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = backgroundImage.length - 1;
    }
    updateCarouselImage();
}

const updateBackground = () => {
const body = document.querySelector('body');
body.style.backgroundImage = `url(${backgroundImage[slideIndex]})`;
carousel.remove();
}

const openCarousel = () => {
    togglemodal();
    carousel.classList.add('open');
}

/* =============================
EVENT LISTENERS
============================= */

beginButton.addEventListener("click", togglemodal);
carouselNext.addEventListener('click', changeSlideNext);
carouselPrevious.addEventListener('click', changeSlidePrevious);
carouselSelect.addEventListener('click', updateBackground);
getStarted.addEventListener('click', openCarousel);