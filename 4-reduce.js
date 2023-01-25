// fungsi reduce() >> mereduce (mengurangi) array ke value tunggal. Ia menjalankan fungsi untuk tiap value di dalam array dan value yang direturn disimpan pada suatu accumulator. Ia tidak mengubah array aslinya.

const numbers = [1, 8, 7, 4, 9, 11];
let sum = numbers.reduce((total, value) => total + value);
console.log(sum);