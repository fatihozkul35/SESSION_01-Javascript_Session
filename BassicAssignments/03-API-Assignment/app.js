//**************synchronous && asynchronous */

// let counter = 0;

// const myInter = setInterval(() => {
//   counter++;
//   console.log(counter);
//   if (counter > 10) {
//     clearInterval(myInter);
//   }
// }, 1000);
// timer.start()
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");

// setTimeout(function () {
//   console.log("Hi");
//   setTimeout(function () {
//     console.log("Hi");
//     setTimeout(function () {
//       console.log("Was geht ab?");
//       setTimeout(function () {
//         console.log("gut und selbst");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");
// console.log("object");

// function myPromise(data) {
//   return new Promise(function (res, rej) {
//     if (typeof data === "string") {
//       res("This task is successfully completed");
//     } else {
//       rej("This task is not completed");
//     }
//   });
// }

// myPromise("This")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const myObj = new Object();
// console.log(myObj, typeof myObj);
// const myPromise1 = new Promise(function (res, rej) {});
// console.log(myPromise1);

//************GITHUP API Project */
//* selectorrs element
const userDiv = document.querySelector(".users");
const getButton = document.querySelector(".btn");

const getUsers = () => {
  fetch("https://api.github.com/users").then((response) =>
    response
      .json()
      .then((data) => updateDom(data))
      .catch((err) => console.log(err))
  );
};

getButton.addEventListener("click", getUsers);

const updateDom = (data) => {
  console.log(data);
  let images = data.map((item) => {
    console.log(item);
    return `<div class="user d-flex flex-column align-items-center">
              <img src="${item.avatar_url}" alt="">
              <p>${item.url}</p>
              <h1>${item.login}</h1>
          </div>`;
  });

  images = images.join("");

  userDiv.innerHTML = images;
};
