const numbers = [3, 6, 14, 9]
let overTen = numbers.some(num => num > 10)
console.log(overTen); // true

const angka = [3, 6, 14, 9]
let diAtas10 = angka.every(num => num > 10)
console.log(diAtas10); // false