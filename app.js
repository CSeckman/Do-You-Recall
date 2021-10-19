/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
const beginnerArray = [1,1,1,1,1]
const intermediateArray = [1,1,1,1,1,1,1,1,1,1]
const expertArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
let startArray
let randomArrayLength
let playerGuess
let randomArray
let screenToUpdate
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
const submitBtn = document.querySelectorAll('.submitBtn')
const inputVal = document.getElementById('example')
/*----------------------------- Event Listeners -----------------------------*/
begButton.addEventListener('click', startGame)
interButton.addEventListener('click', startGame)
expButton.addEventListener('click', startGame)
submitBtn.forEach(btn => {
  btn.addEventListener('click', handleInput)
})
// interInput.addEventListener('click', handleInput)
// expInput.addEventListener('click', handleInput)
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
    document.getElementById('beginnerScreen').className = "screenOfNums"
    startArray = beginnerArray
    console.log(startArray)
  }
  if (evt.target.id === 'intermediateBtn') {
    document.getElementById('intermediateScreen').className = "screenOfNums"
    startArray = intermediateArray
    console.log(startArray)
  }
  if (evt.target.id === 'expertBtn') {
    document.getElementById('expertScreen').className = "screenOfNums"
    startArray = expertArray
    console.log(startArray)
  }
  getRandomArray()
}

function getRandomArray() {
  randomArray = startArray.map(function (num) {
    return (Math.floor(Math.random() * 10))
  })
  console.log(randomArray)
  renderNums(randomArray)
}

function renderNums (randomArray) {
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
      screenToUpdate.innerText = ''
      begInput.removeAttribute('hidden')
      document.getElementById('beginnerScreen').className = "screen"
    }, 5000)
  }
  if (randomArrayLength === 10) {
    interButton.setAttribute('hidden', true)
    setTimeout(() => {
      screenToUpdate.innerText = ''
      interInput.removeAttribute('hidden')
      document.getElementById('intermediateScreen').className = "screen"
    }, 10000)
  }
  if (randomArrayLength === 15) {
    expButton.setAttribute('hidden', true)
    setTimeout(() => {
      screenToUpdate.innerText = ''
      expInput.removeAttribute('hidden')
      document.getElementById('expertScreen').className= "screen"
    }, 15000)
  }
}

function handleInput () {
  console.log('click')
  playerGuess = inputVal.value
  console.log(playerGuess)
  isWinner()
}

function isWinner() {
  let randomString = randomArray.join('')
  randomString === playerGuess ? alert ("YOU WIN!") : alert ("TRY AGAIN!")
}

function renderWinner() {

}