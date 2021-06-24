// Importando o objeto 'person' - CommonJS:
// const person = require('./person')

// Importando a classe 'Person':
const Person = require('./person')
// Instanciando:
const personFromClass = new Person('Felipe', 32)

personFromClass.greeting()