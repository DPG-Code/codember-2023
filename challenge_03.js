import { DATA_CHALLENGE_03 } from './consts.js'

const keysArray = DATA_CHALLENGE_03.split('\n')

const invalidKeys = []

const ifValid = (min, max, letter, key) => {
  let count = 0
  for (let i = 0; i < key.length; i++) {
    if (key[i] == letter) count++
  }
  if (count >= min && count <= min) return true
}

keysArray.map((key, i) => {
  const values = key.slice(0, key.indexOf(':'))
  const valuesArray = values.split(' ')

  const valuesNumberArray = valuesArray[0].split('-')
  const min = valuesNumberArray[0]
  const max = valuesNumberArray[1]

  const letter = valuesArray[1]

  const keyValue = key.slice(key.indexOf(':') + 2)

  if (!ifValid(min, max, letter, keyValue))
    invalidKeys.push(`${min}-${max} ${letter}: ${keyValue}`)
})

const getInvalidLastKey = () => {
  const invalidKey = invalidKeys[41]
  const index = invalidKey.indexOf(':')
  return invalidKey.slice(index + 2)
}

console.log(getInvalidLastKey())
