'use strict'

function Person(name) {
  this.name = name
  this.greeting = function () {
    console.log('Привет ' + this.name)
  }
  this.running = function () {
    console.log('Я побежал')
  }
}

const user1 = new Person('Антон')

// console.log(user1.greeting())

user1.running()
