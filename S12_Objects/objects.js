//* ======================================================
//*                 (OBJECTS)
//* ======================================================

//? Arrays are sequential memory structure. So, we can access them by indexing.
//? We can use Objects for more complex (unstructured) memory needs

//? Key-value (property-value) is used for the objects
//? it is used  the property name to access any data.

//! We can create an object with 3 methods
//* ---------------------------------------------------------
//* 1- By creating instance of Object (new)
//* ---------------------------------------------------------

const cars = new Object();
cars.name = "BMW";
cars.engine = 1.6;
cars.model = 2020;

console.log(cars);
console.log(cars.engine); //. notation
console.log(cars["model"]);

//* ---------------------------------------------------------
//* 2- By using object constructor
//* ---------------------------------------------------------

//* Object constructor
function Employee(id, name, salary) {
  this.empId = id;
  this.empName = name;
  this.empSalary = salary;
  //   console.log(this);  //! binded to Employee object
}

const mehmet = new Employee(101, "Mehmet", 75000);
const baser = new Employee(102, "Baser", 75000);
console.log(mehmet, baser);
console.log(mehmet.empSalary);
console.log(baser.empName);
console.log(this); //! binded to window object

//* ---------------------------------------------------------
//* 3- Object literal (Mostly Used Way)
//* ---------------------------------------------------------

const person = {
  name: "John",
  surname: "Pitt",
  age: 30,
  job: "developer",
  languages: ["C", "C++", "Phyton", "Java"],
};

console.log(person);
console.log(person.age);
console.log(person.languages[2]);
console.log(`My name is ${person.name} and my age is ${person["age"]}`);

person.location = "Germany";
person.email = "john@gmail.com";
person["dob"] = 1990;
person.age = 40;
console.log(person);

const worker = person; //* Shallow Copying
worker.salary = 40000;
console.log("WORKER", worker); //* Same
console.log("PERSON", person); //* Same

//* ======================================================
//*             Methods in the Objects
//* ======================================================

const mensch = {
  name: "John",
  surname: "Pitt",
  dob: 1990,
  job: "developer",
  hasDrivingLicense: true,
  calculateAge: function () {
    console.log(this);
    return new Date().getFullYear() - this.dob;
  },
  summary: function () {
    console.log(this);
    return `${this.name} is ${this.calculateAge()} years old.`;
  },
  count: () => {
    this.apple = 5; // window.apple =5
    console.log(this); // window
    return this.apple; // 5
  },
};

//!NOTE: arrow functions has lexical context. So if we use this keyword inside an arrow function, we may  get unexpected values. Beacause this keyword inside an object refers global scope (window).To prevent the this value from binding to the global scope, use the regular function inside the object method.

//* NOTE: Date() object
// const myDate = new Date();
// console.log(myDate.getHours());
// console.log(myDate.getSeconds());
console.log(mensch.calculateAge());
console.log(mensch.summary());
console.log(mensch.count());
// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================

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

// console.log(people);
// people.forEach((p) => console.log(p.name));

//* EXAMPLE1: display the jobs in the people array.
people.forEach((p) => console.log(p.job));

//* EXAMPLE2: increment the ages by one and store them to a new array.
const ages = people.map((p) => p.age + 1);
console.log(ages);

//* EXAMPLE3: Create new Object which consists of uppercased name + surname and incremented the age by 5.
const leute = people.map((i) => ({
  name: i.name.toUpperCase() + " " + i.surname.toUpperCase(),
  age: i.age + 5,
}));
console.log(leute);
//* EXAMPLE4: List the person's names whose age is under 33.
people.filter((p) => p.age < 33).forEach((p) => console.log(p.name));
//? Alternative way
const deneme = people.filter((p) => p.age < 33).map((p) => p.name);
console.log(deneme);

//* EXAMPLE5: Store the names and ages of the developers as a new Object.
const developers = people
  .filter((p) => p.job == "developer")
  .map((i) => {
    return { devName: i.name, age: i.age };
  });
console.log(developers);
//* EXAMPLE6: calculate avg age of  people.
const avgAges = people.reduce((acc, item) => acc + item.age, 0) / people.length;
console.log(avgAges);
