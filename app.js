/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const begButton = document.querySelector('#beginnerBtn')
const interButton = document.querySelector('#intermediateBtn')
const expButton = document.querySelector('#expertBtn')


/*----------------------------- Event Listeners -----------------------------*/
begButton.addEventListener('click', startGame)
interButton.addEventListener('click', startGame)
expButton.addEventListener('click', startGame)


/*-------------------------------- Functions --------------------------------*/
function startGame() {
  console.log('working click')
}