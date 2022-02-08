// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const yaslar = [30, 54, 22, 18, 5];
console.log(yaslar);
console.log(yaslar.length);

//! 2.Yöntem (Array Constructor)
const cars = new Array("BMW", "Mercedes", "Volvo");
console.log(cars);

const numbers = new Array(3, 2, 0);
console.log(numbers);

//* 10 elemanlı boş biri dizi tanımladık.
const sayilar = new Array(10);
console.log(sayilar);

//* yaslar[4] elemanına veri yazdık.
yaslar[4] = 22;
console.log(yaslar);

//! Hata,const keyword'u ile tanımlanmış bir diziye tamamıyla bir atama yapılmaz.
// yaslar = [1,2,3];
// console.log(yaslar);

const dogum = 1980;

const isimler = [
  "Mehmet",
  "Ozkul",
  "Halo",
  2022 - dogum,
  "Baser",
  "Mustafa",
  true,
  4.5,
  yaslar,
];
console.log(isimler);

//* Dizinin Elemanlarını okuma (indisleme)
//* -------------------------------------------------------------
const yas = isimler[3];
const isim1 = isimler[4];
console.log(yas, isim1);

//* Dizinin Elemanlarına yazma(indisleme)
//* -------------------------------------------------------------
isimler[6] = false;
console.log(isimler);

//* nested erişim
isimler[isimler.length - 1][1] = 44;
console.log(isimler);

//? ===========================================================
//?  DİZİYİ DEĞİŞTİREN (MUTATOR) METOTLAR
//? ===========================================================

const meyveler = ["Elma", "Armut", "Muz", "Kivi"];
//* pop() son elemanı siler ve sildiği elemanı döndürüyor.

const deleted = meyveler.pop();
console.log(meyveler, deleted);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.

const uzunluk = meyveler.push("Cilek", "Karpuz");
console.log(meyveler, uzunluk);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const boyut = meyveler.unshift("Ayva");
console.log(meyveler, boyut);

//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
const silinen = meyveler.shift();
console.log(meyveler, silinen);

//* Dizinin tamamini ters cevirir.
meyveler.reverse();
console.log(meyveler);

//* Diziyi alfabetik olarak siralar.
meyveler.sort();
console.log(meyveler);

const sirala = [3, 5, 1, 10, 22, 55];
sirala.sort();
console.log(sirala);

//* sort metodu diziyi iterasyona uğratır ve prametre olark aldığı arrow fonksiyonunu dizini her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçekeştirir.
sirala.sort((a, b) => a - b);
console.log(sirala);

//* Dizinin indeksi 1 (başlangıç noktasi) ile 2 arasina yeni eleman ekler
meyveler.splice(1, 0, "Erik");
console.log(meyveler);

meyveler.splice(4, 1, "Mango");
console.log(meyveler);

//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "üc", 2, "bes", 5];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes("5")); //false
console.log(sayilar1.includes(5)); //true

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------

//* ilk eslesen indeksi dondurur.
const ikiIndeks = sayilar1.indexOf(2);
console.log("2'nin son indeksi:", sayilar1.lastIndexOf(2)); //5
console.log("2'nin son ilk indeksi:", ikiIndeks); //2

//* Ornek
//*-----------------------------------------------------------
const arananString = prompt("Aranan sayiyi girinz:");
const arananNumber = Number(arananString);

let bulunduMu = false;
if (sayilar1.includes(arananString)) {
  console.log("Arananın String'in indeksi:", sayilar1.indexOf(arananString));
  bulunduMu = true;
}
if (sayilar1.includes(arananNumber)) {
  console.log("Arananın Sayinin indeksi:", sayilar1.indexOf(arananNumber));
  bulunduMu = true;
}

if (!bulunduMu) {
  console.log("Aranan bulunamamıştır");
}

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.

// const sayilar1 = [3, 5, 2, "2", "üc", 2, "bes", 5];

const stringSayilar1 = sayilar1.join(" ");
console.log(stringSayilar1);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

const stringSayilar2 = sayilar1.toString();
console.log(stringSayilar2);

//* slice()
//*-----------------------------------------------------------

const arabalar = ["bmw", "mercedes", "audi", "ferrari", "anadol"];
const sliced1 = arabalar.slice(2);
console.log(sliced1);

const sliced2 = arabalar.slice(1, 3); // start: inclusive, stop :exclusive
console.log(sliced2);

//* concat()
//*-----------------------------------------------------------
const yazilar = ["a", "b", "ad", "soyad", "yas"];
const rakamlar = [3, 5, 1, 4, 7];
const birlesik = yazilar.concat(
  true,
  rakamlar,
  false,
  ["a", "b", "c"],
  [["x", "y", "z"]]
);
console.log(birlesik);
