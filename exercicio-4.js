const prompt = require('prompt-sync')();

const a = parseInt(prompt('Type A: '))
console.log(`Typed A: ${a}` )

const b = parseInt(prompt('Type B: '))
console.log(`Typed B: ${b}` )

const c = parseInt(prompt('Type C: '))
console.log(`Typed C: ${c}` )

const r = Math.pow(a+b,2)
console.log(`\nR: ${r}`)

const s = Math.pow(b+c,2)
console.log(`\nS: ${s}`)

const d = (r+s) / 2

console.log(`\nResultado: ${d}`,Math.round(d))




