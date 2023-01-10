import { Card } from "./scripts/Card.js"
import shuffle from "./scripts/shuffle.js"

const newGame = (container, count, arr) => {
  // Создать поле
  let cardsArray = []
  let firstCard = null
  let secondCard = null

  for (let i = 1; i <= count / 2; i++) {
    arr.push(i)
    arr.push(i)
  }

  arr = shuffle(arr)

  // Логика игры
  const flip = card => {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.cardNumber != secondCard.cardNumber) {
        firstCard.open = false
        secondCard.open = false
        firstCard = null
        secondCard = null
      }
    }

    if (firstCard === null) {
      firstCard = card
    } else {
      if (secondCard === null) {
        secondCard = card
      }
    }

    if (firstCard !== null && secondCard !== null) {
      if (firstCard.cardNumber === secondCard.cardNumber) {
        firstCard.success = true
        secondCard.success = true
        firstCard = null
        secondCard = null
      }
    }

    const successClass = document.querySelectorAll(".success")

    if (successClass.length === arr.length) {
      // Сброс игры
      alert("Победа")
      container.innerHTML = ""
      arr = []
      cardsArray = []
      firstCard = null
      secondCard = null

      newGame(container, count, arr)
    }
  }

  for (const cardNumber of arr) {
    cardsArray.push(new Card(container, cardNumber, flip))
  }
}

const game = document.querySelector("#game")
let cardsNumberArray = []

newGame(game, 6, cardsNumberArray)
