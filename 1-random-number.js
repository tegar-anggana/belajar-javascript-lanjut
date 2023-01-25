// Angka random antara 0 - 1, tanpa termasuk 1
let randomNumber = Math.random();
console.log(randomNumber);

// Angka random antara 0 - 9, tinggal dikalikan 10
let angka = Math.random() * 10;
console.log(angka);

// Jika ingin antara 1 - 10, tambahkan juga 1
let angkaRandom = Math.random() * 10 + 1;
console.log(angkaRandom);

// Membulatkan desimal, menggunakan Math.floor()
let randomAngka = Math.floor(Math.random() * 10 + 1);
console.log(randomAngka);

// Angka random antara x dan y
const numberRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numberRandom(5, 15));


