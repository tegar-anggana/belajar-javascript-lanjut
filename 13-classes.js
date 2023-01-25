class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  greeting(x) {
    return `${x}, my name is ${this.firstName} ${this.lastName}`
  }
}

let person1 = new Person("John", "Doe");
console.log(person1.firstName); // John
console.log(person1.getFullName()); // John Doe
console.log(person1.greeting("Hello")); // Hello, my name is John Doe

let person2 = new Person("James", "Bond");
console.log(person2.getFullName()); // James Bond
console.log(person2.greeting("Hi")); // Hi, my name is James Bond