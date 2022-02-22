//* ======================================================
//*                    (OOPS)
//* ======================================================

//* Object Literals
const book1 = {
  title: "The Brothers Karamazov",
  author: "Dostyevski",
  year: "1880",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

const book2 = {
  title: "Le Lily of the Valley",
  author: "Honore de Balzac",
  year: "1835",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1);
console.log(book1.getSummary());
console.log(book1.toString());
console.log(book2.getSummary());

//? it is hard to create new objects by object literals and,
//? is is not suitable for DRY (Dont Repeat Yourself) Principle
//? SOLUTION: Using Object Constructor (ES5 and ES6)
