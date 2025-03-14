// Define Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Define Employee class extending Person
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// ✅ Use the expected values from Cypress test
let person = new Person("Alice", 25);
person.greet();

let employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();

// ✅ Make sure to attach to window for Cypress
window.Person = Person;
window.Employee = Employee;
