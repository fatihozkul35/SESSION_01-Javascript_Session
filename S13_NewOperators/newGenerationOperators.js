//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================
const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
};

//* 1.WAY (Classical)
console.log(car.model);
console.log(car["name"]);

//* 2.WAY DESTRUCTURING
const { name: carName, engine: carEngine } = car;
console.log(carName, carEngine);

//* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Merco",
    model: 2022,
    engine: 2.0,
  },
};

//* In JavaScript, Objects are not iterable unless they implement the iterable protocol. Therefore, you cannot use for…of to iterate over the properties of an object.
for (let i in cars) {
  console.log(cars[i].name);
}

const { car1, car2 } = cars;
const { name: c1Name, model: c1Model } = car1;
const { name: c2Name, model: c2Model } = car2;
console.log(c1Name, c2Model);

//* EXAMPLE: Array-Object
const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];

people.forEach((item) => {
  const { name, surname, job, age } = item;
  console.log("NAME:", name);
  console.log("SURNAME:", surname);
  console.log("JOB:", job);
  console.log("AGE:", age);
});

//* function
function getInfo() {
  return {
    id: 101,
    name: "Apple",
    price: 20000,
  };
}
const { id, name, price } = getInfo();
console.log(id, price);

//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (ARRAY)
//* ======================================================

const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

//* Classical method
const name1 = names[0];
const name2 = names[1];

const [person1, , person3] = names;
console.log(person1, person3);

//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST
//? ------------------------------------------------------
//* REST: (Arrays)
const vehicles = ["bmw", "reno", "mercedes", "ferrari", "anadol"];
const [vec1, vec2, ...restVehicles] = vehicles;
console.log(vec1, vec2);
console.log(restVehicles);

//* REST (Objects)
const personel = {
  pName: "john",
  surname: "smith",
  job: "developer",
  age: 30,
};

const { pName, job, ...surnameAge } = personel;
console.log(pName, job, surnameAge);

//* REST (Function Arguments)
const sum = (x, y) => {
  return x + y;
};

//? it doesnt complain but calculates first two argument's value
console.log(sum(1, 2, 3, 4, 5, 6));

const sumAll = (...numbers) => {
  let sum = 0;
  console.log(numbers);
  numbers.forEach((item) => (sum += item));
  return sum;
};
console.log(sumAll(1, 2, 3, 4, 5, 6));
console.log(sumAll(6));

const showName = (name, surname, ...titles) => {
  const summary = `${name} ${surname} is a ${titles.join(" and ")}`;
  console.log(summary);
};

showName("Noah", "Adams", "Developer", "Instr", "Professor", "Dad");

//? ------------------------------------------------------
//?  SPREAD
//? ------------------------------------------------------

const zeugs = ["Aircraft", "Helicopter", "Bicycle"];
const otomobiles = ["Trucks", "Bus", "Car", "SUV"];

const zeugsOto = [...zeugs, ...otomobiles];
console.log(zeugsOto);

//* Example
const fruits = ["cherry", "pear", "apricot", "raisin"];
const citrus = ["mandarin", ...fruits, "lime", "orange"];
console.log(citrus);

//* Example (String spread)
let str = "Hello FS";
console.log([...str]);
console.log(Array.from(str));

//* Example (max)
console.log(Math.max(1, 3, 9, 5));
const numbers = [1, 3, 9, 5];
console.log(Math.max(...numbers));

//* Example (Array Copy)
const myNumbers = [3, 5, 7];
const yourNumbers = myNumbers;
yourNumbers.push(9);
console.log(yourNumbers, myNumbers); //* same

//* Array.from()
const hisNumbers = Array.from(myNumbers);
hisNumbers.push(999);
console.log(hisNumbers, myNumbers); //* not same

//* Spread Operators
const herNumbers = [...myNumbers, 101];
herNumbers.unshift(88);
console.log(herNumbers, myNumbers); //* not same

//* Example (Object Copy)
const myObj = { a: 1, b: 2, c: 3 };

const copiedObj = { ...myObj };
console.log(copiedObj);

copiedObj.b = 55;
console.log(copiedObj, myObj);
