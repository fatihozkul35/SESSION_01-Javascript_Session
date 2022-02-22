//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classes are a template for creating objects.
//? Classes in JS are built on prototypes but also have some syntax and semantics different than ES5 syntax.
//? Actually the class keyword is introduced in ES6, but is syntactical sugar, JavaScript remains prototype-based.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }
}

//*Creating instance from Book Class
const book1 = new Book("Le Lily of the Valley", "Honore de Balzac", 1835);
const book2 = new Book("The Brothers Karamazov", "Dostyevski", 1880);

console.log(book1);
console.log(book1.getSummary());
book1.revise(1920);
console.log(book1, book2);
