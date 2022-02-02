// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const sucuk = 100;
const sakiz = 5;
const kola = 10;

let toplamFiyat = sucuk + sakiz + kola;

console.log("TOPLAM =", toplamFiyat);

// Bir arttır
toplamFiyat++;
console.log(toplamFiyat);

// 10 arttır
toplamFiyat += 10;
console.log(toplamFiyat);

//? + operatörü String Concatination işlemi de yapar.
const ad = "ahmet";
const soyAd = "Can";
console.log(ad + " " + soyAd);

//* String Concatination
const s1 = 5,
  s2 = "3";
console.log(s1 + s2);

//* Çıkarma yaptı (string değerleri number gibi kabul etti)
console.log(s1 - s2);

const s3 = "5",
  s4 = "iki";
const sonuc = s3 - s4;
console.log(sonuc, typeof sonuc); //!Hata NaN: Not a Number

//* Bir islemin sonucunun NaN olup olmadığını anlamak için isNaN() fonksyinu kullanılabilir.
console.log(isNaN(sonuc));

//? Ornek
//-----------------------

const dogumTarihi = 1990;
const isim = "Muhammet";

console.log(isim, 2022 - dogumTarihi, "yaşındadır");
console.log(isim + " " + (2022 - dogumTarihi) + " yaşındadır");

//! ================== Template Litetrals ====================
const cumle = `Merhaba Javascript`;
console.log(cumle);

console.log(`BILGI: ${isim}, ${2022 - dogumTarihi}
 yaşındadır`);

//?Templtate literal ile string ifadeler ile değişkenler birleştirilebilir ve aynı zamanda sonra kullanım için başka bir değişkene aktarılabilr.
const islem = `BILGI: ${isim} ${2022 - dogumTarihi}
 yaşındadır`;
console.log(islem);

//* ÇAPRMA VE ÜS ALMA
//*--------------------------------------
const pi = 3.14;
const r = 3;
const alan = pi * r ** 2; //?Us alma (**)
const cevre = 2 * pi * r;
console.log(`ÇEVRE: ${cevre} ALAN:${alan}`);

//* ARTTIRMA VE AZALTMA
//*--------------------------------------
let a = 5;
a++; // a=6
let b = a++; //b=6, a=7
console.log(a); // 7
console.log(b); // 6

let c = 3;
c++; // c=4
let d = ++c; //d=5, c=5
console.log(c); // 5
console.log(d); // 5

// Ornek: 5 attırma
let yas = 20;
yas += 5;
console.log(yas);

// Ornek: 3 kat alma
yas = yas * 3;
yas *= 3;
console.log(yas);

//* MOD
//*--------------------------------------

const number = 476;
const birler = number % 10;
const onlar = Math.floor(number / 10) % 10;
const yuzler = Math.trunc(number / 100);
console.log("Basamak Toplamları:", birler + onlar + yuzler);

//?Bazı fonksiyonlar
// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const sayi1 = 3;

console.log(sayi1 == 3); //true
console.log(sayi1 == "3"); //true
console.log(sayi1 === "3"); //false

const sayi2 = 5;
console.log(sayi2 != 3);
console.log(sayi2 != 5);
console.log(sayi2 != "5"); //false
console.log(sayi2 !== "5"); //true

console.log(sayi2 > 3);
console.log(sayi2 <= "5");

// * =======================================================
// *                 MANTIKSAL OPERATÖRLER
// * =======================================================

const v1 = true;
const v2 = false;

const v3 = false || 0 || 12.6 || false || false;
console.log(v3); //? 12.6 - ilk gördüğü true değeri alır.

const v5 = false || 0 || undefined || null || NaN;
console.log(v5); //? NaN - en son falsy olan değeri verir.

const v4 = v1 && true && 5;
console.log(v4); //? 5 - en son gördüğü true değeri alır

//! DEĞİL (!)
const v6 = true;
const v7 = !v6;
console.log(v7); //? false

const v8 = 5;
console.log(!v8);

//? TRUE
console.log(Boolean(5));
console.log(Boolean(-5));
console.log(Boolean(-15.5));

//? 5 falsy
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// * =======================================================
// *                      TİP DÖNÜŞÜMLERİ
// * =======================================================

const dolar = "1000";
const tl = "900";
const para = Number(dolar) + Number(tl);
console.log(para, typeof para);

//* ALternatif olarak parseInt kullanılabilir.
const dolarNumber = parseInt(dolar);
console.log(dolarNumber);

console.log(Number("123")); // 123
console.log(Number("12.3")); // 12.3
console.log(Number("")); // 0
console.log(Number(null)); // 0
console.log(Number("0x11")); // 17
console.log(Number("0b101")); // 5
console.log(Number("0o11")); // 9
console.log(Number("sayi")); //NAN

//* -------- NULLISH COLAESCING OPERATOR----------- */
//?  Bir ifadenin null veya undefined olması durumuna göre seçim yapmamızı olanak sağlayan bir operatördür.
const isim1 = null; // ?null
const defaultIsim = "noname";
const islem1 = isim1 ?? defaultIsim;

console.log(islem1.toUpperCase()); //noname veya isim
