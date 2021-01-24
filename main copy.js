// const playerOne = prompt("Player 1: ")
// const playerTwo = prompt("Player 2: ")

// Cards and their types defined in two arrays
const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
const cardTypes = ["Clubs", "Diamonds", "Hearts", "Spades"]
// console.log(cards.length*cardTypes.length) === 52

const cardPossibilities = [];

for (let type of cardTypes) { // Generates all 52 card possibilities
  for (let card of cards) {
    cardPossibilities.push([type, card]);
  };
};

console.log(cardPossibilities);

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

playerOneCards = [] //player One and player Two cards, init
playerTwoCards = []

cardShuffle(cardPossibilities, playerOneCards)
cardShuffle(cardPossibilities, playerTwoCards)
console.log(playerOneCards)
console.log(playerTwoCards)
// playerTwoCards = cardShuffle(cardPossibilities, shuffledCards)

// console.log(playerOneCards)
// console.log(playerTwoCards)

// function Player({numberOfCards, } = {}) {
//   this.color = color;
//   this.hungry = hungry;
//   this.owner = owner;
//   this.status = status;
// }
