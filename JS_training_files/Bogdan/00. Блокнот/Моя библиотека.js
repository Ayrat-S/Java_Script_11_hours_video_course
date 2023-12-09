// Моя библиотека.

/*
console.log(console.log('Name')) // выведет в OUTPUT и сам текст 'Name' и его значение
console.log('Name') // выведет в OUTPUT только сам текст 'Name'
*/

/* 
console.log(console) // выведет в OUTPUT все свойства объекта console. 
*/

/*
console.log(console.log) // выведет в OUTPUT значение свойства log.
*/

/*
// Вывод значения свойства вложенного объекта:
let Truck = {
    Wheels: 8,
    Windows: {
        Front: 2,
        Left: 1,
        Right: 1
    }
}

console.log(Truck.Windows.Front) // выведет в OUTPUT значение свойства вложенного объекта через точечную запись.
*/

/*
// Удаление свойства объекта:
delete - оператор для удаления свойства объекта.
Пример:

const objectPerson1 = {
    name: 'Jim',
    age: 35,
    car: true
}

delete objectPerson1.car
console.log(objectPerson1)
*/

/*
// Вывод значения свойства у массива:
let ArrayFruits1 = [1,2,3]
ArrayFruits1[1] = {
    Fruit1: 'Apple', 
    Fruit2: 'Banana'
}
console.log('Вывод значения свойства "Fruit2" у массива [1]:', ArrayFruits1[1].Fruit2)
*/