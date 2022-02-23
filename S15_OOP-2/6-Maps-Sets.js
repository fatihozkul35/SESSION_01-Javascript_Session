//* ======================================================
//*   MAP ====> let map = new Map([iterable]);
//* ======================================================

//? Map introduced with ES6. it is a data structure like objects.
//? it is based on key-value structure.
//? it is designed to overcome some deficiencies of objects.

//* 1 - A Map's keys can be any value (including functions, objects, or any primitive).
//* 2 - Maps store the data according to the insertion order of the keys.
//* 3 - Map is itreable data structure. So it is used
//* 4-  A Map is an iterable, so it can be directly iterated.
//* 5 - The number of items in a Map is easily retrieved from its size property.
//*     The number of items in an Object must be determined manually.
//* 6-  Performs better in scenarios involving frequent additions
//*     and removals of key-value pairs.

//* ======================================================
//*   Useful JavaScript Map methods
//* ======================================================
//? clear() – removes all elements from the map object.
//? delete(key) – removes an element specified by the key.
//?               It returns if the element is in the map, or false if it does not.
//? entries() – returns a new Iterator object that contains an array of [key, value]
//?             for each element in the map object. The order of objects
//?             in the map is the same as the insertion order.
//? forEach(callback[, thisArg]) – invokes a callback for each key-value pair in the map.
//? get(key) – returns the value associated with the key.
//?             If the key does not exist, it returns undefined.
//?  has(key) – returns true if a value associated with the key exists, otherwise, return false.
//?  keys() – returns a new Iterator that contains the keys for elements in insertion order.
//?  set(key, value) – sets the value for the key in the map object. It returns the map object
//?                    itself therefore you can chain this method with other methods.
//?  values() -  returns a new iterator object that contains values for each element.

let map1 = new Map();

map1.set("101", 1);
map1.set(102, "2");
map1.set(true, 3);
map1.set(true, 4); //* override the existing key

console.log(map1);

//? get value for Map
console.log(map1.get(true));

//? if existing key is used in the set method, it overrides the old value.
//? if dosent exist, it inserts new data.
map1.set("007", 7);
console.log(map1);
map1.set(102, 102);
console.log(map1);

//? key and value can be any type
const keyObj = { a: 1, b: 2 };
const keyArr = [1, 2, 3];

map1.set(keyObj, "This is a object key");
map1.set(keyArr, "This is a array key");
console.log(map1);
console.log(map1.get(keyObj));
console.log(map1.get(keyArr));

map1.set("add", function (x, y) {
  return x + y;
});
console.log(map1.get("add")(3, 2));

//* Alternativly
const addFunc = map1.get("add");
console.log(addFunc(4, 3));
console.log(map1);

//? Size of the Map
console.log(map1.size);

//! ITERATION IN THE MAP
//!-----------------------------------------------------
console.log(map1.entries());

//* KEYS-VALUE
for (const [key, value] of map1.entries()) {
  console.log("key is:", key);
  console.log("value is:", value);
  console.log("******************");
}

//* KEYs
for (const key of map1.keys()) {
  console.log("KEY:", key);
  console.log("******************");
}

//* Value
for (const value of map1.values()) {
  console.log("VALUE:", value);
  console.log("******************");
}

//* EXAMPLE
//***************************************************
//* 2D Array

const recipes = [
  ["onion", 50],
  ["cucumber", 500],
  ["tomatoes", 350],
];
console.log(recipes);
console.log(recipes[1][0]); // "cucumber"
console.log(recipes[2][1]); // 350

const recipesMap = new Map(recipes);
console.log(recipesMap);

//*
for (const [vegs, amaount] of recipesMap.entries()) {
  console.log(vegs, amaount);
  console.log("******************");
}

//* forEach(v,k,map)
recipesMap.forEach((v, k) => console.log(k, v));

//* HAS()
console.log(recipesMap.has("onion"));

if (!recipesMap.has("patatoes")) {
  recipesMap.set("patatoes", 25);
}
console.log(recipesMap);

//* DELETE() CLEAR()
//***************************************************
//* delete() removes single key-value
console.log(map1);
map1.delete("add");
console.log(map1);

//* clear() deletes all data in the Map
map1.clear();
console.log(map1);

//* Remove data structure
map1 = null;
console.log(map1);

//* ======================================================
//*   SET ====> let set = new Set([iterable]);
//* ======================================================
//? The Set object lets you store unique values of any type, whether primitive values or object references.

const mySet1 = new Set();
mySet1.add(1);
mySet1.add(4);
mySet1.add(4);
mySet1.add(2);
console.log(mySet1.size);

const obj1 = { a: 1, b: 2 };
const obj2 = obj1;
mySet1.add(obj1);
mySet1.add({ a: 1, b: 2 });
mySet1.add(obj2);
console.log(mySet1);
console.log(mySet1.has(1));
console.log(mySet1.has(Math.sqrt(16)));
console.log(mySet1.has(obj2));
mySet1.add("matthew");
mySet1.has("Matthew".toLowerCase());

let arr = [1, 2, 3, 2, 5, 3, 8, 8, 5, 7, 6, 2, 1];
const set1 = new Set(arr);
console.log(set1);
const arrFromSet1 = [...set1];
const arrFromSet2 = Array.from(set1);
console.log(arrFromSet1, arrFromSet1);
