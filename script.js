
document.getElementById("pesan").textContent = "Hello World";

console.log("Hello World");

document.getElementById("btnNama").addEventListener("click", function () {
    const namaPengguna = prompt("Masukkan nama Anda:", "");

    if (namaPengguna !== null && namaPengguna.trim() !== "") {
        alert("Halo, " + namaPengguna + "!");

        document.getElementById("hasilNama").textContent =
            "Selamat datang, " + namaPengguna + ".";
    } else {
        alert("Nama belum diisi.");

        document.getElementById("hasilNama").textContent =
            "Nama belum diisi atau proses dibatalkan.";
    }
});

function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);

    if (b !== 0) {
        console.log("Pembagian:", a / b);
        console.log("Modulus:", a % b);
    } else {
        console.log("Tidak dapat membagi dengan nol.");
    }
}

document.getElementById("btnOperasi").addEventListener("click", function () {
    const inputA = document.getElementById("angkaA").value;
    const inputB = document.getElementById("angkaB").value;

    const hasil = document.getElementById("hasilOperasi");

    if (inputA.trim() === "" || inputB.trim() === "") {
        hasil.textContent = "Kedua bilangan wajib diisi.";
        return;
    }

    const a = Number(inputA);
    const b = Number(inputB);

    operasiDasar(a, b);

    let teks = "Penjumlahan: " + (a + b)
        + "\nPengurangan: " + (a - b)
        + "\nPerkalian: " + (a * b);

    if (b !== 0) {
        teks += "\nPembagian: " + (a / b)
            + "\nModulus: " + (a % b);
    } else {
        teks += "\nPembagian dan modulus tidak dapat dilakukan karena pembagi nol.";
    }

    hasil.textContent = teks;
});

document.getElementById("btnNilai").addEventListener("click", function () {
    const inputNilai = prompt("Masukkan nilai (0–100):");
    const hasil = document.getElementById("hasilNilai");

    if (
        inputNilai === null ||
        inputNilai.trim() === "" ||
        Number.isNaN(Number(inputNilai)) ||
        Number(inputNilai) < 0 ||
        Number(inputNilai) > 100
    ) {
        alert("Input nilai tidak valid.");
        hasil.textContent = "Input nilai tidak valid.";
    } else if (Number(inputNilai) >= 60) {
        alert("Lulus");
        hasil.textContent = "Nilai " + inputNilai + ": Lulus.";
    } else {
        alert("Belum lulus");
        hasil.textContent = "Nilai " + inputNilai + ": Belum lulus.";
    }
});

document.getElementById("btnPilihan").addEventListener("click", function () {
    const pilihan = document.getElementById("pilihan").value;
    const hasil = document.getElementById("hasilPilihan");

    switch (pilihan) {
        case "1":
            hasil.textContent = "Bilangan satu";
            break;
        case "2":
            hasil.textContent = "Bilangan dua";
            break;
        case "3":
            hasil.textContent = "Bilangan tiga";
            break;
        case "4":
            hasil.textContent = "Bilangan empat";
            break;
        case "5":
            hasil.textContent = "Bilangan lima";
            break;
        default:
            hasil.textContent = "Pilihan tidak tersedia";
    }
});

document.getElementById("btnBilangan").addEventListener("click", function () {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
});

function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

document.getElementById("btnHijau").addEventListener("click", function () {
    ubahWarnaLatar("lightgreen");
});

document.getElementById("btnPutih").addEventListener("click", function () {
    ubahWarnaLatar("white");
});

document.getElementById("btnKuning").addEventListener("click", function () {
    ubahWarnaLatar("lightyellow");
});

const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach(function (item) {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach(function (item) {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}

document.getElementById("btnHitungNilai").addEventListener("click", function () {
    const tugasInput = document.getElementById("tugas").value;
    const utsInput = document.getElementById("uts").value;
    const uasInput = document.getElementById("uas").value;
    const hasil = document.getElementById("hasilAkhir");

    if (tugasInput === "" || utsInput === "" || uasInput === "") {
        hasil.textContent = "Semua nilai wajib diisi.";
        return;
    }

    const tugas = Number(tugasInput);
    const uts = Number(utsInput);
    const uas = Number(uasInput);

    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.textContent = "Nilai harus berada antara 0 sampai 100.";
        return;
    }

    const nilaiAkhir = (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);

    let grade;

    if (nilaiAkhir >= 80) {
        grade = "A";
    } else if (nilaiAkhir >= 70) {
        grade = "B";
    } else if (nilaiAkhir >= 60) {
        grade = "C";
    } else if (nilaiAkhir >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    const status = nilaiAkhir >= 60 ? "Lulus" : "Tidak lulus";

    hasil.textContent =
        "Nilai Akhir: " + nilaiAkhir.toFixed(2) +
        " | Grade: " + grade +
        " | Status: " + status;
});

document.getElementById("btnPerkalian").addEventListener("click", function () {
    let teks = "";

    for (let i = 1; i <= 10; i++) {
        teks += "7 x " + i + " = " + (7 * i) + "\n";
    }

    document.getElementById("hasilPerkalian").textContent = teks;
});

function cekGenap(angka) {
    return angka % 2 === 0;
}

document.getElementById("btnCekGenap").addEventListener("click", function () {
    const input = document.getElementById("cekAngka").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilGenap");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (cekGenap(angka)) {
        hasil.textContent = angka + " adalah bilangan genap.";
    } else {
        hasil.textContent = angka + " adalah bilangan ganjil.";
    }
});

document.getElementById("btnValidasi").addEventListener("click", function () {
    const nama = document.getElementById("namaForm").value.trim();

    if (nama === "") {
        document.getElementById("hasilValidasi").textContent =
            "Nama wajib diisi.";
    } else {
        document.getElementById("hasilValidasi").textContent =
            "Form berhasil dikirim. Halo, " + nama + "!";
    }
});

function hitungTotal() {
    let total = 0;

    document.querySelectorAll(".menu").forEach(function (item) {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}

document.querySelectorAll(".menu").forEach(function (item) {
    item.addEventListener("change", hitungTotal);
});

document.getElementById("btnSembunyikan").addEventListener("click", function () {
    document.getElementById("teksContoh").style.display = "none";
});

document.getElementById("btnTampilkan").addEventListener("click", function () {
    document.getElementById("teksContoh").style.display = "block";
});
