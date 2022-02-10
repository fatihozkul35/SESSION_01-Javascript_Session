// const sentence = "My name is Fatih and I am not a Terorist";
// // const sentence = prompt("Enter your sentence please...");
// let reversedStr = "";
// for (let x of sentence) {
//   reversedStr = x + reversedStr;
// }
// console.log(reversedStr);

//********Reversing a Sentence */
// const cumle = "hadi gel köyüze geri dönelim";

// function ters(string) {
//   return string.split("").reverse().join("");
// }

// console.log(ters(cumle));

//****Finding fibonacci number */
function fib(num) {
  //   if (num < 2) {
  //     return num;
  //   } else {
  //     return fib(num - 1) + fib(num - 2);
  //   }
  return num < 2 ? num : fib(num - 1) + fib(num - 2);
}

console.log(fib(-5));
