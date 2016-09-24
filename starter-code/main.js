console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

// if (cardTwo === cardFour) {             // compare two kings
//   alert("You have a match!");
// } else if (cardOne === cardThree) {     // compare two queens
//   alert("You have a match!");
// } else if (cardOne === cardTwo) {       // compare one of each
//   alert("Sorry, try again");
// } else if (cardOne === cardFour) {
//   alert("Sorry, try again");
// } else if (cardTwo === cardThree) {
//   alert("Sorry, try again");
// }

var gameBoard = document.getElementById('game-board');

var cards = 4;

var createCards = function() {
  for (var i = 0; i < cards; i++) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    gameBoard.appendChild(newCard);
  }
}

createCards();
