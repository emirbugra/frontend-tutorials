function ExampleFunc(firstname) {

  this.firstname = firstname

  return 0
}

let result = new ExampleFunc()
console.log(result.firstname)

