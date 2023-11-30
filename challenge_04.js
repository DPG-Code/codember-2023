import { DATA_CHALLENGE_04 } from './consts.js'

const filesArray = DATA_CHALLENGE_04.split('\n')
const realFiles = []

filesArray.map((file) => {
  const fileContent = file.split('-')
  const fileString = fileContent[0]
  const checksum = fileContent[1]
  const fileStringArray = fileString.split('')
  const checksumArray = checksum.split('')
  const result = []

  checksumArray.map((letter, i) => {
    if (fileStringArray.includes(letter)) {
      if (i < checksumArray.length - 1) {
        if (
          fileStringArray.indexOf(letter) <
          fileStringArray.indexOf(checksumArray[i + 1])
        ) {
          result.push(true)
        }
      } else {
        if (
          fileStringArray.indexOf(letter) >
          fileStringArray.indexOf(checksumArray[i - 1])
        ) {
          result.push(true)
        }
      }
    }
  })
  if (result.every((e) => e === true)) realFiles.push(fileContent)
})

console.log(filesArray[32].split('-')[1])
