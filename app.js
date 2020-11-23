/////******* */Create querySelectors for all the buttons ********* /////
const startGame = document.querySelector('.start-game');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const carousel = document.querySelector('.carousel');
const carouselImage = document.querySelector(".carousel img");
const carouselNext = document.querySelector('.carousel-next');
const carouselPrevious = document.querySelector('.carousel-previous');
const carouselSelect = document.querySelector('.carousel-select');
const workButton = document.querySelector('.workbutton');
const buyButton = document.querySelector('.buy');
const sabotageButton = document.querySelector('.sabotage');
const continueButton1 = document.querySelector('.continue1');
const continueButton2 = document.querySelector('.continue2');
const saleButton = document.querySelector('.sale');
//////BUILD MODAL AND CAROUSEL///////  

const backgroundImage = [
    "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ddc674a1c76d036eaa445b672c313ca63abf03e686b8e5cd62fe5f58e1c72f25._RI_V_TTW_.jpg",
    "https://i.ytimg.com/vi/DKtjBqJ4NxA/maxresdefault.jpg",
    "https://blackgirlnerds.com/wp-content/uploads/2018/12/0_Fazot7V2AEFV6kNJ.jpg",
    "https://i.redd.it/3st0k7nrdad21.jpg",
    "https://cdn.vox-cdn.com/thumbor/C7ddh7Idh3Aa0yA91xQUf5GwGWE=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/60793985/171109_07_08_31_5DR21719.0.jpg",
    "https://s7d2.scene7.com/is/image/TWCNews/ap_19115548990694editedjpg",
    "https://i.insider.com/5e0bbdec855cc2746e2742c2?width=1200&format=jpeg",
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im7INtlYerIc/v0/-1x-1.jpg",
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iE0BNpkKOeE0/v0/-1x-1.png",
    "https://barrybowe.com/wp-content/uploads/2020/02/20-Trading-Places-Trailer-1200x540.jpg",
    "https://www.ruthlessreviews.com/wp-content/uploads/2018/12/trading-places-3.jpg"
];

let slideIndex = 0;

const togglemodal1 = () => {
    modal1.classList.toggle("open");
}

const togglemodal2 = () => {
    modal2.classList.toggle("open");
    modal1.remove();
}

const togglemodal3 = () => {
    modal3.classList.toggle("open");
    modal2.remove();
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
playerOne.render();
playerTwo.render();
}

const openCarousel = () => {
    togglemodal1();
    togglemodal2();
    togglemodal3();
    carousel.classList.add('open');
}

// ======================================================= \\
//////***/ CREATE CLASS CONSTRUCTORS FOR THE CHARACTERS***\\\\
//////***/ AND THE CHRACTER CAREERS/ATTRIBUTES. \***\\\\\\\\\\\\\\\\\\\\\\\\

let playerOne = {
        name: 'Billy Ray Valentine',
        career: [],
        property: [],
        wallet: 0,
}; 
let playerTwo = {
    name: 'Louis Winthorpe',
    career: [],
    property: [],
    wallet: 0,
};

const house = {
    name: 'The Waldorf Mansion',
    price: 1000000,
    location: 'Scarsdale, NY',
};

// class property {
//     constructor(type, price, value){
//         this.type = type;
//         this.price = 0;
//         this.value = value;
//     }
// }

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
 18750,
 19500,
 19750,
 18500,
 19600,
 20000,
 17750,
 18350,
 19000,
 20100,
 21000,
 18000,
 17900,
 19999,
 19200,
 20202,
 19460,
 21500,
 21650
];
const careers = [];

// const playerOne = new player('Joe Shmoe', 0, "", 0)
// const playerTwo = new player('player 2', 0, 0, 0)
console.log(playerOne);


// const Car = new property('New Convertible', 40000, 25000)
// const house = new property('Buckhead Mansion', 1000000, 1000000)
// console.log(house);

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

   playerOne.el = document.getElementById('JoeSchmoe');

