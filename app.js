
const beginnerArray = [1,1,1,1,1]
const intermediateArray = [1,1,1,1,1,1,1]
const expertArray = [1,1,1,1,1,1,1,1,1,1]
let startArray
let randomArrayLength
let randomArray
let inputVal 

const begButton = document.querySelector('#beginner-btn')
const interButton = document.querySelector('#intermediate-btn')
const expButton = document.querySelector('#expert-btn')
const screenOfNums = document.querySelector('.screen-of-nums')
const playerInput = document.querySelector('#player-input')
const submitBtn = document.querySelector('.submit-btn')
const resetBtn = document.querySelector('.reset-btn')

begButton.addEventListener('click', startGame)
interButton.addEventListener('click', startGame)
expButton.addEventListener('click', startGame)
submitBtn.addEventListener('click', checkForWinner)
resetBtn.addEventListener('click', closeModal)


function startGame(evt) {
  console.log('hi')
  document.querySelector('.modal-container').removeAttribute('hidden', true)
  if (evt.target.id === 'beginner-btn') {
    document.getElementById('card-title').innerText="Beginner"
    document.getElementById('number-of-cards').innerText="5 Numbers"
    startArray = beginnerArray
    console.log(startArray)
  }
  if (evt.target.id === 'intermediate-btn') {
    document.getElementById('card-title').innerText="Intermediate"
    document.getElementById('number-of-cards').innerText="7 Numbers"
    startArray = intermediateArray
    console.log(startArray)

  }
  if (evt.target.id === 'expert-btn') {
    document.getElementById('card-title').innerText="Expert"
    document.getElementById('number-of-cards').innerText="10 Numbers"
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
  randomArray.forEach((num, idx) => {
    setTimeout(()=> {
      screenOfNums.innerText = num
      console.log(num)
    }, (idx * 1000))
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
    }, 5000)
  }
  if (randomArrayLength === 7) {
    setTimeout(() => {
      screenOfNums.innerText = ''
      screenOfNums.className = 'img'
      document.getElementById('input-form').removeAttribute('hidden')
    }, 7000)
  }
  if (randomArrayLength === 10) {
    setTimeout(() => {
      screenOfNums.innerText = ''
      screenOfNums.className = 'img'
      document.getElementById('input-form').removeAttribute('hidden')
    }, 10000)
  }
}

function checkForWinner() {
  console.log("taco")
  console.log(inputVal.value)
  let randomString = randomArray.join('')
  console.log(randomString)
  
  if (inputVal.value === randomString) {
    screenOfNums.className = "you-win"
  } else {
    screenOfNums.className = "try-again"
  }
}

function closeModal() {
  document.querySelector('.modal-container').setAttribute('hidden', true)
}