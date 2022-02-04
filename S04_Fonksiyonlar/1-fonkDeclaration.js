// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//* Örnek1:
//****************************************************************/
//Fonksiyonun tanımlanması
function yazdir() {
  console.log("HASAN");
}

yazdir(); // Call veya invoke
yazdir(); //call

//* Örnek2: Parametreli Fonksiyon
//***************************************************************/

//Fonksiyonun tanımlanması
function yazdirAd(ad, soyad) {
  console.log(ad, soyad);
}

yazdirAd("Mehmet", "Akkoc");
yazdirAd("Mustafa", "The Dark");

console.log(typeof yazdirAd);

//* Örnek3: Parametreli, Dönüş değerli
//***************************************************************/
// declaration
function yasHesapla(dogumTarihi, ad) {
  return `${ad} ${new Date().getFullYear() - dogumTarihi} yasindadir`;
}

//calling
const bilgi = yasHesapla(1990, "Mehmet");
console.log(bilgi);

//calling
console.log(yasHesapla(2000, "Mustafa"));

//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Func Declaration yönteminde fonksiyonun tanımlanmadan önce cağrılmasi mümkündür.

console.log(tekCiftSayi(5));
console.log(tekCiftSayi(2));

function tekCiftSayi(x) {
  return x % 2 == 1 ? `${x} sayisi Tektir` : `${x} sayisi Cifttir`;
}
