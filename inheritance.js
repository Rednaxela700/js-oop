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

//Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year)

  this.month = month
}

//inherit prototype
Magazine.prototype = Object.create(Book.prototype)

const mag1 = new Magazine('Mag One', 'John Doe', 2020, 'January')
//now mag1 has Book constructor

Magazine.prototype.constructor = Magazine;

console.log(mag1)

