// Tugas 02 — Cek Kelulusan
// Tentukan status kelulusan dan grade dari sebuah nilai.

const nilai = 69; // TODO: coba ganti-ganti nilai ini untuk menguji semua kondisi
let pridikat
let status

// TODO: if-else untuk status kelulusan (lulus jika nilai >= 75)
if (nilai >= 90) {
    pridikat ="A";
} else if (nilai >= 80){
    pridikat ="B";
} else if (nilai >= 70){
    pridikat ="C";
} else if (nilai >= 60){
    pridikat ="D";
} else {
    pridikat= "E";
}

if (nilai >= 75) {
    status ="Lulus";
} else {
    status ="Tidak Lulus";
}

// TODO: if-else bertingkat untuk grade A sampai E
console.log(`Nilai: ${nilai}`);
console.log(`Predikat: ${pridikat}`);
console.log(`Status: ${status}`)