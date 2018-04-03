var tanggal = 20; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 6;// assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1996; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var bulanResult;

switch (bulan) {
  case 1: { bulanResult = 'Januari'; break;}
  case 2: { bulanResult = 'Februari'; break;}
  case 3: { bulanResult = 'Maret'; break;}
  case 4: { bulanResult = 'April'; break;}
  case 5: { bulanResult = 'Mei'; break;}
  case 6: { bulanResult = 'Juni'; break;}
  case 7: { bulanResult = 'Juli'; break;}
  case 8: { bulanResult = 'Agustus'; break;}
  case 9: { bulanResult = 'September'; break;}
  case 10: { bulanResult = 'Oktober'; break;}
  case 11: { bulanResult = 'November'; break;}
  case 12: { bulanResult = 'Desember'; break;}
}

console.log(tanggal+' '+bulanResult+' '+tahun);


