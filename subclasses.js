class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} written by ${this.author} in ${this.year}`;
  }
}

//Magazine subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month
  }
}

//instantiate object
mag1 = new Magazine('Mag one', 'Jane Doe', 2018, 'Jan')
console.log(mag1)