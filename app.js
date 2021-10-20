/*-------------------------------- Constants --------------------------------*/


let inputVal 

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
const begInput = document.querySelector('#begInput')
const interInput = document.querySelector('#interInput')
const expInput = document.querySelector('#expInput')
const submitBtn = document.querySelectorAll('.submitBtn')
/*----------------------------- Event Listeners -----------------------------*/
begButton.addEventListener('click', startGame)
interButton.addEventListener('click', startGame)
expButton.addEventListener('click', startGame)
submitBtn.forEach(btn => {
  btn.addEventListener('click', checkForWinner)
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
  renderForms()
}

function renderForms() {
  if (randomArrayLength === 5) {
    begButton.setAttribute('hidden', true)
    inputVal = begInput
    setTimeout(() => {
      screenToUpdate.innerText = ''
      screenToUpdate.className = 'screen'
      document.getElementById('begForm').removeAttribute('hidden')
    }, 5000)
  }
  if (randomArrayLength === 10) {
    interButton.setAttribute('hidden', true)
    inputVal = interInput
    setTimeout(() => {
      screenToUpdate.innerText = ''
      screenToUpdate.className = 'screen'
      document.getElementById('interForm').removeAttribute('hidden')
    }, 10000)
  }
  if (randomArrayLength === 15) {
    expButton.setAttribute('hidden', true)
    inputVal = expInput
    setTimeout(() => {
      screenToUpdate.innerText = ''
      screenToUpdate.className = 'screen'
      document.getElementById('expForm').removeAttribute('hidden')
    }, 15000)
  }
}

function checkForWinner () {
  console.log("taco")
  console.log(inputVal.value)
  let randomString = randomArray.join('')
  console.log(randomString)
  
  if (inputVal.value === randomString) {
    screenToUpdate.className = "winningScreen"
  } else if (inputVal.value !== randomString) {
    screenToUpdate.className = "tryAgainScreen"
  }
}
