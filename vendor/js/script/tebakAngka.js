// user hanya memilih angka 1-10 selain itu FALSE
var loop = true;
var i = 1;
while (loop) {
  var choice = parseInt(prompt("Masukkan angka 1-10 :"));

  var comp = Math.floor(Math.random() * 11);

  var result = "";

  // rule dari permainan tebak angka
  if (choice <= 10) {
    result = choice === comp ? "Tebakan kamu benar!" : "Tebakan kamu salah"; // menggunakan ternary operator
    alert(
      "Tebakan kamu adalah " +
        choice +
        " dan tebakan komputer adalah " +
        comp +
        " \n hasilnya " +
        result
    );
    var helper = i++;
    loop =
      helper < 3
        ? confirm("Tebak lagi?")
        : false +
          alert("Kesempatan anda sudah habis. Terimakasih telah bermain"); // menggunakan ternary operator
  } else {
    alert("Anda hanya boleh memasukkan angka 1 sampai 10 saja");
    loop = confirm("Coba lagi?");
  }
}
