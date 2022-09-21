/**
 * The program makes the user guess the random number
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-11-25
 */

import promptSync from 'prompt-sync'

const random = Math.floor(Math.random() * 6 + 1)
let loopNumber = 0
while (true) {
  const prompt = promptSync()
  const userString = prompt('Guess a number between 1 to 6: ')
  const userNumber = parseInt(userString)
  loopNumber++
  if (userNumber === random) {
    console.log(`You guessed the random number in ${loopNumber} times!`)
    break
  } else if (random > userNumber) {
    console.log('Next time guess higher!')
  } else if (random < userNumber) {
    console.log('Next time guess lower!')
  } else {
    console.log('Invalid input.')
  }
}
console.log('\nDone.')
