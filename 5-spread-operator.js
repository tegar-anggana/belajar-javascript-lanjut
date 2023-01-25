function sum(x, y, z) {
  return x + y + z;
}

// const numbers = [1, 2, 3];
const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); // 6

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, "abc", ...arr2];
console.log(arr3); // [ 1, 2, 'abc', 3, 4 ]

const nama = "Hello";
const nameArr = [...nama];
console.log(nameArr); // [ 'H', 'e', 'l', 'l', 'o' ]

// Mengcopy array

// Cara salah
const original = [1, 2, 3, 4];
const copy = original;
copy.push(100);
console.log(original); // [1,2,3,4,100]
console.log(copy); // [1,2,3,4,100]
// Karna array merupakan tipe data reference, jadi const copy = original, baik copy maupun original merujuk ke array yang sama.

// Cara benar
const ori = [1, 2, 3, 4];
const kopi = [...ori];
kopi.push(100);
console.log(ori); // [1,2,3,4]
console.log(kopi); // [1,2,3,4,100]

const arrayBanyak = [1, 2, 3, [1, 2, [12]]];
const arrayBanyakCopy = [...arrayBanyak];
console.log(arrayBanyakCopy)
console.log(arrayBanyakCopy[3][2][0]);

// Mengcopy objek
const person = { nama: "Tegar", kelas: "F" }
const clonedPerson = { ...person }
console.log(clonedPerson); // { nama: 'Tegar', kelas: 'F' }

// Rest operator
function jumlahkan(...args) {
  return args.reduce((prev, cur) => {
    return prev + cur;
  })
}

console.log(jumlahkan(1, 2, 3)); // 6
console.log(jumlahkan(1, 2, 3, 4)); // 10