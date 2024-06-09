'use strict'

function User() {
  this.myName = new ChooseName('Anton')
  this.SaySomething = new SayHi('Hi')
  // this.
  function ChooseName(name) {
    this.name = name
    // return console.log(`${name}`)
  }

  function SayHi(word) {
    this.word = word
    // console.log(`${word}`)
  }
}

const user1 = new User()

console.log(user1.SaySomething)
