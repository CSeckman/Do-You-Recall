/*-------------------------------- Constants --------------------------------*/

const beginnerArray = [1,1,1,1,1]
const intermediateArray = [1,1,1,1,1,1,1]
const expertArray = [1,1,1,1,1,1,1,1,1,1]


/*---------------------------- Variables (state) ----------------------------*/

let startArray
let randomArrayLength
let randomArray
let inputVal 

/*------------------------ Cached Element References ------------------------*/

const begButton = document.querySelector('#beginner-btn')
const interButton = document.querySelector('#intermediate-btn')
const expButton = document.querySelector('#expert-btn')
const screenOfNums = document.querySelector('.screen-of-nums')
const playerInput = document.querySelector('#player-input')
const submitBtn = document.querySelector('.submit-btn')
const resetBtn = document.querySelector('.reset-btn')

/*----------------------------- Event Listeners -----------------------------*/

begButton.addEventListener('click', startGame)
interButton.addEventListener('click', startGame)
expButton.addEventListener('click', startGame)
submitBtn.addEventListener('click', checkForWinner)
resetBtn.addEventListener('click', closeModal)

/*-------------------------------- Functions --------------------------------*/

function startGame(evt) {
  document.querySelector('.modal-container').removeAttribute('hidden', true)
  if (evt.target.id === 'beginner-btn') {
    document.getElementById('card-title').innerText="Beginner"
    document.getElementById('number-of-cards').innerText="5 Numbers - Do You Recall?"
    startArray = beginnerArray
  }
  if (evt.target.id === 'intermediate-btn') {
    document.getElementById('card-title').innerText="Intermediate"
    document.getElementById('number-of-cards').innerText="7 Numbers - Do You Recall?"
    startArray = intermediateArray
  }
  if (evt.target.id === 'expert-btn') {
    document.getElementById('card-title').innerText="Expert"
    document.getElementById('number-of-cards').innerText="10 Numbers - Do You Recall?"
    startArray = expertArray
  }
  getRandomArray()
}

function getRandomArray() {
  randomArray = startArray.map(function (num) {
    return (Math.floor(Math.random() * 10))
  })
  renderNums(randomArray)
}

function renderNums (randomArray) {
  randomArrayLength = randomArray.length
  randomArray.forEach((num, idx) => {
    setTimeout(()=> {
      screenOfNums.innerText = num
      setTimeout(()=> {
        screenOfNums.innerText = ""
      }, (1000))
    }, (idx * 1100))
  })
  renderForms()
}

function renderForms() {
  inputVal = playerInput
  if (randomArrayLength === 5) {
    setTimeout(() => {
      screenOfNums.innerText = ''
      screenOfNums.className = 'img'
      document.getElementById('input-form').removeAttribute('hidden')
    }, 5500)
  }
  if (randomArrayLength === 7) {
    setTimeout(() => {
      screenOfNums.innerText = ''
      screenOfNums.className = 'img'
      document.getElementById('input-form').removeAttribute('hidden')
    }, 7500)
  }
  if (randomArrayLength === 10) {
    setTimeout(() => {
      screenOfNums.innerText = ''
      screenOfNums.className = 'img'
      document.getElementById('input-form').removeAttribute('hidden')
    }, 11000)
  }
}

function checkForWinner() {
  let randomString = randomArray.join('')
  if (inputVal.value === randomString) {
    screenOfNums.className = "you-win"
  } else {
    screenOfNums.className = "try-again"
  }
}

function closeModal() {
  document.querySelector('.modal-container').setAttribute('hidden', true)
  document.getElementById('screen').className = 'screen-of-nums'
  document.querySelector('#input-form').setAttribute('hidden', true)
  inputVal.value = ""
}