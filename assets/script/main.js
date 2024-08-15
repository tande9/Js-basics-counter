// creazione elementi
const mainContainer = document.querySelector('.counter-container');

const buttonMinus =document.createElement('button');
buttonMinus.textContent = '-';
mainContainer.appendChild(buttonMinus);
buttonMinus.classList.add('btn','btn-minus');

let valueDisplayed = document.createElement('p');
valueDisplayed.textContent = localStorage.getItem('value') || 0;
mainContainer.appendChild(valueDisplayed);
valueDisplayed.classList.add('counter-value');

const buttonPlus = document.createElement('button');
buttonPlus.textContent = '+';
mainContainer.appendChild(buttonPlus);
buttonPlus.classList.add('btn','btn-plus');

const challengeContainer = document.querySelector('.counter-header');

let dynamicChallenge = document.createElement('h3');
dynamicChallenge.textContent = `What number can you reach? First goal: 100`
challengeContainer.appendChild(dynamicChallenge);

// audio buttons

const plusSound = new Audio();
plusSound.src = "../assets/audio/button-124476.mp3";

const minusSound = new Audio();
minusSound.src = "../assets/audio/menu-button-88360.mp3";

// funzione del counter

buttonPlus.addEventListener('click',()=>{
  let currentValue = parseInt(valueDisplayed.textContent);
  currentValue ++;
  valueDisplayed.textContent = currentValue;
  updateChallenge();
  plusSound.currentTime = 0;
  plusSound.play();

  //salvataggio valore
  localStorage.setItem('value',valueDisplayed.textContent);
})

buttonMinus.addEventListener('click',()=>{
  let currentValue = parseInt(valueDisplayed.textContent);
  currentValue --;
  valueDisplayed.textContent = currentValue;
  updateChallenge();
  minusSound.currentTime = 0;
  minusSound.play();
    //salvataggio valore
    localStorage.setItem('value',valueDisplayed.textContent);
})

//reset

valueDisplayed.addEventListener('click', ()=>{
  let currentValue = parseInt(valueDisplayed.textContent);
  currentValue = 0;
  valueDisplayed.textContent = currentValue;
})

//altre funzionalità


function updateChallenge(){

  const currentValue = parseInt(valueDisplayed.textContent);

  const MESSAGES = {
    goal100: "Nice, good job! Now we'll try to reach 500",
    goal500: "Congrats!! Nice work",
    almostThere: "Almost there! Keep it up",
    notCorrect: "Oh no! That's not the correct way to reach the goal",
    default: "What number can you reach? First goal: 100"
  };

  dynamicChallenge.classList.remove('challenge-wrong', 'challenge-right');

  if (currentValue >= 500) {
    dynamicChallenge.textContent = MESSAGES.goal500;
    dynamicChallenge.classList.add('challenge-right');
  } else if (currentValue >= 400) {
    dynamicChallenge.textContent = MESSAGES.almostThere;
  } else if (currentValue >= 100) {
    dynamicChallenge.textContent = MESSAGES.goal100;
    dynamicChallenge.classList.add('challenge-right');
  } else if (currentValue >= 70) {
    dynamicChallenge.textContent = MESSAGES.almostThere;
  } else if (currentValue <= -10) {
    dynamicChallenge.textContent = MESSAGES.notCorrect;
    dynamicChallenge.classList.add('challenge-wrong');
  } else {
    dynamicChallenge.textContent = MESSAGES.default;
  }

  }


