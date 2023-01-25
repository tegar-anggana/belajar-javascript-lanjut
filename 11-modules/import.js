// Module
// Dengan modules kita bisa memecah kode ke dalam files terpisah.
// Ini untuk membuat kodenya bersih dan terorganisir

// Module bisa mengekspor kode dalam beberapa cara dan ini mempengaruhi cara file lain mengimpor nya

// import hello from "./folder/ekspor";
// hello("John")

// karena default export, kita bisa beri nama sesuai keinginan:
// import hi from "./folder/ekspor";
// hi("John")

// export non default
// import { nama, emoji } from "./folder/ekspor";
// console.log(emoji)

// me-rename
import hi, { nama as n, emoji as e } from "./folder/ekspor";

console.log(e);

// Untuk membuat semua ini bekerja, perlu menambah type="module" di script html:
{/* <script type="module" src="main.js"></script> */ }