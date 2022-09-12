const prompt = require('prompt-sync')();

const dias = parseInt(prompt('\nEnter your age in days: '))
console.log(`The typed days was: ${dias}` )

const idade_anos = dias / 365

const idade_meses = (dias % 365) / 30

const idade_dias = (dias % 365) % 30

console.log(`\nYour age in years is: ${idade_anos}`,Math.round(idade_anos))
console.log(`\nYour age in mounths is: ${idade_meses}`,Math.round(idade_meses))
console.log(`\nYour age in days is: ${idade_dias}`,Math.round(idade_dias))



