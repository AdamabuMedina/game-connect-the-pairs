import { checkCardOverlap } from "./scripts/checkCardOverlap.js"
import { fillField } from "./scripts/createNumbers.js"
import { setTimer } from "./scripts/timer.js"
import {
  btnGroup,
  classNames,
  removeElement,
  showElement,
  validateInput,
} from "./scripts/utils.js"

document.addEventListener("DOMContentLoaded", function () {
  // --== Инициализируем игру
  ;(function () {
    const startButton = document.querySelector("#start-btn")
    const backButton = document.querySelector("#back-btn")
    const introContainer = document.querySelector("#intro-container")
    const gameContainer = document.querySelector("#game-container")

    startButton.addEventListener("click", () => {
      generateField()
      showElement(introContainer, classNames.hide)
      removeElement(gameContainer, classNames.hide)
      setTimer()
    })

    backButton.addEventListener("click", () => {
      btnGroup.gameFieldBody.innerHTML = ""
      removeElement(introContainer, classNames.hide)
      showElement(gameContainer, classNames.hide)
      clearInterval(btnGroup.timerId)
    })
  })()

  // --== Создаём поле
  function generateField() {
    const widthInput = document.querySelector("#width-select")
    const heightInput = document.querySelector("#height-select")

    let width
    let height

    height = validateInput(heightInput.value, 4)

    for (let h = height; h > 0; h--) {
      let row = document.createElement("div")
      showElement(row, "row")
      width = validateInput(widthInput.value, 4)

      for (let w = width; w > 0; w--) {
        let card = document.createElement("div")
        showElement(card, "card")
        row.append(card)
      }

      btnGroup.gameFieldBody.append(row)
    }

    widthInput.value = ""
    heightInput.value = ""

    let cardsOnField = document.querySelectorAll(".card")

    fillField(width, height, cardsOnField)

    cardsOnField.forEach(card => {
      card.addEventListener("click", () => {
        showElement(card, "open")
        checkCardOverlap(cardsOnField)
      })
    })

    btnGroup.playAgainBtn.addEventListener("click", () => {
      cardsOnField.forEach(card => {
        removeElement(card, classNames.guessed)
        card.innerText = ""
      })
      fillField(width, height, cardsOnField)
      showElement(btnGroup.playAgainBtn, classNames.hide)
      setTimer()
    })
  }
})
