//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================

const diziIsaretliTopla = (dizi) => {
  let sumP = 0,
    sumN = 0;
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] > 0) {
      sumP += dizi[i];
    } else {
      sumN += dizi[i];
    }
  }
  return "Negatiflerin Toplami=" + sumN + " Pozitiflerin Toplami=" + sumP;
};

const koordinatlar = [120, 100, -100, 220, 330, -40];
console.log(diziIsaretliTopla(koordinatlar));

//* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığı varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğu
//*  ana programa döndürecek fonksiyonu yazınız. Eğer o
//* türden bir hayvan yok ise bulunamadığını yazdırsın.
//*--------------------------------------------------------

//* ÖDEV
//*----------------------------------------------------------

const findAnimal = (find, arrays) => {
  let counter = 0;
  for (let i in arrays) {
    if (arrays[i] == find) {
      counter++;
    }
  }
  if (counter == 0) {
    return `Sorry we have not ${find}`;
  } else {
    return `We have ${counter} ${find}`;
  }
};

const animals = [
  "elephant",
  "camel",
  "bird",
  "camel",
  "mouse",
  "bird",
  "mouse",
  "camel",
];

const find = prompt("Please Enter Your Animals").toLowerCase();
console.log(findAnimal(find, animals));

//* ======================================================
//*                   FOR OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
let araclar = ["BMW", "Volvo", "Mini"];
let yazi = "";
for (let arac of araclar) {
  console.log(arac);
  yazi += arac + " "; // arac:  dizinin her bir elemanini temsil etmektedir.
}
console.log(yazi);

//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

//*-------------- ÖRNEK -------------------
const prices = [100, 250, 50, 89];

let s = 0;
prices.forEach((p) => (s += p));
console.log("SUM OF PRICES:", s);

//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.)

//*-------------- ÖRNEK -------------------
let sum = 0;
//* p => prices dizisinin her bir elemanı
//* i => indis
//* arr=> prices dizisidir.

prices.forEach((p, i, arr) => {
  sum += p;
  console.log(`${i}. iteration sum: ${sum}`);
  arr[i] = p + 10; // Diziye yeni değerler atıyoruz.
});
console.log(prices); //[110, 260, 60, 99]

//*-------------- ÖDEV -------------------
//* prices dizisinde her bir fiyata %10 zam yapalım.

//* ======================================================
//*                       MAP METHOD
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisin içerisindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const names = ["Ahmet", "mehmet", "ismet", "SAFFET", "Can", "Canan", "Cavidan"];

const bigNames = names.map((name) => name.toUpperCase());
console.log(bigNames, names);

const bigNames2 = names.map((name, i, arr) => {
  arr[i] = name.toUpperCase();
  return name.toLowerCase();
});
console.log(bigNames2, names);
console.log(names);

//* map() metodundan sonra eğer forEach gibi bir terminal(consumer) işlemi
//* kullanılırsa yazılan ifade bir dizi döndürmemiş olur.
names.map((name) => name.toLowerCase()).forEach((x) => console.log(x));
console.log(names);

//*-------------- ÖDEV -------------------
//* prices dizisindeki ürün fiyatlarinin 250 TL altında olanlarına
//* %10 zam, üstünde olanlarına da %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar aşağıdaki formatta saklanmak isteniyor.
//* 1. ürünün zamlı fiyati 110 TL gibi

//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array'inde fiyatı 250 TL den az olanlari ayri
//* bir diziye saklayalim.

const lessThan250 = prices.filter((p) => p < 250);
console.log(lessThan250, prices);

//* ======================================================
//*                       PIPELINE
//* ======================================================

//* price dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.
prices.filter((p) => p > 90).forEach((x) => console.log(x));

//* price dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.
console.log(prices);
prices
  .filter((x) => x <= 110)
  .map((x) => x * 1.1)
  .forEach((x) => console.log(x));

//*-------------- ÖDEV -------------------
//* salary 4000 $'dan düsük olanlara %50 zam yapmak istiyoruz
//* ve bunu ayri dizi olarak saklamak istiyoruz.
const salaries = [3000, 5000, 4000, 6000, 6500];

//* Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.

//*-------------- ÖRNEK -------------------
//*people dizisinde isimin ilk harfine göre arama yaparak ilgili isimleri listeleyen bir fonksiyon yazınız.
const people = [
  "Baser",
  "Berivan",
  "Mehmet",
  "Mustafa",
  "Mali",
  "Halil",
  "Fatih",
  "Hasret",
  "Fatma",
];

const findNameByFirstLetter = (letter) => {
  const bLetter = letter.toUpperCase();
  people.filter((p) => p.startsWith(bLetter)).forEach((f) => console.log(f));
};

findNameByFirstLetter("b");
findNameByFirstLetter("B");
findNameByFirstLetter("M");

//* ======================================================
//*                       REDUCE METHOD
//* ======================================================

//* salaries toplamini bulunuz.
const sumOfSalaries = salaries.reduce((x, y) => x + y, 0);
console.log(sumOfSalaries);

const sumOfSalaries1 = salaries.reduce((x, y, i) => {
  console.log(`${i} iteration : ${x}`);
  return x + y;
});
console.log(sumOfSalaries1);

//*-------------- ÖDEV -------------------
//* maasi ortalamanin altinda olanlara %20 zam yapalim.
