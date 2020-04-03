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
  // console.log(comp);
  // rule permainan suit
  var result = "";

  if (input === comp) {
    result = "SERI !";
  } else if (input !== null) {
    if (input === "gajah") {
      if (comp === "semut") {
        result = "KALAH !";
      } else {
        result = "MENANG !";
      }
    } else if (input === "semut") {
      if (comp === "gajah") {
        result = "MENANG !";
      } else {
        result = "KALAH !";
      }
    } else if (input === "orang") {
      if (comp === "semut") {
        result = "MENANG !";
      } else {
        result = "KALAH !";
      }
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
