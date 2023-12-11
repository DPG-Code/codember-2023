import { DATA_CHALLENGE_05 } from './consts.js'

const inputsArray = DATA_CHALLENGE_05.split('\n')
const validInputs = []

const chekIfAlphanumeric = (word) => {
  const isLetter = (caracter) =>
    (caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z')
  const inNumber = (caracter) => caracter >= '0' && caracter <= '9'

  for (let i = 0; i < word.length; i++) {
    let caracter = word[i]
    if (!(isLetter(caracter) || inNumber(caracter))) {
      return false
    }
  }
  return true
}

const chekIfEmail = (word) => {
  const signIndex = word.indexOf('@')
  const dotIndex = word.indexOf('.')
  const user = word.slice(0, signIndex)
  const domain = word.slice(signIndex + 1, dotIndex)
  const com = word.slice(dotIndex + 1)

  if (signIndex > 1 && dotIndex > 1) {
    if (user && domain && com == 'com') return true
  }
  return false
}

const isValidInput = () => {
  inputsArray.map((input) => {
    const inputArray = input.split(',')

    const id = inputArray[0] || ''
    const username = inputArray[1] || ''
    const email = inputArray[2] || ''
    const age = inputArray[3] || ''
    const location = inputArray[4] || ''

    if (id && username && email) {
      if ((age || !isNaN(age)) && (location || typeof location === 'string')) {
        if (
          chekIfAlphanumeric(id) &&
          chekIfAlphanumeric(username) &&
          chekIfEmail(email)
        ) {
          return
        }
      }
    }
    validInputs.push(username[0])
  })
}

isValidInput()

console.log(validInputs.join(''))
