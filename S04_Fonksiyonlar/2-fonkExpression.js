// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//* Örnek1:
//**********************************************************/
console.log("******** EXPRESSION*******");

// Önce declaration sonra calling
const tekCift = function (sayi) {
  return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
};

console.log(tekCift(5));
console.log(tekCift(2));

//* Örnek2: 3 sayinin en büyüğünü bulan fonks.
//**********************************************************/

// default parameter : yazılmayan parametre için default bir deger atamak mümkündür.
let buyukBul = function (x, y, z = -Number.MAX_VALUE) {
  let enBuyuk;
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > x && y > z) {
    enBuyuk = y;
  } else if (z > x && z > y) {
    enBuyuk = z;
  } else {
    enBuyuk = x;
  }
  return enBuyuk;
};

console.log("En Büyük:" + buyukBul(2, 5, 1));
console.log("En Büyük:" + buyukBul(4, 3, 7));
console.log("En Büyük:" + buyukBul(8, 1, 4));

console.log("En Büyük:" + buyukBul(3, 6));

//* ORNEK3: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//*****************************************************/

const hesapla = function (islem, s1, s2) {
  let sonuc;

  if (islem == "+") {
    sonuc = topla(s1, s2);
  } else if (islem == "-") {
    sonuc = cikar(s1, s2);
  } else if (islem == "*") {
    sonuc = carp(s1, s2);
  } else if (islem == "/") {
    sonuc = bol(s1, s2);
  }
  return sonuc;
};

const topla = function (s1, s2) {
  return s1 + s2;
};
const cikar = function (s1, s2) {
  return s1 - s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};

console.log(hesapla("+", 3, 5));
console.log(hesapla("-", 3, 5));
