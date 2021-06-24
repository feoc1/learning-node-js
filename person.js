// const person = {
//     name: 'John Doe',
//     age: 30
// }

// Criando uma classe:
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // Método':
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}.`)
    }
}

module.exports = Person

// Module Wrapper Function (P/ exportar):
// (function (exports, require, module, __filename, __dirname) {
// })

// Mostrando que temos acesso a essas variáveis:
// console.log(__dirname, __filename)