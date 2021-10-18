/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
const beginnerArray = [1,1,1,1,1]
const intermediateArray = [1,1,1,1,1,1,1,1,1,1]
const expertArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
let startArray

/*------------------------ Cached Element References ------------------------*/
const begButton = document.querySelector('#beginnerBtn')
const interButton = document.querySelector('#intermediateBtn')
const expButton = document.querySelector('#expertBtn')
const begScreen = document.querySelector('#beginnerScreen')
const interScreen = document.querySelector('#intermediateScreen')
const expScreen = document.querySelector('#expertScreen')

/*----------------------------- Event Listeners -----------------------------*/
begButton.addEventListener('click', startGame)
interButton.addEventListener('click', startGame)
expButton.addEventListener('click', startGame)


/*-------------------------------- Functions --------------------------------*/
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
  if (randomArray.length === 5) {
    screenToUpdate = begScreen
  } else if (randomArray.length === 10) {
    screenToUpdate = interScreen
  } else if (randomArray.length === 15) {
    screenToUpdate = expScreen
  }
  randomArray.forEach((num, idx) => {
    setTimeout(()=> {
      screenToUpdate.innerText = num
      console.log(num)
    }, (idx * 1000))
  })
}