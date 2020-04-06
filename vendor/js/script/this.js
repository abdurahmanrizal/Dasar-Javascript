// cara 1 - menggunakan function declaration

// var a = 10;
// function halo() {
//   console.log(this.a);
//   console.log("Halo");
// }
// this.halo();

// this pada function declaration adalah sebagai window variabel global

// cara 2 - menggunakan object literal

// var obj = {};
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };
// obj.halo();

// this pada object literal adalah mengembalikan object yang bersangkutan

//  cara 3 - menggunakan constructor

function Halo() {
  console.log(this);
  console.log("halo");
}
var obj1 = new Halo();
var obj2 = new Halo();

// this pada constructor, mengembalikan membuat object yang baru
