function cari() {
  var no_daftar = document.getElementById("no_daftar").value;
  var form = document.getElementById("form");
  if (no_daftar === "") {
    alert("no daftar tidak boleh kosong");
    return;
  }
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var hasil;
      var ditemukan = false;
      for (var i = 0; i < data.length; i++) {
        if (data[i].no_daftar == no_daftar || no_daftar == "") {
          console.log(data[i].no_daftar);
          hasil =
            `<div class="p-8 text-white bg-blue-500 rounded m-3">
<h1 class="text-3xl font-bold mb-6">Hasil Zonasi</h1>
<div class="mb-4">
  <span class="font-bold">no daftar:</span>
  <span>` +
            no_daftar +
            `</span>
</div>
<div class="mb-4">
  <span class="font-bold">Nama:</span>
  <span>` +
            data[i].nama +
            `</span>
</div>
<div class="mb-4">
  
  <span class="font-bold">Asal Sekolah:</span>
  <span>` +
            data[i].asl_skl +
            `</span>
</div>
<div class="mb-4">
  <span class="font-bold">Nama orang tua:</span>
  <span>` +
            data[i].nama_ortu +
            `</span>
</div>
<div class="mt-8 text-center">
  <p>Dengan ini dinyatakan <p class="text-green-800 font-bold text-2xl">Diterima</p> di</p>
  <h2 class="text-2xl font-bold mb-4">SMAN 1 Margaasih</h2>
  <p>Tahun Pelajaran 2023/2024 jalur zonasi</p>
</div>
</div>` +
            `<button id="refresh-btn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Kembali
</button>`;
          ditemukan = true;
        }
      }
      hasil += "</ul>";
      if (ditemukan) {
        document.getElementById("hasil").innerHTML = hasil;
        if (form.style.display === "none") {
          form.style.display = "block";
        } else {
          form.style.display = "none";
        }
        document
          .getElementById("refresh-btn")
          .addEventListener("click", function () {
            location.reload();
          });
      } else {
        document.getElementById("hasil").innerHTML =
          "<p class='text-lg text-red-500 font-bold'>Data tidak ada atau anda tidak diterima, silahkan cek website resmi PPDB, data yang valid ada diwebsite <a class='mr-4 w-20 p-1 h-10 bg-sky-800 rounded hover:bg-sky-700 text-white' href='https://ppdb.jabarprov.go.id/wilayah_ppdb/cadisdik/BANDUNG/info-seleksi/20227907' target='_blank'> PPDB </a></p>";
      }
    }
  };
  xmlhttp.open("GET", "data.json", true);
  xmlhttp.send();
}
