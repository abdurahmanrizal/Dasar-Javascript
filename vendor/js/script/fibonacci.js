//  looping fibonacci

// function fibonacci(n) {
//   var angkaSebelum = 0,
//     angkaSekarang = 1,
//     tmp,
//     hasil;
//   for (var i = 1; i <= n; i++) {
//     tmp = angkaSekarang + angkaSebelum;
//     if (i === 1 || i === 2) {
//       console.log(tmp);
//     } else {
//       angkaSebelum = angkaSekarang;
//       angkaSekarang = tmp;
//       tmp = angkaSekarang + angkaSebelum;
//       console.log(tmp);
//     }
//   }
// }

// rekursif fibonacci

var input = parseInt(prompt("Masukkan angka:"));
var j = 0;
function fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
for (var i = 1; i <= input; i++) {
  console.log(fibonacci(j));
  j++;
}
