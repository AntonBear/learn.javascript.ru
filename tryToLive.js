'use strict'

function Greeging() {
  this.myName = newChooseName // ссылается на новый объект ChooseName
  this.SaySomething = g2 // ссылается на новый объект ChooseGreeting

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
  const newChooseName = new ChooseName()

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

  const g2 = new ChooseGreeting()
}
const user1 = new Greeging()
console.log(user1.myName)
