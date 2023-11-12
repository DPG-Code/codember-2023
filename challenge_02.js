import { DATA_CHALLENGE_02 } from './consts.js'

const operations = DATA_CHALLENGE_02.split('')
const result = []
let actValue = 0

operations.map((op, i) => {
  if (op == '#') actValue += 1
  else if (op == '@') actValue -= 1
  else if (op == '*') actValue *= actValue
  else result.push(actValue)
})

console.log(result.join(''))
