// user hanya memilih angka 1-10 selain itu FALSE
var loop = true;
var i = 1;
while (loop) {
  var choice = parseInt(prompt("Masukkan angka 1-10 :"));

  var comp = Math.floor(Math.random() * 11);

  var result = "";

  // rule dari permainan tebak angka
  if (choice <= 10) {
    if (choice === comp) {
      result = "Tebakan kamu benar!";
    } else {
      result = "Tebakan kamu salah!";
    }
    alert(
      "Tebakan kamu adalah " +
        choice +
        " dan tebakan komputer adalah " +
        comp +
        " \n hasilnya " +
        result
    );
    var helper = i++;
    if (helper < 3) {
      loop = confirm("Tebak lagi?");
    } else {
      alert("Kesempatan anda sudah habis. Terimakasih telah bermain");
      loop = false;
    }
    console.log(helper);
  } else {
    alert("Anda hanya boleh memasukkan angka 1 sampai 10 saja");
    loop = confirm("Coba lagi?");
  }
}
