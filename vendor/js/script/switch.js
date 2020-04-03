var item = prompt(
  "Masukkan nama makanan / minuman \n (Contoh: nasi, daging, susu, burger, softdrink)"
);

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert(item + " adalah makanan sehat");
    break;
  case "burger":
  case "softdrink":
    alert(item + " adalah makanan tidak sehat");
    break;
  default:
    alert(item + " tidak terdapat pada list yang tersedia");
    break;
}
