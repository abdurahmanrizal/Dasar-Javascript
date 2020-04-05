// var myArr = ["teks", 2, false, [4, 5, 6]];

// for (var i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// method join pada javascript
var arr = ["Abdurahman", "Rizal", "Google"];

// method push digunakan untuk menambahkan elemen pada index terakhir array di javascript
arr.push("Tokopedia", "Azure");

// method pop digunakan untuk menghapus elemen terakhir pada array di javascript
arr.pop();

// method shift digunakan untuk menghapus elemen pertama pada array di javascript
arr.shift();

// method unshift digunakan untuk menambahkan element pada index pertama array di javascript
arr.unshift("Jack");

// method join digunakan untuk menggabungkan seluruh isi array pada javascript
console.log(arr.join(" - "));

// method splice pada javascript splice (indexAwal, mauBerapaElementYangDihapus, elemenTambah)
var arr1 = ["Abdurahman", "Annisa", "Dono"];
arr1.splice(1, 0, "Anissa Pagih");

// method slice pada javascript
var arr2 = arr1.slice(1, 3);
console.log(arr1.join(" - "));
console.log(arr2.join(" - "));

// method forEach pada javascript (tidak mengembalikan array)
var nama = ["Abdurahman", "Rahman", "Rizal"];
nama.forEach(function (e, i) {
  console.log("Nama ke - " + (i + 1) + " adalah " + e);
});

// method map pada javascript (mengembalikan nilai array)
var angka = [1, 3, 4, 6, 9];
var angka2 = angka.map(function (e) {
  //   console.log(e);
  return e;
});
console.log(angka2.join(" - "));

// method sort untuk mengurutkan string atau angka
var number = [1, 10, 9, 4, 2, 3];
// number.sort(function (a, b) {
//   return a - b;
// });

// simple syntax

number.sort((a, b) => a - b);

console.log(number.join(" - "));

// method filter (mengembalikan array) & find (tidak mengembalikan array / mendapatkan satu saja yang ditemukan pertama pada array)

var numbers = [1, 10, 9, 4, 2, 3, 5, 8, 7];

var numbers1 = numbers.filter(function (e) {
  // mengembalikan nilai array
  return e > 4;
});

var numbers2 = numbers.find(function (e) {
  // mengembalikan satu nilai
  return e > 7;
});

numbers1.sort((a, b) => a - b);

console.log(numbers1.join(" - "));
console.log(numbers2);
