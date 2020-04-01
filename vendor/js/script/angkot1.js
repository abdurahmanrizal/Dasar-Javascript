var angkot = 1;
while (angkot <= 10) {
  var result = confirm("Beroperasi tidak?");
  if (result === true) {
    console.log("Angkot No. " + angkot + " beroperasi dengan baik");
  } else {
    console.log("Angkot No. " + angkot + " beroperasi mengalami kendala");
  }
  angkot++;
}
