var s = [];
var h = "";
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < i; j++) {
//     h = "*****";
//   }
//   s += h;
//   s += "\n";
// }

// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < i + 1; j++) {
//     s += "* \t";
//   }
//   s += "=> " + j;
//   s += "\n";
// }

// for (var i = 10; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     s += "* \t";
//   }
//   s += "=> " + j;
//   s += "\n";
// }
// for (var i = 1; i <= 10; i++) {
//   for (var j = 0; j < 5; j++) {
//     if (i % 2 == 0) {
//       s += " #";
//     } else {
//       s += "# ";
//     }
//   }
//   s += "\n";
// }

// segitiga pascal

for (var i = 0; i < 5; i++) {
  s[i] = new Array(i + 1);

  for (var j = 0; j < i + 1; j++) {
    if (j === 0 || j === i) {
      s[i][j] = 1;
    } else {
      s[i][j] = s[i - 1][j - 1] + s[i - 1][j];
    }
  }
}
console.log(s);
