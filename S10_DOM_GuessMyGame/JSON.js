//* ============================================================
//*  JSON.stringify() and JSON.parse() usage for localStorage
//* ============================================================

//* Creating an object
const obj = { name: "John", age: 30, city: "New York" };

//*Converting object to string (JSON.stringify())
const myJSON = JSON.stringify(obj);
console.log(obj);
console.log(myJSON, typeof myJSON);

//*Converting string to object data type (JSON.parse())
const getObj = JSON.parse(myJSON);
console.log(getObj);

//* Creating an array
const arr = ["John", "Peter", "Sally", "Jane"];

//*Converting array to string (JSON.stringify())
const myArrJSON = JSON.stringify(arr);
console.log(myArrJSON, typeof myArrJSON);

//*Converting string to array data type (JSON.parse())
const getArr = JSON.parse(myArrJSON);
console.log(getArr);

//! Creating myObj data in the localStorage
//! (arrays and objects must be string data type in the localStorage)
localStorage.setItem("myObj", JSON.stringify(obj));

//? To read myObj from localStorage as object type, we can use JSON.parse() method.
//? This method converts strings to array or object data types.
const myObj = JSON.parse(localStorage.getItem("myObj"));
console.log(myObj);
