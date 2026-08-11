// Tugas 04 — Konversi Suhu
// Buat fungsi konversi yang ME-RETURN hasil, lalu panggil beberapa kali.

// TODO: fungsi celsiusToFahrenheit(celsius)
function keFahrenheit(c) {
  return c * 9 / 5 + 32;
}

// TODO: fungsi celsiusToReamur(celsius)
function keReamur(c){
    return c * 4 / 5;
}

// TODO: panggil kedua fungsi dengan suhu berbeda dan tampilkan hasilnya
console.log("25°C = " + keFahrenheit(25) + "°F");
console.log("25°C = " + keReamur(25) + "°R");
console.log("100°C = " + keFahrenheit(100) + "°F");
console.log("100°C = " + keReamur(100) + "°R");
