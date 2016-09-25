console.log("JS file is connected to HTML! Woo!");

var gameBoard = document.getElementById('game-board');

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    gameBoard.appendChild(cardElement);
  }
};

createBoard();

//checks to see if there are cards in play
function isTwoCards() {
  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

    if (this.getAttribute('data-card') === 'king') {
      this.innerHTML = '<img src="images/king.png">';
    } else {
      this.innerHTML = '<img src="images/queen.png">'
    };

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
}

// test if two cards are a match
function isMatch(cards) {
  if (cards[0] === cards[1]) {             // two queens
    alert("You have a match!");
  } else {                                 // two kings
    alert("Sorry, try again");
  }
}
