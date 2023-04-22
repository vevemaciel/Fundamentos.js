// Declarar variavel != inicializar variavel

var person //declaração 
var message ='hello'


//let

//console.log(age) nao posso acessar antes da inicialização

let age = 50
// let age = 42 -> nao posso redeclarar
age= 42
console.log(age)

let person = 'gabriel'

function sayHello(){
    let person = 'Hilda'
    console.log(`HI ${person}`)
}
sayHello()

console.log(person)

//const
const gravity = 9.8

//gravity
//const gravity= 10 
//nao deixa redeclarar e nem atribuir valor

function changeGravity (){
    const gravity= 10
    console.log(gravity)
}

changeGravity()
console.log(gravity)

const dog ={
    name:'kevin, "O matador"',
    age:9,
    bark:function(){
        console.log(`auau, ${dog.name}`)
    },
}

console.log(dog.name)
dog.name='Brad'

//dog = {name: 'wilson'} - naõ pode reatribuir valores

console.log(dog.nome)

dog.bark()
// um papo sobre o this. O que é ? do que vive? onde mora? do que se alimenta?


class Dog(){
    constructor(){
        this.name ="kevin"
        this.age=9
    }
    bark (){
        console.log(this.name)
    }
    showThis(){
        console.log(this)
    }
}
const kevin= new dog('kevin')
kevin.bark
