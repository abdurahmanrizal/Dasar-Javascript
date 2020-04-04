// var sisiKubusPertama = 8;
// var sisiKubusKedua = 3;

// alert(
//   "Hasil dari penjumlah dua volume kubur dengan sisi kubus pertama : " +
//     sisiKubusPertama +
//     " dan sisi kubus kedua : " +
//     sisiKubusKedua +
//     " = " +
//     jumlahVolumeKubus(sisiKubusPertama, sisiKubusKedua)
// );
// // function declaration
// function jumlahVolumeKubus(a, b) {
//   var totalVolume = a * a * a + b * b * b;
//   return totalVolume;
// }

// function expression
var total = function(a, b) {
  return a * a * a + b * b * b;
};

console.log(total(8, 3));
console.log(total(11, 15));
