//* ======================================================
//*    OOP - Static and Private properties(ES6)
//* ======================================================

//? Static variables are used to keep track of information that relates
//? logically to an entire class, as opposed to information that varies from instance to instance.

//* Encapsulation is one of the fundamentals of OOP (object-oriented programming).
//* It refers to the bundling of data with the methods that operate on that data.
//* Encapsulation is used to hide the values or state of a structured data object inside a class,
//* preventing unauthorized parties’ direct access to them.
//* Publicly accessible methods are generally provided in the class (so-called getters and setters)
//* to access the values, and other client classes call these methods to retrieve and modify
//* the values within the object.
//* private variables and methods are used for Encapsulation

class Book {
  static counter = 0;
  //! Private property
  #id = new Date().getTime();

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    Book.counter++;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  getId() {
    return this.#id;
  }
  setId(id) {
    this.#id = id;
  }
}
//! Static properties and function is used without instantinate
console.log(Book.counter);

//? Create an instance
const book1 = new Book("Les Misarables", "Victor Hugo", "1834");
const book2 = new Book("The Brothers Karamazov", "Dostyevski", 1880);
const book3 = new Book("The Brothers Karamazov", "Dostyevski", 1880);
console.log(Book.counter);

//! Private property is just accesible with getter method.
// book1.id = "123456";
console.log(book1.id); //* undefined
console.log(book1.getId()); //* time

//! Private property can just be modify with setter method.
book2.setId("123456");
console.log(book2.getId());
