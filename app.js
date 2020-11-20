/////******* */Create querySelectors for all the buttons ********* /////
const startGame = document.querySelector('.start-game');
const modal = document.querySelector('.modal');
const carousel = document.querySelector('.carousel');
const carouselImage = document.querySelector(".carousel img");
const carouselNext = document.querySelector('.carousel-next');
const carouselPrevious = document.querySelector('.carousel-previous');
const carouselSelect = document.querySelector('.carousel-select');
const workButton = document.querySelector('.workbutton');
const propertyButton = document.querySelector('.buy');

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
//////***/ AND THE CHRACTER CAREERS/ATTRIBUTES. \***\\\\\\\\\\\\\\\\\\\\\\\\

class player {
    constructor(name, career, property, wallet){
        this.name = name;
        this.career = career;
        this.property = "";
        this.wallet = 0;
    }
} 

class property {
    constructor(type, price, value){
        this.type = type;
        this.price = price;
        this.value = value;
    }
}

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
        name: 'Independent Rapper',
        description: 'Making music and performing local gigs for money.'
    },
    {
        name: 'Senior Software-Engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'Doctor',
        description: 'Helping people with their medical needs.'
    },
    {
        name: 'Tik-Tok Star',
        description: 'Make videos doing corny dance routines, and voice-overs'
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

const playerOne = new player('Joe Shmoe', 0, "", 0)
const playerTwo = new player('player 2', 0, 0, 0)

player

const Car = new property('New Convertible', 40000, 25000)
const house = new property('Buckhead Mansion', 1000000, 1000000)

////=======CHARACTER STAT FUNCTIONS===========\\\\
//////////////////////////////////////////////////
const randomization = (limit) => {
    return Math.floor(Math.random() * limit)
   }

   for (let i = 7 ; i > 0; i--){
    const job = careerDescriptions[randomization(careerDescriptions.length)]
    const income = careerIncomes[randomization(careerIncomes.length)];
    careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
   }

   playerOne.career = careers[randomization(careers.length)]
   playerTwo.career = careers[randomization(careers.length)]

   playerOne.el = document.getElementById('Joe Schmoe');

playerOne.render = () => {
    playerOne.el.innerHTML = `
    <h1>${playerOne.name}</h1>
    <h3> Current skill: ${playerOne.career.name} </h3>
    <h3>${playerOne.name} current income: ${playerOne.career.income}</h3>
    <h3> Currently ${playerOne.name} has ${playerOne.wallet} in the bank</h3>
    <div> <h2>Properties:</h2> 
    <ul>${playerOne.property}
    <li>${playerOne.name} currently owns a: ${property.type} <br>
    Current worth: ${property.value} 
            </li></ul>
    </div>`;
}

playerOne.render();

const goToWorkButton = document.querySelector('.gotowork');
   goToWorkButton.addEventListener('click', () => {
    playerOne.wallet += playerOne.career.income;
    playerOne.render();
})

propertyButton.addEventListener('click', ()=>{
    if(barbie.wallet >= property.price){
        playerOne.property.push(playerOne.property);
        playerOne.wallet = playerOne.wallet - property.price;
        barbie.render();
        
    } else {
        alert("You know you don't have enough bread! cut it out!");
    }
})

/* =============================
        EVENT LISTENERS
============================= */

startGame.addEventListener('click', togglemodal);
workButton.addEventListener("click", openCarousel);
carouselNext.addEventListener('click', changeSlideNext);
carouselPrevious.addEventListener('click', changeSlidePrevious);
carouselSelect.addEventListener('click', updateBackground);