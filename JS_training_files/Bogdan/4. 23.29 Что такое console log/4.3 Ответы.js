// **************************************************************************************************************************************************************************
// Bogdan Stashchuk
// https://www.youtube.com/watch?v=CxgOKJh4zWE

// ОТВЕТЫ.

/* 1. Что такое console.log()?
console.log() это выражение, которое выводит какое-либо значение в консоль.
console здесь является объектом, у которго есть несколько свойств, значениями которых являются функции или так называемые методы.
Чтобы получить доступ к свойству объекта console, нужно после него поставить точку т.е. точечную запись и после точки прописать имя этого свойства, т.е log.
Далее, чтобы вызвать сам метод log, нужно после него поставить круглые скобки.
Остается указать внутри круглых скобок какой-либо аргумент, чтобы вывести его значение в консоли.

// 2. Разбираем синтаксис console.log('Hello world') =>
console // Объект // А у объекта как вы уже знаете есть свойства и каждое свойство это пара => КЛЮЧ: ЗНАЧЕНИЕ.
. // Точечная запись // Доступ к свойствам объекта, т.е. в данном случае доступ к методу объекта.
log // Метод // Метод - это функция, которая является значением одного из свойств объекта.
() // Вызов метода // Внутри скобок размещается аргумент.
'Hello world' // Аргумент типа 'String'


/* 2. Т.к. любое выражение возвращает значение, то результатом выражения console.log('Hello world'), в консоли Chrome DevTools будет:
>  console.log('Hello world') // Выражение, с аргументом 'Hello world'. Аргументом является строка, т.к. текст внутри скобок находится в одинарных кавычках.
   Hello World // То что мы передали как аргумент в вызове метода log, т.е. по факту console.log() выполнил какую-то свою задачу, а именно напечатал в консоль Hello World
<. undefined // Строка undefined - это значение выражения, которое интерпретатор JS возвращает через функцию log.
*/

/* 3. Значение undefined в консоли Visual Studio Code:
Чтобы в консоли Visual Studio Code, увидеть значение undefined выражения console.log('Hello world'), а не только результат этого выражения - Hello World, 
нужно наше выражение console.log('Hello world') использовать в качестве аргумента в выражении console.log():
console.log(console.log('Hello world'))
   Ответ консоли будет такой:
Name
undefined
*/

/* 4. Выражение - это вызов функции.
>  console.log('Hello world')
   Hello world
<. undefined
Результатом вызова данной функции будет значение undefined. Это то что нам вернул этот метод log.
*/

