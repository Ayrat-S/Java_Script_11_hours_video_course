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

/*
// Присвоение объекту нового свойства через квадратные скобки, т.е. синтаксис со скобками - если название свойства является значением той или иной переменной.
const myCity = {
    city: 'New York'
} // Присваиваем объект.

const countryPropertyName = 'country' // Создаем новую переменную со значением 'country' 

myCity[countryPropertyName] = 'USA' // Пошагово разбираем данное выражение:
// 1) Парсинг значения. Квадратные скобки парсят значение 'country' из переменной countryPropertyName. 
// 2) Присвоение свойства. Далее в этом выражении объекту myCity присваивается новое свойство с парсенным названием - 'country'. 
// 3) Присвоение значения. Новому свойству 'country', у объекта myCity, через оператор = присваивается значение 'USA'.

console.log(myCity) // { city: 'New York', popular: true, country: 'USA' }
*/

/*
// Удаление свойства вложенного объекта:
const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity.info.isPopular) // true

delete myCity.info['isPopular'] // В данном случае использование квадратных скобок бесмысленно (delete myCity.info.isPopular - через вторую точку тоже удаляет).
// => Используйте запись с квадратными скобками только тогда, когда здесь в квадартных скобках должно быть какое-то выражение - например название переменной (т.е. что-то можно спарсить).

console.log(myCity) // { city: 'New York', info: { country: 'USA' } }
*/



