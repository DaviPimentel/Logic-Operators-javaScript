const prompt = require('prompt-sync')();

const total_segundos = parseInt(prompt('\nType the seconds: '))
console.log(`The typed ages was: ${total_segundos}` )

const horas = total_segundos /3600

const minutos = total_segundos / 60

const segundos = total_segundos % 60

console.log(`\nHours: ${horas}`,Math.round(horas))
console.log(`\nMinutes: ${minutos}`,Math.round(minutos))
console.log(`\nSeconds: ${segundos}`,Math.round(segundos))



