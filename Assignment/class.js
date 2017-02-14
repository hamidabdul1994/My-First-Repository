function Person(firstName) {
  this.firstName = firstName;
  this.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};
};

/*Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};
*/
var person1 =new Person("Alice");
var person2 =new Person("Bob");

// call the Person sayHello method.
person1.sayHello(); // logs "Hello, I'm Alice"
person2.sayHello(); // logs "Hello, I'm Bob"
