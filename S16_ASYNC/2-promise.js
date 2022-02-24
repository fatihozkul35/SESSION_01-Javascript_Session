//* ======================================================================
//*                          2- Promises
//* =======================================================================

//? Promise is an object which represents the eventual completion or
//? failure of an asynchronous operation and its resulting value.

//? SYTNAX
//?----------
//* 1- We use new Promise to Contruct the promise
//* 2- We give the constructor an executor function which does
//*    the actual work.
//* 3- Executor function is passed with 2 arguments :resolve and reject
//*    functions
//* 4- resolve function fulfills the promise, reject function
//*    rejects the promise

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? A Promise is in one of these states:
//* pending: initial state, neither fulfilled nor rejected.
//* fulfilled: meaning that the operation was completed successfully.
//* rejected: meaning that the operation failed.
//! A pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then() method are called.
//? then() and catch() methods return promises, They can be chained.

//* Example-1
//* -----------------------------------------------------------------------
const myPromise = new Promise((resolve, reject) => {
  let success = Math.floor(Math.random() * 5);
  const data = { a: 1, b: 2 };
  if (success) {
    console.log("Task performed");
    resolve(data);
  } else {
    reject("Task Failed");
  }
});

//! then() methods can be run as chained operation
myPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
  
//* Example-2: TEA TIME
//* -----------------------------------------------------------------------
//* 1. wait until water boiled -> kettle -> work or failed
//* 2. add tea --> tea is avalaible or not
//* 3. wait for brewing
const wait = (ms) => {
  const start = new Date().getTime();
  while (new Date().getTime() < start + ms);
};
const brewTea = () => {
  boil()
    .then((status1) => {
      console.log(status1);
      return addTea();
    })
    .then((status2) => {
      console.log(status2);
      wait(1000);
      return "Tea is ready. Bon Appetite";
    })
    .then((status3) => {
      console.log(status3);
    })
    .catch((err) => console.log(err));
};
const boil = () => {
  return new Promise((resolve, reject) => {
    const boiled = Math.floor(Math.random() * 5);
    if (boiled) {
      wait(1000);
      resolve("Water Boiled");
    } else {
      reject(new Error("Kettle Failed"));
    }
  });
};

const addTea = () => {
  return new Promise((resolve, reject) => {
    const teaAvalaible = Math.floor(Math.random() * 3);
    if (teaAvalaible) {
      wait(1000);
      resolve("Tea was added");
    } else {
      reject(new Error("Tea unavailable"));
    }
  });
};

brewTea();


