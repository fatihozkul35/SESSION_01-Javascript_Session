//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//* ======================================================

//? extends keyword is used to extend the functionality of the parent class to the subclass.(INHERITANCE)

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

//? Magazine subclass

//*Creating instance from Book Class

