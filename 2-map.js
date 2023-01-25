// fungsi map() >> membuat array baru menggunakan hasil dari fungsi yang dipanggil untuk setiap elemen pada array lain, tanpa mengubah array aslinya

// Contoh
// Ada array: [1,2,3]
// Kita bisa panggil fungsi untuk setiap elemen nya, misal fungsi tambah 1 untuk setiap elemen
// Maka hasilnya: [2,3,4]
// Dan array baru tersebut direturn oleh map() tanpa mengubah array aslinya ([1,2,3])

const mahasiswa = [
  {
    nama: "Tegar",
    kelas: "F"
  },
  {
    nama: "Sharina",
    kelas: "E"
  },
  {
    nama: "Shabiq",
    kelas: "C"
  },
]

console.log(mahasiswa.map(m => m.nama));

// Note : map() membuat array baru, maka menggunakannya tanpa menggunakan return tidak direkomendasikan (anti-pattern)
// Jangan gunakan map() jika tidak akan mereturn array baru, gunakan saja forEach() atau for .. of.
