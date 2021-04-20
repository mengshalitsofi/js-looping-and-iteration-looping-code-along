// Code your solutions in this file
const cards = ["Ada", "Brendan", "Ali"];

function writeCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    console.log('Thank you, ${cards[i]}, for the wonderful surprise gift!');
  }

  return cards;
}

writeCards(cards);

let countdown = 0;
function countDown() {
    for (let countdown = 0; countdown < 10; countdown++) {
        console.log(countdown);
      } 
}