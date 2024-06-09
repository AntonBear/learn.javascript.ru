function Calculator() {
  this.sum = function Sum(number) {
    this.number = number * 2
    return this.number
  }
  this.multiply = function Multiply(number) {
    this.number = number * 2
  }
  this.divide = function Divide(number) {
    this.number = number / 2
    return this.number // обсудить с Братом return и что будет если убрать this. из return
  }
}

const calculator1 = new Calculator()

// console.log(calculator1.divide(5555555))
// console.log(calculator1)

console.log(calculator1)
