// **************************************************************************************************************************************************************************
// Bogdan Stashchuk
// https://www.youtube.com/watch?v=CxgOKJh4zWE

/* Динамическая типизация - примеры.
*/

// Функции объявляются с помощью ключевого слова function, где a - это название функции, круглые скобки () - вызов функции, все что внутри скобок {} - тело функции:
function a() {
    console.log('Hey there - by: function a()')
}

a() // Если в консоль ввести просто а() - то ответ будет такой: 'hey there' => т.к. круглые скобки () вызовут функцию, присвоенную переменной а ранее выше.

// a = 0 // Здесь переменной а присваиваем новое значение типа число, после которого ранее присвоенная функция автоматически удаляется => т.е. произошла динамическая типизация.
// a() // Снова пробуем вызвать функцию переменной а - но консоль выдаст ошибку TypeError: a is not a function - переменная а не явлеятся функцией.



/* const для объявления переменных.
Вместо ключевого слова function мы можем использовать немного другой синтаксис - стрелочная функция (т.е. стрелочная функция присваивается переменной а). А переменная а 
объявляется с помощью const: 
*/
const b = () => {
    console.log('Hello there - by: const b = () => {}')
}

b() // Вызов функции, результатом которого будет вывод текста в консоль.
// b = 10 // Попытка присвоить новое значение константе b приведет к ошибке - TypeError: Assignment to constant variable.

