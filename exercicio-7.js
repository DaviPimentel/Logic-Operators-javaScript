const prompt = require('prompt-sync')()

const a = parseInt(prompt('Type A: '));
console.log(`The typed A was: ${a}` )

const b = parseInt(prompt('Type B: '));
console.log(`The typed B was: ${b}` )

const c = parseInt(prompt('Type C: '));
console.log(`The typed C was: ${c}` )

const d = parseInt(prompt('Type D: '));
console.log(`The typed D was: ${d}` )

const e = parseInt(prompt('Type E: '));
console.log(`The typed E was: ${e}` )

const f = parseInt(prompt('Type F: '));
console.log(`The typed F was: ${f}` )

const x = ((c * e) - (b * f) / (a * e) - (b * d))
const y = ((a * f) - (c * d) / (a * e) - (b * d))

console.log(`\nX: ${x}`,`\nY: ${y}`)




