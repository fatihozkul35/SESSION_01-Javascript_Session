// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================

console.log("***** STRINGS METHODS ******");

//! Klasik yöntem ile tanımlanan bir String primitive'dir.
const str1 = "Clarusway";
const str2 = " Hello ";
const str3 = "World";
const str4 = str2 + str3;
console.log(str4, typeof str4);

//! String constructor' i ile tanımlananan String non-privitive'dir.
const str5 = new String("Yeni bir String");
console.log(str5, typeof str5); //object

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! nesnelerine dönüştürür. Bu sayede, String nesnelerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur.Ayrıca 2 tür arasında çevrim yapmakta mümkündür.

//* ----------------------------------------------------------
//*  concat() - immutable
//* ----------------------------------------------------------

const s1 = "Hello ";
const s2 = "World";
const s3 = s1.concat(s2);
console.log(s3);
console.log(s3.concat(" Clarusway", str2));

//? S1 ve S2 değişmez (immutable)
console.log("S1:", s1, "S2:", s2);

//* ----------------------------------------------------------
//* charAt()
//* ----------------------------------------------------------

const s4 = "primitive.\nlerin property veya metodu olmaz.";

//? Stringler için Escape karakterleri
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences
console.log({ s4 });

//*eğer paramtre yazılmazsa ilk karakteri döndürür.
console.log(s4.charAt()); //p
console.log(s4.charAt(9)); //.
console.log(s4.charAt(s4.length - 2)); //z

//* ----------------------------------------------------------
//* includes()
//* ----------------------------------------------------------

const word = "To be, or not to be, that is the question.";

console.log(word.includes("TO be")); //false
console.log(word.includes("to be")); //true
console.log(word.includes("question")); //true
console.log(word.includes("")); //true
console.log(word.includes("to be", 13)); //true - 15 false

//* ----------------------------------------------------------
//* indexOf() , lastIndexOf()
//* ----------------------------------------------------------
const toBeIndex = word.indexOf("or");
console.log(toBeIndex); //7
console.log(word.indexOf("this")); // -1
console.log(word.indexOf("TO BE")); // -1
console.log(word.indexOf("be")); //3 - ilk görülenin indeksi
console.log(word.lastIndexOf("be")); //17 - en son rastladığının indeksi

//* ----------------------------------------------------------
//* startsWidth() , endsWith()
//* ----------------------------------------------------------
const word2 = "Salına salına sinsice!";
console.log(word2.startsWith("Sa")); //true
console.log(word2.startsWith("si")); //false
console.log(word2.startsWith("sa", 7)); //true
console.log(word2.endsWith("!")); //true

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith)
//* ----------------------------------------------------------
const oku = "Oku Baban gibi, saf olma!";
console.log(oku);
console.log(oku.replace("saf olma", "akıllı ol"));

//* Detaylı değiştirme alternatifleri için regex kullanılabilir.
console.log(oku.replace(/SAF/i, "Fakir"));

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceted)
//* ----------------------------------------------------------
const veysel = "Uzun ince bir yoldayım yürüyorum gündüz gece..";

const sliced = veysel.slice(33);
console.log(sliced, typeof sliced); //gündüz gece..

console.log(veysel.substring(17, 30)); // dayım yürüyor
console.log(veysel.slice(-10)); // düz gece..
console.log(veysel.slice(-23, -19)); // yürü

//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------

const tarkan = "Gel gündüzle gece olalım";
const splited = tarkan.split(" "); //Boşluklara göre ayır (kelime)

//['Gel', 'gündüzle', 'gece', 'olalım'] 'object'
console.log(splited, typeof splited);
console.log(splited[2]); // gece

const chars = tarkan.split(""); //null'a göre ayır (karakter)
console.log(chars); // 24 Elemanlı bir array
console.log(chars[0]); //G

const copied = tarkan.split();
console.log(copied); // Array ["Gel gündüzle gece olalım"]
console.log(tarkan);

//*Örnek
//*-----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE

const youtube = "https://www.youtube.com/watch?v=b7vfp5G4brE";
const splitedLink = youtube.split("=");
console.log(splitedLink);
const shortLink = `https://youtu.be/${splitedLink[1]}`;
console.log(shortLink);

//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------
const ramazan = "   Hoşgeldin Ya Şehr-i Ramazan!   ";
console.log(ramazan);
console.log(ramazan.trim()); // Hoşgeldin Ya Şehr-i Ramazan!
