const objectPerson1 = {
    name: 'Jim',
    age: 35
}

const objectPerson2 = objectPerson1
console.log(objectPerson1)

objectPerson2.age = 37
console.log(objectPerson2)

objectPerson1.car = true
console.log(objectPerson2)
