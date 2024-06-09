'use strict'

function Greeging() {
  this.myName = new ChooseName() // ссылается на новый объект ChooseName
  this.SaySomething = new ChooseGreeting() // ссылается на новый объект ChooseGreeting

  function ChooseName() {
    // объявляю новый конструктор
    this.female = 'Polina' // вношу в контекстный объект this свойство для female
    this.male = 'Anton' // вношу в контекстный объект this свойство для male
    function name(numberOfSex) {
      // функция для выбора пола
      return (numberOfSex = 1 //  если аргумент равен 1 ,
        ? console.log(`${this.female}`) // тогда female
        : console.log(`${this.male}`)) // в противном случае male
    }
    return name // функция ChooseName() возвращает значение функции name
  }


  function ChooseGreeting() {
    this.hi = 'hi'
    this.greeting = 'hello'
    function word(numberOfWord) {
      return (numberOfWord = 1
        ? console.log(`${this.hi}`)
        : console.log(`${this.greeting}`))
    }
    return word
  }
}
const user1 = new Greeging()
console.log(user1.myName)
