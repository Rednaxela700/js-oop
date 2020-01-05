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

const mag1 = new Magazine('Mag One', 'John Doe', 2020, 'January')

console.log(mag1)