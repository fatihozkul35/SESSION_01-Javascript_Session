// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");
//* Örnek1:
//*************************************************************/
const topla1 = (a, b) => a + b; // Arrow fonk tanimlamasi

console.log(topla1(5, 2)); // invoke
console.log(topla1(3, 10)); // invoke

//* Örnek2: Us Al
//**********************************************************

const usAl = (t, u) => t ** u;
console.log("US:", usAl(2, 3));

//* Örnek3:
//*************************************************************/
const ciftMi = (sayi) => (sayi % 2 == 0 ? "çift" : "tek");

console.log(ciftMi(5));
console.log(ciftMi(2));

// * Ornek4: Menü
// ! Ok fonksiyonunda birden fazla ifade var ise fonksiyonda suslu parantez kullanmalıyız.
const menu = () => {
  console.log("===============================");
  console.log("      JAVASCRIPT DERSI         ");
  console.log("===============================");
};

menu();

//* Ornek5: Bilgi Ver fonksiyonu
//************************************************************/

// 1.YÖNTEM
const bilgiVer = (ad, soyad, dogum) => {
  const bilgi = `Adim ${ad}, Soyadim ${soyad} ve yasim ${2022 - dogum}`;
  return bilgi;
};

// 2.YÖNTEM
const bilgiVer1 = (ad, soyad, dogum) =>
  `Adim ${ad}, Soyadim ${soyad} ve yasim ${2022 - dogum}`;

console.log(bilgiVer1("Mehmet", "Cakmak", 1989));

//* ORNEK6: Silindirin hacmini hesaplayan bir fonksiyon yaziniz.
//*************************************************************/
const r = prompt("Yaricapi giriniz:");
const h = prompt("Yukseklik giriniz:");

const hacimHesapla = (r, h) => Math.PI * r * r * h;
console.log("Silindir Hacmi:", Math.round(hacimHesapla(r, h)));

//* toFixed: Virgulden sonraki basamak sayisini belirler.
console.log("Silindir Hacmi:" + hacimHesapla(r, h).toFixed(2));
