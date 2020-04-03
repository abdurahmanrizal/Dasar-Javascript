//pengkondisian menggunakan else if

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var angkotLembur = 10;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    if (noAngkot !== angkotLembur) {
      console.log("Angkot no. " + noAngkot + " beroperasi dengan baik.");
    } else {
      console.log("Angkot no. " + noAngkot + " sedang lembur.");
    }
  } else if (noAngkot === angkotLembur) {
    console.log("Angkot no. " + noAngkot + " sedang lembur.");
  } else {
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi.");
  }
}
