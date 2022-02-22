//* ======================================================
//*             OOP - Object Constructor (ES5)
//* ======================================================

//* Javascript is a prototype-based language.
//* All JavaScript objects inherit properties and methods from a prototype.
//* The Object prototype is on the top of the prototype inheritance chain.
//* For example, Date and Array objects inherit from Object.prototype.

//* Object Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

//? new keyword calls the Book Constructor with parameters.
//? Constructor creates an instance of Book object.
//? All of the variables and the functions in the constructor are attached to created every single instances
const book1 = new Book("Le Lily of the Valley", "Honore de Balzac", 1835);
const book2 = new Book("The Brothers Karamazov", "Dostyevski", 1880);

console.log(book1.title);
console.log(book1.getSummary());
console.log(book2.title);
console.log(book2.getSummary());

//? We can add new property or function to an instance object.
//? But these are just attached to related intances.
//? The other created intances from the constructor does not include these new properties.
book1.price = 100;
book1.getTitle = function () {
  return this.title;
};

console.log(book1, book2);

//! if you want to add new property or function to constructor
//! you can use prototype.

Book.prototype.type = "novel";
Book.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};
console.log(Book.prototype);
const book3 = new Book("The White Nights", "Dostyevski", 1860);
console.log(book3);
console.log(book3.getAge());

//! Prototypes allow to easily define methods to all instances of a particular object.
//! The beauty is that the method is applied to the prototype,
//! so it is only stored in the memory once, but every instance of the object has access to it.
//* For example all instances of Book object can inherit getAge() function,
//* Moreover, getAge() function allocates just single area in the memory.
//* it is not created for every single Book instances.

//* We can access prototype with .prototype
//* But for the instances, we can use with .__proto__
console.log(book3.__proto__);
console.log(Book.prototype);

//? INHERITANCE
//?-----------------------------------------------------------------------------

//* Sub-Class
function Magazine(title, author, year, month) {
  //* Calling parent object constructor
  Book.call(this, title, author, year);
  this.month = month;
}

//! inherit book prototype
Magazine.prototype = Object.create(Book.prototype);
console.log(Magazine.prototype);

//* Creating an instance of Magazine Object
const mag1 = new Magazine("Stientific Essays", "Einstein", 1900, "September");
console.log(mag1);
console.log(mag1.getSummary());
console.log(mag1.getAge());
