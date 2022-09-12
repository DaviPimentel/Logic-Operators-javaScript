const prompt = require('prompt-sync')()

const x1 = parseInt(prompt('Type X1: '));
console.log(`The typed ages was: ${x1}` )

const x2 = parseInt(prompt('Type X2: '));
console.log(`The typed meses was: ${x2}` )

const y1 = parseInt(prompt('Type Y1: '));
console.log(`The typed days was: ${y1}` )

const y2 = parseInt(prompt('Type Y2: '));
console.log(`The typed days was: ${y2}` )

const d = Math.pow(x2-x1,2) + Math.pow(y2-y1,2)

const dTotal = Math.sqrt(d)
console.log(`\nResultado: ${dTotal}`,Math.round(dTotal))



