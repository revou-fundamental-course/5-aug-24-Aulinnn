function hitungBMI() {
    // Ambil nilai input
    const jenisKelamin = document.getElementById('jenis-kelamin').value;
    const beratBadan = parseFloat(document.getElementById('berat-badan').value);
    const tinggiBadan = parseFloat(document.getElementById('tinggi-badan').value) / 100; // Konversi cm ke meter
    const usia = parseInt(document.getElementById('usia').value);

    // Hitung BMI
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);

    // Tampilkan hasil
    let hasil = "BMI Anda: " + bmi.toFixed(2) + "<br>";
    if (bmi < 18.5) {
        hasil += "Anda kekurangan berat badan.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        hasil += "Berat badan Anda ideal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        hasil += "Anda kelebihan berat badan.";
    } else {
        hasil += "Anda obesitas.";
    }

    document.getElementById('hasil').innerHTML = hasil;
}

function reset() {
    document.getElementById('jenis-kelamin').value = "laki-laki";
    document.getElementById('berat-badan').value = "";
    document.getElementById('usia').value = "";
    document.getElementById('tinggi-badan').value = "";
    document.getElementById('hasil').innerHTML = "";
}