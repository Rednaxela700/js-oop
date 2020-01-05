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