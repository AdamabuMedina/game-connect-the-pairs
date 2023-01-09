import { btnGroup, classNames, removeElement, showElement } from "./utils.js"

export // --== Проверка совпадений
const checkCardOverlap = (cardsOnField, timer) => {
  let openedCards = document.querySelectorAll(".open")

  if (openedCards.length > 1) {
    setTimeout(() => {
      removeElement(openedCards[0], classNames.open)
      removeElement(openedCards[1], classNames.open)
    }, 500)
    if (openedCards[0].textContent === openedCards[1].textContent) {
      showElement(openedCards[0], classNames.guessed)
      showElement(openedCards[1], classNames.guessed)
    }
  }

  let guessedCards = document.querySelectorAll(".guessed")
  if (guessedCards.length === cardsOnField.length) {
    setTimeout(() => {
      alert("Вы выиграли!")
    }, 200)
    removeElement(btnGroup.playAgainBtn, classNames.hide)
    clearInterval(timer)
  }
}
