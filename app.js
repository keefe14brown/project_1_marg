/////******* */Create querySelectors for all the buttons ********* /////
const startGame = document.querySelector('.start-game');
const modal = document.querySelector('.modal');
const carousel = document.querySelector('.carousel');
const carouselImage = document.querySelector(".carousel img");
const carouselNext = document.querySelector('.carousel-next');
const carouselPrevious = document.querySelector('.carousel-previous');
const carouselSelect = document.querySelector('.carousel-select');
const workButton = document.querySelector('.workbutton');

//////BUILD MODAL AND CAROUSEL///////  
const backgroundImage = [
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im7INtlYerIc/v0/-1x-1.jpg",
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iE0BNpkKOeE0/v0/-1x-1.png",
    "https://i.redd.it/3st0k7nrdad21.jpg"
];

let slideIndex = 0;

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

// ======================================================= \\
//////***/ CREATE CLASS CONSTRUCTORS FOR THE CHARACTERS***\\\\
//////***/ AND THE CHRACTER CAREERS\***\\\\\\\\\\\\\\\\\\\\\\\\

class Career {
    constructor(name, description, income, id){
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}
const careerDescriptions = [
    {
        name: 'Unsigned Rapper',
        description: 'Making music and performing local gigs for money.'
    },
    {
        name: 'Software-Engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'Doctor',
        description: 'Helping people with their medical needs.'
    },
    {
        name: 'Youtube Star',
        description: 'Talk about stuff on social media and people say wow and i get paid'
    }
]
const careerIncomes = [
 7000,
 7500,
 8000,
 8500,
 9000,
 9500,
 10000
];
const careers = [];



/* =============================
        EVENT LISTENERS
============================= */

startGame.addEventListener('click', togglemodal);
workButton.addEventListener("click", openCarousel);
carouselNext.addEventListener('click', changeSlideNext);
carouselPrevious.addEventListener('click', changeSlidePrevious);
carouselSelect.addEventListener('click', updateBackground);