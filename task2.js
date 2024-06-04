// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. 169

"use strict"
let schedule = {}

function isEmpty(obj) {
  for (let key in obj) {
    // ошибка - забыл указать let для key
    return false // ошибка - указал true
  }
  return true // ошибка - указал false
}

console.log(isEmpty(schedule))
schedule['8:30'] = 'get up'
console.log(isEmpty(schedule))
