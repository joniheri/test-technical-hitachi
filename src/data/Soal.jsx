export const dataSoal = [
  {
    id: `1`,
    patchUrl: `/test1`,
    title: `Jumlah Pasangan Terkecil`,
    descriptionSoal: `Diketahui input berisi array dengan panjang genap dan berisi angka (diurutkan terlebih dahulu). Buatlah grup dari angka-angka tersebut menjadi berpasangan seperti (a1,b1), (a2,b2),...(an,bn) yang membuat jumlah dari angka terkecil pasangan-pasangan tersebut (ai,bi) untuk semua i dari 1. 
      
contoh input: [1,4,3,2],

penjelasan: n adalah 2, dan jumlah maksimal dari pasangan-pasangan adalah 4 = min(1,2) + min(3,4) catatan: - panjang array maksimal dari 1 sampai 10000 - semua angka didalam array antara -1000, 10000`,
  },
  {
    id: "2",
    patchUrl: `/test2`,
    title: `Kata Palindromik`,
    descriptionSoal: `Diketahui inputan berupa string, tugas kamu adalah mencari berapa banyak substring palindromik dari string tersebut. Kata Palindromik adalah kata yang di bolak balik memiliki susunan / pengucapan yang sama.
Contoh:
•  Katak dibalikan tetap menjadi katak
Lengkapi tubuh fungsi:
//contoh input: "aaa" 
output: 6 penjelasan: 6 kata palindromik: "a", "a", "a", "aa", "aa", "aaa"

Contoh
• substring dengan awal yang berbeda atau akhir yang berbeda dihitung sebagai substring yang berbeda juga meskipun menjadi substring yang sama dengan sebelumnya / yang lain
• panjang input string <= 1000`,
  },
  {
    id: "3",
    patchUrl: `/test3`,
    title: `Kombinasi Nomor Telepon`,
    descriptionSoal: `Diketahui input berupa string angka, output berupa semua kemungkinan pasangan huruf/angka dari inputan tersebut.
      0 = ' '
      1 = ' '
      2 = a,b,c
      3 = d,e,f
      4 = g,h,i
      5 = j,k,l
      6 = m,n,o
      7 = p,q,r,s
      8 = t,u,v
      9 = w,x,y,z
      Apabila angka tidak ajaib, proses diatas akan terus berulang dan tidak akan mencapai hasil akhir: 1.
      Lengkapi tubuh fungsi
      // Contoh: 
      input: "23" 
      output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`,
  },
];
