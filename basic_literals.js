const book1 = {
  title: "Happy New Year",
  author: "John Doe",
  year: 2009,
  getSummary: () => {
    return `${this.title} written by ${this.author} in ${this.year}`
  }
}


//return an array of object values
console.log(Object.values(book1))