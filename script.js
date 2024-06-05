const barang = [
  { kode: "001", nama: "A", harga: 10000 },
  { kode: "002", nama: "B", harga: 20000 },
  { kode: "003", nama: "C", harga: 30000 },
];

function prosesTransaksi() {
  const kodeBarang = document.getElementById("kodeBarang").value;
  const jumlahBarang = parseInt(document.getElementById("jumlahBarang").value);
  const barangTerpilih = barang.find((item) => item.kode === kodeBarang);

  if (!barangTerpilih) {
    alert("barnag tidak tersedia");
    return;
  }

  const totalHarga = barangTerpilih.harga * jumlahBarang;
  alert(`total pembayaran adalah : Rp${totalHarga}`);
  const uangDibayar = parseInt(prompt("masukkan uadng user :"));

  if (isNaN(uangDibayar) || uangDibayar < totalHarga) {
    alert("uang kurang");
    return;
  }

  const kembalian = uangDibayar - totalHarga;
  alert(`total kembalian anda adalah : Rp${kembalian}`);
}
