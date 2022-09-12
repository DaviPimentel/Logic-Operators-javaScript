const prompt = require('prompt-sync')()

const anos = parseInt(prompt('Type the ages: '))
console.log(`The typed ages was: ${anos}` )

const meses = parseInt(prompt('\nType the months: '));
console.log(`The typed meses was: ${meses}` )

const dias = parseInt(prompt('\nType the days: '))
console.log(`The typed days was: ${dias}` )

const media = (anos * 365) + (meses * 30) + dias
console.log(`\nThe media was: ${media}`)


