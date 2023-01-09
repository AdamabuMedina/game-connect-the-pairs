export const showElement = (element, className) => {
  return element.classList.add(className)
}

export const removeElement = (element, className) => {
  return element.classList.remove(className)
}

export const validateInput = (input, defaultValue) => {
  if (input % 2 === 0 && input <= 10 && input.length > 0) {
    return input
  }
  return defaultValue
}

export const btnGroup = {
  timerId: undefined,
  gameFieldBody: document.querySelector("#field-body"),
  playAgainBtn: document.querySelector("#btn-again"),
}

export const classNames = {
  hide: "hide",
  guessed: "guessed",
  open: "open",
}
