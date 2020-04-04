// user menginput suit contoh: gajah, semut, atau orang
var help = true;

while (help) {
  var input = prompt(
    "Masukkan pilihan suit : \n contoh: gajah, semut ataut orang"
  );
  // hasil inputan user di adu dengan komputer
  var rand = Math.random();

  var comp = "";
  if (rand < 0.34) {
    comp = "gajah";
  } else if (rand >= 0.34 && rand < 0.67) {
    comp = "semut";
  } else {
    comp = "orang";
  }
  // rule permainan suit
  var result = "";

  if (input === comp) {
    result = "SERI !";
  } else if (input !== null) {
    if (input === "gajah") {
      result = comp === "semut" ? "KALAH !" : "MENANG !";
    } else if (input === "semut") {
      result = comp === "gajah" ? "MENANG !" : "KALAH !";
    } else if (input === "orang") {
      result = comp === "semut" ? "MENANG!" : "KALAH !";
    } else {
      result = "Inputan yang anda masukkan salah!";
    }
    // output
    alert(
      "Pilihan anda : " +
        input +
        " dan pilihan komputer : " +
        comp +
        "\n Maka hasilnya adalah anda " +
        result
    );
    help = confirm("Mainkan lagi?");
  } else {
    // output
    alert("Anda wajib memasukkan inputan, tidak boleh kosong");
    help = confirm("Mainkan lagi?");
  }
}
