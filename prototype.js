//Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//getSummary
Book.prototype.getSummary = function() {
  return `${this.title} written by ${this.author} in ${this.year}`
}

//Instantiate an object
const book1 = new Book('Book1', 'John Doe', 2014)
const book2 = new Book('Book2', 'Jane Doe', 2001)