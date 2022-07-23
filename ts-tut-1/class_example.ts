class Person {
  public firstname: string
  public lastname: string
  public age: number

  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
  }

  getFullname(): string {
    return `${this.firstname} ${this.lastname}`
  }
}


class People {
  protected _firstname: string
  protected _lastname: string
  protected _age: number

  constructor(firstname: string, lastname: string, age: number) {
    this._firstname = firstname
    this._lastname = lastname
    this._age = age
  }

  public get age(): number {
    return this._age
  }

  public set age(newAge: number) {
    if (newAge <= 0 || newAge > 200) {
      throw new Error('Age must be between 1 and 200')
    }

    this._age = newAge
  }

  public get fullname(): string {
    return `${this._firstname} ${this._lastname}`
  }

  public printEverything(): void {
    console.log(`${this._firstname} ${this._lastname} ${this._age}`)
  }
}


class Employee extends People {
  protected _salary: number

  constructor(firstname: string, lastname: string, salary: number) {
    super(firstname, lastname, 0)
    this._salary = salary
  }

  public get salary(): number {
    return this._salary
  }

  public set salary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error('Salary can not be negative.')
    }

    this._salary = newSalary
  }

  public printEverything() {
    console.log(`${this._firstname} ${this._lastname} ${this._salary}`)
  }
}


let people = new People('emir', 'buğra', 33)
console.log(people.age)
people.age = 22
console.log(people.age)
people.printEverything()

let employee1 = new Employee('neşet', 'ertaş', 10000)
console.log(`${employee1.fullname} Salary: ${employee1.salary}`)
employee1.printEverything()
