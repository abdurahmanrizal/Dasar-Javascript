// jurangan angkot menggunakan if else

var jmlAngkot = 20;
var angkotBeroperasi = 20;
var noAngkot = 1;

// menggunakan metode perulangan while

// while (noAngkot <= jmlAngkot) {
//   if (noAngkot <= angkotBeroperasi) {
//     console.log("Angkot no " + noAngkot + " beroperasi dengan baik");
//   } else {
//     console.log("Angkot no " + noAngkot + " sedang tidak beroperasi");
//   }
//   noAngkot++;
// }

// menggunakan metode perulangan for

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot no " + noAngkot + " beroperasi dengan baik");
  } else {
    console.log("Angkot no " + noAngkot + " sedang tidak beroperasi");
  }
}
