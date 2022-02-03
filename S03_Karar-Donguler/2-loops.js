// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************
// for (let i = 1; i <= 10; i++) {
//   console.log("Merhaba:", i);
// }

// //?Ornek: 1 den n kadar toplama yapan kodu yazınız.

// const n = +prompt("N sayisini giriniz:");
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//   toplam += i;
// }
// console.log("TOPLAM =", toplam);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// const sayi = prompt("Pozitif Bir Sayıyı Giriniz:");
// let asal = true;
// for (let i = 2; i < sayi; i++) {
//   if (sayi % i == 0) {
//     asal = false;
//     break;
//   }
// }

// console.log(asal);

//******************** WHILE ******************
// //Ornek1
// let nots = +prompt("0-100 arasında bir not giriniz:");

// while (nots < 0 || nots > 100) {
//   console.error("Not 0-100 arasında olmalıdır");
//   nots = +prompt("0-100 arasında bir not giriniz:");
// }

// console.log("Girdiniz not", nots);

//******************** WHILE ******************
// let notlar;
// do {
//   notlar = +prompt("0-100 arasında bir not giriniz:");
// } while (notlar < 0 || notlar > 100);
// console.log("Girdiniz not", notlar);

//? ODEV1: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

while (true) {
  let grade = prompt("0-100 arasında bir not giriniz:");

  if (grade < 0 || grade > 100) {
    console.error("HATA: Not 0-100 arasında olmalıdır");
  }

  if (grade.toLowerCase() == "q") {
    break;
  }
}

//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.
