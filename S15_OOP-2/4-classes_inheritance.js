//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//* ======================================================

//? extends keyword is used to extend the functionality of the parent class to the subclass.(INHERITANCE)

//* Polymorphism is an object-oriented programming concept that
//* refers to the ability of a variable, function or object to take on multiple forms.
//* In the OOP, Polymorphism is generally be performed with Overloading and Overriding.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  setPrice(price) {
    const taxRate = 1.1;
    this.price = (price * taxRate).toFixed(2);
  }
}

//? Magazine subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    //? Calling Book constructor
    super(title, author, year);
    this.month = month;
  }
  //! Overrided Method (We use same method in the parent with diffrent functionality)
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.month}`;
  }
  //! Overloaded Method (We use same method with diffrent parameters)
  setPrice(price, taxRate) {
    this.price = (price * taxRate).toFixed(2);
  }
  //! Overloaded Method (We use same method with diffrent parameters)
  setPrice(price, taxRate, message) {
    this.price = (price * taxRate).toFixed(2);
    return message;
  }

  setPriceParent(price) {
    super.setPrice(price);
  }

  getTitle() {
    return this.title;
  }
}

//*Creating instance from Book Class
const mag1 = new Magazine("Stientific Essays", "Einstein", 1900, "September");

console.log(mag1);
console.log(mag1.getSummary());
console.log(mag1.getTitle());
mag1.setPrice(50, 1.2);
console.log(mag1);

const mag2 = new Magazine("Stientific Essays 2", "Einstein", 1910, "November");
console.log(mag2.setPrice(40, 1.2, "hello"));
console.log(mag2);

//? We called parent's setPrice() method
mag2.setPriceParent(500);
console.log(mag2);

const book2 = new Book("The Brothers Karamazov", "Dostyevski", 1880);
book2.setPrice(100);
console.log(book2);
console.log(book2.getSummary());
