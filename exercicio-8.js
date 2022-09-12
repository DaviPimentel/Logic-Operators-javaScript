const prompt = require('prompt-sync')()

const cust_fab = parseInt(prompt('Enter the factory cost of a car: '));
console.log(`The typed cost: ${cust_fab}` )

const imposto = (45 * cust_fab) /100
console.log(`\nCost of a new car: ${imposto}`)
const dist = (28 * cust_fab)  /100
console.log(`\nCost of a new car: ${dist}`)

const carro = imposto * dist * cust_fab
console.log(`\nCost of a new car: ${carro}`)
