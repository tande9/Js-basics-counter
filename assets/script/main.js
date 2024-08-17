// creazione elementi
const mainContainer = document.querySelector('.counter-container');

//valore del counter
let valueDisplayed = document.createElement('p');
valueDisplayed.textContent = parseInt(localStorage.getItem('value')) || 0;
mainContainer.appendChild(valueDisplayed);
valueDisplayed.classList.add('counter-value');

//variabile per memorizzare il valore del DOM
let currentValue = parseInt(valueDisplayed.textContent);

//creazione bottoni
const buttonPlus = document.createElement('button');
buttonPlus.textContent = '+';
mainContainer.appendChild(buttonPlus);
buttonPlus.classList.add('btn','btn-plus');

const buttonMinus =document.createElement('button');
buttonMinus.textContent = '-';
mainContainer.appendChild(buttonMinus);
buttonMinus.classList.add('btn','btn-minus');

//contenitore della challenge
const challengeContainer = document.querySelector('.counter-header');

let dynamicChallenge = document.createElement('h3');
dynamicChallenge.textContent = `What number can you reach? First goal: 100`
challengeContainer.appendChild(dynamicChallenge);

//variabile per memorizzare il valore del DOM
let challengeDisplayed = dynamicChallenge.textContent;

// audio buttons
const plusSound = new Audio();
plusSound.src = "../assets/audio/plusbtn.mp3";

const minusSound = new Audio();
minusSound.src = "../assets/audio/minusbtn.mp3";

const resetSound = new Audio();
resetSound.src = "../assets/audio/reset-btn.mp3";

// audio settings
function setAudio(audio){
  audio.currentTime = 0;
  audio.play();
}

//update valore
function updateValue(newValue){
currentValue = newValue;
valueDisplayed.textContent = currentValue;

//salvataggio valore
localStorage.setItem('value',valueDisplayed.textContent);
}

// listener sui btns

//PLUS
buttonPlus.addEventListener('click',()=>{
  updateValue(currentValue + 1)
  updateChallenge();
  setAudio(plusSound);
})

//MINUS
buttonMinus.addEventListener('click',()=>{
  updateValue(currentValue - 1);
  updateChallenge();
  setAudio(minusSound);
})

//reset value
valueDisplayed.addEventListener('click', ()=>{
  updateValue(0);
  setAudio(resetSound);
})

//altre funzionalità

//update del text content dell'elemento challenge

function updateValueOfTextChallenge (text){
  challengeDisplayed = text;
  dynamicChallenge.textContent = challengeDisplayed;
}
function updateChallenge(){

  const messages = {
    goal100: "Nice, good job! Now we'll try to reach 500",
    goal500: "Congrats!! Nice work",
    almostThere: "Almost there! Keep it up",
    notCorrect: "Oh no! That's not the correct way to reach the goal",
    default: "What number can you reach? First goal: 100"
  };

  dynamicChallenge.classList.remove('challenge-wrong', 'challenge-right');

  if (currentValue >= 500) {
    updateValueOfTextChallenge(messages.goal500);
    dynamicChallenge.classList.add('challenge-right');

  } else if (currentValue >= 400 && currentValue <= 500) {
    updateValueOfTextChallenge(messages.almostThere);

  } else if (currentValue >= 100 && currentValue <= 115 ) {
    updateValueOfTextChallenge(messages.goal100);
    dynamicChallenge.classList.add('challenge-right');

  } else if (currentValue >= 70 && currentValue <= 100) {
    updateValueOfTextChallenge(messages.almostThere);

  } else if (currentValue <= -10) {
    updateValueOfTextChallenge(messages.notCorrect);
    dynamicChallenge.classList.add('challenge-wrong');

  } else {
    updateValueOfTextChallenge(messages.default);
  }
}

  //no zoom su mobile
  document.addEventListener('dblclick', function(e) {
    e.preventDefault();
  }, { passive: false });