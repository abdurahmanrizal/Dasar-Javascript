// looping 10-1

function cetakAngka(n) {
  //   for (var i = n; i >= 1; i--) {
  //     console.log(i);
  //   }
  var i = 1;
  while (n >= i) {
    console.log(n);
    n--;
  }
}

// rekursif menggantikan looping

// function cetakAngka(n) {
//   if (n === 0) return;
//   console.log(n);
//   return cetakAngka(n - 1);
// }

cetakAngka(5);
