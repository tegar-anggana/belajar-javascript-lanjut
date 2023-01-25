// Promise Object
// Merepresentasikan:
// - kejadian berhasil atau gagal dari suatu operasi asynchronous
// - value yang dihasilkan.

// Promise dapat berada dalam 3 keadaan:
// - Pending
// - Resolved
// - Rejected

// Ketika promise nya pending, JavaScript tetap melanjutkan eksekusi kode. Dengan ini, promise atau value yang sedang kita tunggu, tidak akan menyebabkan program freeze.
// Pada akhirnya, promise tersebut antara dipenuhi (resolved) atau ditolak (rejected). Kemudian, JavaScript akan kembali ke kode tersebut untuk menjalankan operasi yang bersangkutan.

// Bentuk Dasar Promise
let myPromise = new Promise((resolve, reject) => {
  // Tempat eksekusi operasi asinkronus
  // contoh : mengambil data dari sumber lain, mendownload file, dan hal lain yang memakan waktu tidak tentu

  // Kemudian, kita tentukan apakah perlu dipenuhi atau ditolak berdasarkan kesuksesan atau kegagalan dari operasi asinkronus nya
  if (true) {
    resolve("SUKSES")
  } else {
    reject("GAGAL")
  }
});

// Setelah mengkonstruksi Promise, kita eksekusi promise nya
myPromise
  .then(success => {
    // ...
  })
  .catch(failure => {
    // ...
  })

// .then untuk mencari tahu apakah promise memasuki keadaan terpenuhi (resolved)
// .then menerima fungsi yang dapat menerima resolved value dari method resolve(), yang kemudian kita bisa lakukan sesuatu dengan value tersebut

// .catch untuk mencari tahu apakah promise memasuki keadaan ditolak (rejected)
// .catch juga menerima fungsi yang dapat menerima error dari method reject().