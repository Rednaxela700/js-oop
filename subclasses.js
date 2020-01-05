class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} written by ${this.author} in ${this.year}`;
  }
  getAge() {
    const years = new Date().getFullYear();
    const yearsDiff = years - this.year;
    return `${this.title} is ${yearsDiff} years old`;
  }
  revise(newYear) {
      this.year = newYear,
      this.revised = true;
  }
  
  static bestEmployee() {
    return `The best employee is... Someone!`
  }
}

//Instantiate object
const book1 = new Book("book1", "Jane Doe", 2013);
book1.revise(2005)
console.log(book1.getSummary());
console.log(Book.bestEmployee())