playerOne.render = () => {
    playerOne.el.innerHTML = `
    <h1>${playerOne.name}</h1>
    <h3>Current Career: <span style="color:red;">${playerOne.career.name}</span> </h3>
    <h3>Current income: <span style="color:red;">$${playerOne.career.income}</span></h3>
    <h3> Currently ${playerOne.name} has <span style="color:red;">$${playerOne.wallet}</span> banked</h3>
    <div> <h2>Properties:</h2> 
    <ul>
    <li><span style="color:green;">${playerOne.property}</span>
            </li></ul>
    </div>`;
}

const goToWorkButton = document.querySelector('.gotowork');
   goToWorkButton.addEventListener('click', () => {
    playerOne.wallet += playerOne.career.income;
    playerTwo.wallet += playerTwo.career.income;
    playerOne.render();
    playerTwo.render();
    sabotagePlayerOne();
    gameOver();
    playerTwoSale();
})

buyButton.addEventListener('click', ()=>{
    if(playerOne.wallet >= house.price){
        playerOne.property.push(house.name);
        playerOne.wallet = playerOne.wallet - house.price;
        playerOne.render();
        alert("CONGRATULATION!!!! You won the house!")
    
    } else {
        alert("You know you don't have enough bread! cut it out!");
    }
})

const sabotageAmounts = [10000, 35000, 5000, 50000, 17000, 8000, 21000, 1500, 800, 18000, 11000, 33333, 4267];

const sabotageHit = sabotageAmounts[randomization(sabotageAmounts.length)];

sabotageButton.addEventListener('click', ()=>{
    if(playerTwo.wallet === playerTwo.wallet){
        playerTwo.wallet = playerTwo.wallet - sabotageHit;
        playerTwo.render();
    
        alert('You have SABOTAGED your opponent!!!');
    }
})    
const sabotagePlayerOne = () => {
if(Math.random() >= .97){
    playerOne.wallet = playerOne.wallet - sabotageHit;
    playerOne.render();
    alert('Damn It! your business was SABOTAGED by your opponent!!!');
    }
}
saleButton.addEventListener('click', ()=>{
    if(playerOne.wallet === playerOne.wallet){
        playerOne.wallet = playerOne.wallet + sabotageHit;
        playerOne.render();
        alert('You Had a successful merch sale this weekend! Great Work!!!');
    }
})
const playerTwoSale = () => {
    if(Math.random() >= .95){
        playerTwo.wallet = playerTwo.wallet + sabotageHit;
        playerTwo.render();
        alert('Your opponent had a big sale this weekend! He is making a move!!!');
        }
    }
const gameOver = () => {
    if ((playerOne.wallet >= 1000000) && (1000000 > playerTwo.wallet)){
        alert('CONGRATULATIONS!!!! YOU WON!!!')  
    } else if((playerTwo.wallet >= 1000000) && (1000000 > playerOne.wallet)){
        alert('OH NO!!!! YOU LOST THE GAME!!!');
        myButton();
    }
}

//=================================================//
///////CREATE THE INTERACTIONS CPU//////////////////
//================================================//
playerTwo.el = document.getElementById('SketchyTodd')

playerTwo.render = () => {
    playerTwo.el.innerHTML = `
    <h1>${playerTwo.name}</h1>
    <h3> Current Career: <span style="color:red;">${playerTwo.career.name}</span> </h3>
    <h3>Current income: <span style="color:red;">$${playerTwo.career.income}</span></h3>
    <h3> Currently ${playerTwo.name} has <span style="color:red;">$${playerTwo.wallet}</span> banked</h3>
    <div> <h2>Properties:</h2> 
    <ul>
    <li><span style="color:green;">${playerTwo.property}</span>
            </li></ul>
    </div>`;
}

/* =============================
        EVENT LISTENERS
============================= */

startGame.addEventListener('click', togglemodal1);
continueButton1.addEventListener('click', togglemodal2);
continueButton2.addEventListener('click', togglemodal3);
workButton.addEventListener("click", openCarousel);
carouselNext.addEventListener('click', changeSlideNext);
carouselPrevious.addEventListener('click', changeSlidePrevious);
carouselSelect.addEventListener('click', updateBackground);