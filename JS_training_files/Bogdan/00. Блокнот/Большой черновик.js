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