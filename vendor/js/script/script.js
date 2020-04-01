// pada javascript terdapat 3 popup box antara lain :
// 1. alert
// 2. prompt
// 3. confirm

alert("Selamat Datang..");

var lagi = true;

while (lagi === true) {
  var nama = prompt("Masukkan nama");
  console.log(nama);
  if (nama === null) {
    lagi = false;
  } else {
    if (nama === "felly") {
      lagi = false;
    } else {
      alert("Selamat Datang " + nama);
      lagi = confirm("Mau coba lagi?");
    }
  }
}

alert("Terimakasih");
