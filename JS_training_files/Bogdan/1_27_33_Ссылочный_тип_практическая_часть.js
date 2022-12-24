const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA
copyOfA.c = 'abc'
copyOfA.a = 20

console.log(copyOfA)
