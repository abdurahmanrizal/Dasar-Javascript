// Latihan soal tentang pengkondisian js

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot no. " + noAngkot + " beroperasi dengan baik.");
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log("Angkot no. " + noAngkot + " sedang lembur.");
  } else {
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi.");
  }
}
