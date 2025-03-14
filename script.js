// Defining the Person class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    // Updated greet method to match the expected format
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Defining the Employee class that inherits from Person
  class Employee extends Person {
    constructor(name, age, jobTitle) {
      super(name, age); // Call the constructor of Person
      this.jobTitle = jobTitle;
    }
    
    // jobGreet method as specified
    jobGreet() {
      console.log(
        `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
      );
    }
  }
  
  // Example usage:
  const person = new Person("Alice", 25);
  person.greet(); // Expected: Hello, my name is Alice and I am 25 years old.
  
  const employee = new Employee("Bob", 30, "Manager");
  employee.jobGreet(); 
  // Expected: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
  
// ✅ Make sure to attach to window for Cypress
window.Person = Person;
window.Employee = Employee;
