var penumpang = [];
// fungsi tambah penumpang

var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      // jika terdapat kursi yang kosong maka penumpang akan duduk di kursi yang kosong
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        // jika terdapat nama penumpang yang sama maka muncul pesan
        console.log(namaPenumpang + " sudah berada didalam angkot");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // jika kursi telah penuh semua, maka penumpang akan duduk di kursi yang selanjutnya
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

function hapusPenumpang(namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    // jika angkot kosong maka tidak ada yang turun
    console.log("Angkot kosong");
    return penumpang;
  } else {
    //   jika angkot tidak kosong
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (penumpang.indexOf(namaPenumpang) == -1) {
        console.log(namaPenumpang + " tidak ada di dalam angkot.");
        return penumpang;
      }
    }
  }
}

console.log(penumpang);
