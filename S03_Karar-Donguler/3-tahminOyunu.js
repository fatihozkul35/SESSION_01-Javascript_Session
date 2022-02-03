//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.
let hak = 5;
let deneme = 0;
let kazandi = false;
const rasgele = Math.trunc(Math.random() * 100) + 1;
console.log(rasgele);
do {
  const tahmin = Number(prompt("0-100 arasinda bir sayi tutunuz:"));
  deneme++;
  hak--;
  if (tahmin == rasgele) {
    console.log(`Tebrikler ${deneme} denemede bildiniz. 🥳`);
    kazandi = true;
    break;
  } else {
    console.log(`Dikkat ${hak} hakkınız kaldı`);
    if (tahmin < rasgele) {
      console.log("ARTTIR..⬆️");
    } else {
      console.log("AZALT..⬇️");
    }
  }
} while (hak > 0);

if (!kazandi) {
  alert("Üzgünüm hakkınız bitti :(");
}
