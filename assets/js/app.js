const cardArray = [
  {
    name: 'fries',
    img: 'assets/img/fries.png',
  },
  {
    name: 'hamburger',
    img: 'assets/img/hamburger.png',
  },
  {
    name: 'popcorn',
    img: 'assets/img/popcorn.png',
  },
  {
    name: 'broccoli',
    img: 'assets/img/broccoli.png',
  },
  {
    name: 'sandwich',
    img: 'assets/img/sandwich.png',
  },
  {
    name: 'taco',
    img: 'assets/img/taco.png',
  },
  {
    name: 'fries',
    img: 'assets/img/fries.png',
  },
  {
    name: 'hamburger',
    img: 'assets/img/hamburger.png',
  },
  {
    name: 'popcorn',
    img: 'assets/img/popcorn.png',
  },
  {
    name: 'broccoli',
    img: 'assets/img/broccoli.png',
  },
  {
    name: 'sandwich',
    img: 'assets/img/sandwich.png',
  },
  {
    name: 'taco',
    img: 'assets/img/taco.png',
  }
]

cardArray.sort( () => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const resultDisplay =  document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'assets/img/dorso.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  console.log(cards);
  console.log('check for match');
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'assets/img/dorso.png')
    cards[optionTwoId].setAttribute('src', 'assets/img/dorso.png')

  }
  if (cardsChosen[0] == cardsChosen[1]) {
    cards[optionOneId].setAttribute('src', 'assets/img/white.png')
    cards[optionTwoId].setAttribute('src', 'assets/img/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  }else{
    cards[optionOneId].setAttribute('src', 'assets/img/dorso.png')
    cards[optionTwoId].setAttribute('src', 'assets/img/dorso.png')
  }
  resultDisplay.textContent = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []

  if(cardsWon.length == cardArray.length/2){
     resultDisplay.textContent = 'Congrats! You found them All!'
  }
}

function flipCard() {
   const cardId = this.getAttribute('data-id')
   cardsChosen.push(cardArray[cardId].name)
   cardsChosenIds.push(cardId)
   console.log(cardsChosen);
   console.log(cardsChosenIds);
   this.setAttribute('src', cardArray[cardId].img)
   if (cardsChosen.length === 2) {
     setTimeout( checkMatch, 300)
   }
}
