/*
Sunday, January 24, 2021

I have run into some severe complications with my code, and in my personal life this weekend, which I did not expect. The deadline was dangerously close tonight as I struggled, so I tried desperately to quickly pull together code anyway without regard to clean refactoring or self-repeating, just to have a working assignment to turn in. That was a mistake. The code below is the result of two things not working properly: 1.) Functions in general, and 2.) Constructors.

Constructors were having strings coming back as "[object Object]" and I'm not sure why. I am also unsure why functions were not being recognized in the while loop at some random point in time during the code, which is the unfortunate straw that broke the camel's back, and so I hurriedly threw most of the bottom portion of this together, functionless and constructorless, since I was running out of time.

The huge flaw with the code below is that the lists are not being properly sorted through. If it weren't for that issue, the code below (while still very messy) should run fine.

The whole bottom portion of this assignment should probably be redone anyway.
*/

// const playerOne = prompt("Player 1: ")
// const playerTwo = prompt("Player 2: ")

const playerOne = "Mady";
const playerTwo = "Sarah";

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

// numberOfCards1 = 0
//
// function Player(name, cards, numberOfCards) {
//   this.name = name;
//   this.cards = cards;
//   this.numberOfCards = numberOfCards;
// };
//
// let playerOne = new Player ({
//   name: "Sarah",
//   cards: playerOneCards,
//   numberOfCards: 26,
// });
//
// let playerTwo = new Player ({
//   name: "Mady",
//   cards: playerTwoCards,
//   numberOfCards: 26,
// })

// console.log(playerOne.cards)
// console.log(playerTwo.cards)

//gamerunning variable

let gameRunning = true;

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

while (gameRunning) {
  // FIRST: Figure out true number of card
  // SECOND: Calculate who won based on the same index of the shuffle.
  // THIRD: Take out index of one, push to other.
  // FOURTH
  for (let card in playerOneCards) {
    if ((numberOfCards1 <= 0) || (numberOfCards2 <= 0)) {
      gameRunning = false;
    }
    if ((typeof(playerTwoCards[card]) === "undefined") || (typeof(playerOneCards[card]) === "undefined")) {
      break;
    };
    if (war) {
      addnum = 4;
    } else {
      addnum = 1;
    }
    indexOfCard = playerOneCards.indexOf(card)
    //for some reason the function I wrote for all this before completely broke, and the while loop wouldn't accept any functions as existing, randomly. So I had to put this all back here.
    console.log(`${card}`)
    card1 = cardConvert(playerOneCards[card]);
    console.log(card1)
    card2 = cardConvert(playerTwoCards[card]);
    console.log(card2)
    console.log(playerOneCards)
    console.log(playerTwoCards)
    if (card1 > card2) {
      if (war) {
        console.log(`${playerOne} won! ${playerOne} got 4 more cards.`)
      } else {
        console.log(`${playerOne} won! ${playerOne} gets ${playerOneCards[card[0]]} and ${playerTwoCards[card[0]]}.`)
      };
      for (let i = 0; i < addnum-1; i++) {
        playerTwoCards.unshift();
        playerOneCards.push(playerTwoCards[card])
      }
      numberOfCards1 += addnum
      numberOfCards2 -= addnum
      war = false;
    } else if (card1 < card2) {
      if (war) {
        console.log(`${playerTwo} won! ${playerTwo} got 4 more cards.`)
      } else {
        console.log(`${playerTwo} won! ${playerTwo} gets ${playerOneCards[card[0]]} and ${playerTwoCards[card[0]]}.`)
      }
      for (let i = 0; i < addnum-1; i++) {
        playerOneCards.unshift();
        playerTwoCards.push(playerOneCards[card]);
      };
      numberOfCards2 += addnum
      numberOfCards1 -= addnum
      war = false;
    } else {
      war = true;
      console.log("WARRRRRRRR!!!!!!!!")
    };
    console.log(`${playerOne}: ${numberOfCards1}; ${playerTwo}: ${numberOfCards2}`)
    // regularGame(playerOneCards, playerTwoCards, card);
  }
  //
  /*
  Sarah drew 8 of clubs. Mady drew Queen of clubs
  Sarah has 25 cards. Mady has 27 cards
  * Sarah - 2, Mady + 2
  Sarah drew 9 of clubs. Mady drew King of diamonds
  Sarah has 24 cards. Mady has 24 cards
  This means WAR!
  Sarah drew 3 unknown cards, plus King of hearts. Mady drew 3 unknown cards, plus 6 of hearts.
  (6 > 3, Mady cards + 8, Sarah - 8)
Sarah drew King of hearts. Mady drew 6 of hearts
Sarah has 25 cards. Mady has 27 cards
Press q to quit. Press any key to play:
Sarah drew 5 of clubs. Mady drew 9 of spades
Sarah has 24 cards. Mady has 28 cards
  */
}

//while not game running (stopped when playerone 0 cards and not playertwo 0 cards):
//  (at least work out giving out two cards and deciding who takes two)
//  cardValue = 0, have if statements that define "Ace" as a card value of 14 for example, while nums are kept the same
 // for loop inside while loop, that repeats through first player's cards every time comparing to player 2 cards
//  placement variable for what's out on the table
//  make the comparison based on cardValue of each
//  if > Player 1 takes, if < Player 2 takes
//  if same num: war
//  logic of 8 cards: 2 cards already put down + iterate through 3 more
