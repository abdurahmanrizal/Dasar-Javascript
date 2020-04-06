// object literal
var mhs1 = {
  nama: "Abdurahman",
  nim: "A11.2015.09266",
  email: "abdurahmanrizal1@gmail.com",
  jurusan: "Teknik Informatika",
};

// object declaration
function createObjectMhs(nama, nim, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

// constructor
function Mahasiswa(nama, nim, email, jurusan) {
  this.nama = nama;
  this.nim = nim;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs2 = new Mahasiswa(
  "Abdurahman",
  "A11.2015.09266",
  "abdurahmanjack@gmail.com",
  "Teknik Informatika"
);
