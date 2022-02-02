// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!------------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
// console.log("-------------------------------------");
// console.log(" ***** 4 Islem Hesap Makinasi ****** ");
// console.log("-------------------------------------");
// const s1 = Number(prompt("1.Sayiyi Giriniz:"));
// const islem = prompt("Islemi giriniz: +,-,*, /");
// const s2 = +prompt("2.Sayiyi Giriniz:");

// //? prompt fonksionu Default olarak string veri tipini kullanır.
// //!Number yerine prompt un önüne + konularak da çevrim yapılabilir.
// let sonuc = 0;

// if (islem == "+") {
//   sonuc = s1 + s2;
// } else if (islem == "-") {
//   sonuc = s1 - s2;
// } else if (islem == "*") {
//   sonuc = s1 * s2;
// } else if (islem == "/") {
//   sonuc = s1 / s2;
// } else {
//   alert("Yanlış islem sectiniz.");
//   5;
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

// // ÖRNEK
// const age = 20;
// const gender = "erkek";
// const healt = true;

// if (age >= 18 && gender == "erkek" && healt) {
//   console.log("Askerlik Yapmalı");
// } else {
//   console.log("Askerlik Yapması gerekmez");
// }

//*********************** SWITCH_CASE ------------------------
console.log("-------------------------------------");
console.log(" ***** 4 Islem Hesap Makinasi ****** ");
console.log("-------------------------------------");
// const s1 = Number(prompt("1.Sayiyi Giriniz:"));
// const islem = prompt("Islemi giriniz: +,-,*, /");
// const s2 = +prompt("2.Sayiyi Giriniz:");
// let sonuc = 0;
// switch (islem) {
//   case "+":
//     sonuc = s1 + s2;
//     5;
//     break;
//   case "-":
//     sonuc = s1 - s2;
//     break;
//   case "*":
//     sonuc = s1 * s2;
//     break;
//   case "/":
//     sonuc = s1 / s2;
//     break;
//   default:
//     alert("Yanlıs islem girisi");
//     break;
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

//*********************** TERNARY ------------------------
// Ornek
const maas = Number(prompt("Maasinizi giriniz"));
const asgariUcret = 4250;
const zamliMaas = maas <= asgariUcret ? maas * 1.25 : maas * 1.1;
console.log("NORMAL MAAS:", maas, "ZAMLI MAAS:", zamliMaas);

//Ornek
const debt = Number(prompt("Borcunuzu giriniz"));
const salary = Number(prompt("Maasinizi giriniz"));
const credibility = salary - debt >= 5000 ? "OK 🥳" : "FAIL😡";

console.log(credibility);
