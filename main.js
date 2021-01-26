// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// const playerOne = prompt("Player 1: ")
// const playerTwo = prompt("Player 2: ")

const playerOneName = "Mady";
const playerTwoName = "Sarah";

// Cards and their types defined in two arrays
const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
const cardTypes = ["clubs", "diamonds", "hearts", "spades"]
// console.log(cards.length*cardTypes.length) === 52

const cardPossibilities = [];

for (let suit of cardTypes) { // Generates all 52 card possibilities
  for (let card of cards) {
    cardPossibilities.push([card, suit]);
  };
};

// console.log(cardPossibilities);

function RNG(max) { // Defines the RNG formula
  return (Math.floor(Math.random() * Math.floor(max)))
}

function cardShuffle(array, newArray) { // Shuffles all cards using RNG formula above
  for (let item of array) {
    newArray.push(undefined) //this actually gives 52 undefineds so that something in a list can be replaced WITHOUT an IndexError
  };
  numbersUsed = []
  for (let item of array) {
    while (true) {
      let itemRandomIndex = RNG(array.length)
      if (!(numbersUsed.includes(itemRandomIndex))) {
        newArray[itemRandomIndex] = item;
        numbersUsed.push(itemRandomIndex);
        break;
      };
    };
  };
  // return newArray;
};

function removeFirstFiftyone(array) {
  for (let i = 0; i < 51; i++) {
    array.shift();
  }
}

let totalShuffledCards = []

cardShuffle(cardPossibilities, totalShuffledCards)

let playerOneCards = [] //player One and player Two cards, init
let playerTwoCards = []

let halfwayThrough = totalShuffledCards.length / 2 //Got this solution (this and next 3 lines) from StackOverflow (https://stackoverflow.com/questions/9181188/splice-an-array-in-half-no-matter-the-size) Slices an array in half and puts the two halves in separate values via the slice method
playerOneCards = totalShuffledCards.slice(0, halfwayThrough);
playerTwoCards = totalShuffledCards.slice(halfwayThrough, totalShuffledCards.length);
//
// console.log(playerOneCards)
// console.log(playerTwoCards)

// human constructor

// function Player({numberOfCards, } = {}) {
//   this.color = color;
//   this.hungry = hungry;
//   this.owner = owner;
//   this.status = status;
// }

function Player({name, cards, numberOfCards} = {}) {
  this.name = name;
  this.cards = cards;
  this.numberOfCards = numberOfCards;
};

let playerOne = new Player ({
  name: prompt("Player 1: "),
  cards: playerOneCards,
});

let playerTwo = new Player ({
  name: prompt("Player 2: "),
  cards: playerTwoCards,
})

console.log(playerOne.cards)
console.log(playerTwo.cards)

//gamerunning variable

// let gameRunning = true;

function cardConvert(card) {
  console.log(card);
  return cards.indexOf(card[0]);
};

// for (let item of cards) {
//   console.log(cardConvert(item))
// }; //

let numberOfCards1 = 26;
let numberOfCards2 = 26;
let war = false;
let addNum = 1;

function test() {
  let lolololol = "''";
}

function regularGame(playerOneCards, playerTwoCards, card) {
  let x = "";

};

//h1, ul, li, h2, img, p, table, main, section, footer

// "2", "Jack", "1"
// "3", "5" "2"

// take one

//can you play war, or does playerOne win?

while ((playerOne.cards.length != 0) && (playerTwo.cards.length != 0)) {
  playerOneCard = playerOne.cards.shift();
  playerTwoCard = playerTwo.cards.shift();
  if (cardConvert(playerOneCard[0]) > cardConvert(playerTwoCard[0])) {
    console.log(`${playerOne.name} won this round`);
    playerOne.cards.push(playerOneCard);
    playerOne.cards.push(playerTwoCard);
  } else if (cardConvert(playerOneCard[0]) < cardConvert(playerTwoCard[0])) {
    console.log(`${playerTwo.name} won this round`);
    playerTwo.cards.push(playerTwoCard);
    playerTwo.cards.push(playerOneCard);
  } else {
    console.log(`WARRRRRRRRRRR!`)
  };
  console.log(`${playerOne.name} has ${playerOneCard} with ${playerOne.cards.length} cards`);
  console.log(`${playerTwo.name} has ${playerTwoCard} with ${playerTwo.cards.length} cards`);

};
