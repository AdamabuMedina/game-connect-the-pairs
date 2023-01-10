import { Card } from "./scripts/Card.js"

const gameContainer = document.getElementById("game")

const flip = card => {
  console.log(card)
}

const newCard = new Card(gameContainer, 5, flip)
console.log(newCard)
// newCard(10)
// newCard(10)
