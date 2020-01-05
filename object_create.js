//object of protos
const bookProtos = {
  getSummary: function() {
    return `${this.title} written by ${this.author} in ${this.year}`
  },
  getAge: function() {
    const years = new Date().getFullYear()
    const yearsDiff = years - this.year
    return `${this.title} is ${yearsDiff} years old`
  }
}

//create object
const book1 = Object.create(bookProtos)
book1.title = 'book1'
book1.author = 'John Dafoe'
book1.year = 2007


console.log(book1.getSummary())
console.log(book1.getAge())