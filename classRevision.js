// ES6 => ES2015

// class keyword
// class are fake

// class CreateUser {
//   constructor(firstName, lastName, email, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//   };
//   about() {
//     return `${this.firstName} is ${this.age} years`;
//   };
//   is18() {
//     return this.age >= 18;
//   };
//   sing() {
//     return 'la la la';
//   };
// };


// const user1 = new CreateUser('harshit', 'vashistha', 'harshit@yopmail.com', 45, 'LA, SV, USA');

// // console.log(user1);
// console.log(Object.getPrototypeOf(user1));

// getters and setters

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   };
//   static classMethod() {
//     return 'this is a class method';
//   };
//   static classProperty() {
//     return 'this is a class property';
//   };
//   // getter method
//   get fullName() {// method made behave like a property
//     return `${this.firstName} ${this.lastName}`;
//   };

//   // setter method
//   set fullName(fullName) {
//     const [firstName, lastName] = fullName.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   };
// };

// const person1 = new Person('harshit', 'sharma', 23);

// console.log('person1', person1);

// console.log('person1', person1.fullName);
// person1.fullName = 'Amresh Singh';

// console.log('person1', person1);

// console.log('person1', person1.fullName);


// static methods and properties

// static method cannot be called in the object or instances
// console.log(person1.classMethod());

// static method can only be invoked via the class
// console.log(Person.classProperty());

console.log('Date.now()', Date.now());
