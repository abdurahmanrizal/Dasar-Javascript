// looping menggunakan untuk jurangan angkot
var jmlAngkot = 20;
var angkotBeroperasi = 19;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot no " + noAngkot + " beroperasi dengan baik");
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot no " + noAngkot + " sedang tidak beroperasi");
}
