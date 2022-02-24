//* ======================================================================
//*              1- Synchronous-Asynchronous Programming
//* =======================================================================

//! Javascript is a single-threaded and Asynchronous programming language.

//? Asynchronous programming
//? -----------------------------------------------------------------------
//? Asynchronous programming is a form of parallel programming that allows
//? a unit of work to run separately from the primary application thread.
//? When the work is complete, it notifies the main thread (whether the
//? work was completed or failed). There are numerous benefits to using it,
//? such as improved application performance and enhanced responsiveness.

//? Especilly time expensive processes like getting data from an API or Database,
//? Input/Output process, File Reading or Writing should be programmed with Asyn
//? Programming technique.

//* Synchronous
//* -----------------------------------------------------------------------
//? Sleep in Java
// const wait = (ms) => {
//   //? Blocking-code
//   const start = new Date().getTime();
//   while (new Date().getTime() < start + ms);
// };

// console.log("hello");
// // alert("Block"); //! blocking-code
// console.log("World");
// console.time("timer");
// wait(3000); //! blocking-code
// console.timeEnd("timer");
// console.log("Bye");

//* Asychronous (setTimeout)
//* -----------------------------------------------------------------------
// setTimeout(() => {
//   //! non-blocking
//   console.log("Selamın Aleyküm");
// }, 2000);

// console.log("Aleyküm Selam");

// setTimeout(() => {
//   //! non-blocking
//   console.log("Dostum Naber");
// }, 3000);

//* Asychronous (setInterval, clearInterval)
//* ----------------------------------------------------------------------
console.log("Counter Started");

let counter = 0;
//* non-blocking
const myInterval = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter > 9) {
    clearInterval(myInterval);
  }
}, 1000);

console.log("Counter Finished");

//! Callback Hell (nested and depended callbacks)
//! -----------------------------------------------------------------------
//* if you want write async codes depended to each other,
//* you may use nested callback. But this is not good programming approach.
//* it is hard to understand and maintain of the callback hell.

setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//? SOLUTION:
//? -------------------------------------------------------------------------
//* In Javascript, We can overcome async programming difficulties with 4 methods.
//* 1- Asyn Callback (old method),
//* 2- Promise,
//* 3- Fetch API (updated version of Promise),
//* 4- ASYNC-AWAIT,
