//  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================

const yas = 25;
console.log(yas);
console.log(typeof yas);

//! Hata, Constant değeri değiştirilemez.
// yas = 27;

//!Const değişknelerin başlangıç atması zorunludur.
// const pi;

const kelime = "Merhaba";
console.log(kelime);
console.log(typeof kelime);

const isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);

const parite = 1.1;
console.log(parite);
console.log(typeof parite);

const name1 = "Clarusway";
const name2 = "developer";
console.log(name1, name2);

const a = null;
const b = undefined;

console.log(typeof a, typeof b);

// ======================  LET  ========================
// LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
// CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
// CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
// CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil;
dil = "Java";

console.log(dil);

dil = "Javascript";
console.log(dil);

dil = true;
console.log(dil);

dil = null;
console.log(dil, typeof dil);

let sayac = 5;
sayac++;
console.log(sayac);

let sayi = 5;
let sonuc = sayi + 3;
console.log(sonuc);

//! Değişken tanımlama keywordu kullanılmasa bile JS derleyicisi yeni gelen değişkeni otomatik olarak tanımlar.
sayi = "6";
//! bir string ile bir number toplanırsa aslında toplama yapmaz, concatination yapar.
sonuc1 = sayi + 4;
console.log(sonuc1, typeof sonuc1);

sayi = 7;
const sonuc2 = sayi + 8;
console.log(sonuc2);
