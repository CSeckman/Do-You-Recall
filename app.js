/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
const beginnerArray = [1,1,1,1,1]
const intermediateArray = [1,1,1,1,1,1,1,1,1,1]
const expertArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
let startArray
let randomArrayLength
let playerGuess
let playerArray
/*------------------------ Cached Element References ------------------------*/
const begButton = document.querySelector('#beginnerBtn')
const interButton = document.querySelector('#intermediateBtn')
const expButton = document.querySelector('#expertBtn')
const begScreen = document.querySelector('#beginnerScreen')
const interScreen = document.querySelector('#intermediateScreen')
const expScreen = document.querySelector('#expertScreen')
const begInput = document.querySelector('.begForm')
const interInput = document.querySelector('.interForm')
const expInput = document.querySelector('.expForm')
const inputVal = document.getElementById('example')
/*----------------------------- Event Listeners -----------------------------*/
begButton.addEventListener('click', startGame)
interButton.addEventListener('click', startGame)
expButton.addEventListener('click', startGame)
begInput.addEventListener('click', handleInput)
interInput.addEventListener('click', handleInput)
expInput.addEventListener('click', handleInput)

/*-------------------------------- Functions --------------------------------*/
// init()

// function init() {
//   begInput.setAttribute('hidden', true)
//   interInput.setAttribute('hidden', true)
//   expInput.setAttribute('hidden', true)
// }

function startGame(evt) {
  console.log('working click')
  if (evt.target.id === 'beginnerBtn') {
    startArray = beginnerArray
    console.log(startArray)
  }
  if (evt.target.id === 'intermediateBtn') {
    startArray = intermediateArray
    console.log(startArray)
  }
  if (evt.target.id === 'expertBtn') {
    startArray = expertArray
    console.log(startArray)
  }
  getRandomArray()
}

function getRandomArray() {
  let randomArray = startArray.map(function (num) {
    return (Math.floor(Math.random() * 10))
  })
  console.log(randomArray)
  renderNums(randomArray)
}

function renderNums (randomArray) {
  let screenToUpdate
  randomArrayLength = randomArray.length
  if (randomArrayLength === 5) {
    screenToUpdate = begScreen
  } else if (randomArrayLength === 10) {
    screenToUpdate = interScreen
  } else if (randomArrayLength) {
    screenToUpdate = expScreen
  }
  randomArray.forEach((num, idx) => {
    setTimeout(()=> {
      screenToUpdate.innerText = num
      console.log(num)
    }, (idx * 1000))
  })
  renderInput()
}

function renderInput() {
  if (randomArrayLength === 5) {
    begButton.setAttribute('hidden', true)
    setTimeout(() => {
      begInput.removeAttribute('hidden')
      begScreen.innerHTML = "<img src= '/images/numbers pic.jpeg\' width=\'100%\'>";
    }, 5000)
  }
  if (randomArrayLength === 10) {
    interButton.setAttribute('hidden', true)
    setTimeout(() => {
      interInput.removeAttribute('hidden')
      interScreen.innerHTML = "<img src= '/images/numbers pic.jpeg\' width=\'100%\'>";
    }, 10000)
  }
  if (randomArrayLength === 15) {
    expButton.setAttribute('hidden', true)
    setTimeout(() => {
      expInput.removeAttribute('hidden')
      expScreen.innerHTML = "<img src= '/images/numbers pic.jpeg\' width=\'100%\'>";
    }, 15000)
  }
  handleInput()
}

function handleInput () {
  playerGuess = inputVal.value
  console.log(playerGuess)
  playerArray = playerGuess.split("").map((playerGuess) => {
    return Number(playerGuess)
  })
  console.log(playerArray)
  isWinner()
}