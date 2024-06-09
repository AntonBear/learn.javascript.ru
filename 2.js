const answer = 'ECMAScript11'

function question(answer) {
  if (answer == 'ECMAScript') {
    return 'Верно!'
  } else {
    return 'Неверно'
  }
}

// const answer = 2

// const question = (answer) => {
//   if (answer > 0) {
//     return console.log('1')
//   }
//   if (answer < 0) {
//     return console.log('-1')
//   }
//   if ((answer = 0)) {
//     return console.log('0')
//   }
// }

console.log(question(answer))
