var input = parseInt(prompt("Masukkan Angka :"));

function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}

console.log(faktorial(input));
// faktorial(input);
