var sum = 0;
function tambah() {
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var angka = tambah(2, 3, 4, 5, 8);
console.log(angka);
