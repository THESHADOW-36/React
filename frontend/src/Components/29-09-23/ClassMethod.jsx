
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello(){
    console.log(`Hello, my name is ${this.name}.`)
  }

  myAge(){
    console.log(`My age is ${this.age}`)
  }
}

const john = new Person('John',20)
john.sayHello()
john.myAge()