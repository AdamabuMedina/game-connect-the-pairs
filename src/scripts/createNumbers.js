// --== Заполняем поле числами
export const fillField = (width, height, cardsOnField) => {
  const fieldSize = width * height
  const numbers = generateCardNumbers(fieldSize)
  cardsOnField.forEach(card => {
    card.textContent = numbers.shift()
  })
}

// --== Создаём массив согласно условиям задачи (по два числа от от одного до половины количества карточек)
const generateCardNumbers = fieldSize => {
  let cardsArr = []
  let cards = fieldSize / 2
  while (cards > 0) {
    cardsArr.push(cards)
    cardsArr.push(cards)
    cards--
  }
  return shuffle(cardsArr)
}

// --== Тасуем числа на основе алгоритма Фишера-Йетса
const shuffle = arr => {
  let j
  let tempValue

  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    tempValue = arr[j]
    arr[j] = arr[i]
    arr[i] = tempValue
  }

  return arr
}
