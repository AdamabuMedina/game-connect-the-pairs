export class Card {
  _open = false
  _success = false

  constructor(container, cardNumber, flip) {
    this.card = document.createElement("div")
    this.card.classList.add("card")
    this.card.textContent = cardNumber

    this.card.addEventListener("click", () => {
      if (this.open === false && this.success === false) {
        this.open = true
        flip(this)
      }
    })

    container.append(this.card)
  }

  set open(value) {
    value ? this.card.classList.add("open") : this.card.classList.remove("open")
  }

  get open() {
    return this._open
  }

  set success(value) {
    value
      ? this.card.classList.add("success")
      : this.card.classList.remove("success")
  }

  get success() {
    return this._success
  }
}
