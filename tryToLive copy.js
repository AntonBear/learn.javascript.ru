'use strict'

function BabyBorninig() {
  this.theFirstWordInYourLife = function ChooseGreeting() {
    this.hi = 'hi'
    this.hello = 'hello'
    this.greeting = function (numberOfWord) {
      return (numberOfWord = 1
        ? console.log(`${this.hi}`)
        : console.log(`${this.hello}`))
    }
  }
  this.theFirstNameInYourLife = function ChooseName() {
    this.female = 'Polina' // вношу в контекстный объект this свойство для female
    this.male = 'Anton' // вношу в контекстный объект this свойство для male
    this.name = function (numberOfSex) {
      return (numberOfSex = 1 //  если аргумент равен 1 ,
        ? console.log(`${this.female}`) // тогда female
        : console.log(`${this.male}`)) // в противном случае male
    }
  }
}

const baby = new BabyBorninig()
console.log(baby.theFirstNameInYourLife)
// console.log(baby.theFirstNameInYourLife(1))
