import { btnGroup, removeElement, showElement } from "./utils.js"

export const setTimer = () => {
  const timer = document.querySelector("#timer")

  if (btnGroup.timerId !== undefined) clearInterval(btnGroup.timerId)

  timer.textContent = "60"

  btnGroup.timerId = setInterval(() => {
    timer.innerText = parseInt(timer.textContent) - 1

    if (timer.textContent == 0) {
      let cardsOnField = document.querySelectorAll(".card")
      clearInterval(btnGroup.timerId)
      removeElement(btnGroup.playAgainBtn, classNames.hide)

      setTimeout(() => {
        alert("Вы проиграли!")
      }, 200)

      for (let card of cardsOnField) {
        showElement(card, guessed)
      }
    }
  }, 1000)
}
