import { DATA_CHALLENGE_01 } from './consts.js'

let messages = DATA_CHALLENGE_01.split(' ').map((word) => word.toLowerCase())
const result = []

messages.map((word, i) => {
  if (messages.includes(word)) {
    let messageCopy = messages
    const count = messageCopy.reduce((counter, wordCount) => {
      counter[wordCount] = (counter[wordCount] || 0) + 1
      return counter
    }, {})
    messages = messages.filter((a) => a != word)
    result.push(`${word}${count[word]}`)
  }
})

console.log(result.join(''))
