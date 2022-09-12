const prompt = require('prompt-sync')()

const nota_1 = parseInt(prompt('Type the first note: '));
console.log(`The typed note was: ${nota_1}`)

const nota_2 = parseInt(prompt('Type the second note: '));
console.log(`The typed note was: ${nota_2}`)

const nota_3 = parseInt(prompt('Type the third note: '));
console.log(`The typed note was: ${nota_3}` )

const peso_1 = 2
const peso_2 = 3
const peso_3 = 5

const div = peso_1+peso_2+peso_3

const media = ((nota_1*2)+(nota_2*3)+nota_3*5) / div
console.log(`The grade average is: ${media}`,Math.round(media))

