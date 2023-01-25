// fungsi filter() >> membuat array baru yang isinya elemen elemen array yang lolos seleksi / penyaringan dari array aslinya

let numbers = [4, 7, 11, 8, 12, 9];

let filtered = numbers.filter(n => n % 2 === 0);
console.log(filtered)