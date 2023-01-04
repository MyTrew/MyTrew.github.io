//Memory_game.js

//card options
const cardArray = [
    {
        name:'fries',
        img:'./Games/memory_game/images/fries.png'
    },
    {
        name:'fries',
        img:'./Games/memory_game/images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'./Games/memory_game/images/cheeseburger.png'
    },
    {
        name:'cheeseburger',
        img:'./Games/memory_game/images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'./Games/memory_game/images/hotdog.png'
    },
    {
        name:'hotdog',
        img:'./Games/memory_game/images/hotdog.png'
    },
    {
        name:'icecream',
        img:'./Games/memory_game/images/ice-cream.png'
    },
    {
        name:'icecream',
        img:'./Games/memory_game/images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'./Games/memory_game/images/milkshake.png'
    },
    {
        name:'milkshake',
        img:'./Games/memory_game/images/milkshake.png'
    },
    {
        name:'pizza',
        img:'./Games/memory_game/images/pizza.png'
    },
    {
        name:'pizza',
        img:'./Games/memory_game/images/pizza.png'
    },

]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result1')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', './Games/memory_game/images/blank.png')
        card.setAttribute('data-id', i)
        //cardaddEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', './Games/memory_game/images/white.png')
        cards[optionTwoId].setAttribute('src', './Games/memory_game/images/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', './Games/memory_game/images/blank.png')
        cards[optionTwoId].setAttribute('src', './Games/memory_game/images/blank.png')
        alert('Sorry, try again')
    } 
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.Display.textContent = 'Congratulations! You Won! Want to play again?'
    }

}

//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()