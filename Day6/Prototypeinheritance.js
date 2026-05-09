function person(name) {
    this.name = name;
}
 
person.prototype.sayHi = function() {
    console.log('hello ' + this.name);
}
const me = new person("aryan");
const you = new person("you");
me.sayHi();
you.sayHi();
console.log(Object.getPrototypeOf(me) === person.prototype)
console.log(me.sayHi === you.sayHi)

//explain this code
//This code defines a constructor function called `person` that takes a `name` parameter and assigns it to the instance being created.
// The `person` function is used to create new objects (instances) that represent people.
// The `sayHi` method is added to the `person` prototype, which means that all instances of `person` will have access to this method.
// When we create instances `me` and `you` using the `new` keyword, they both have access to the `sayHi` method through the prototype chain.
// The `sayHi` method logs a greeting message that includes the name of the person.
// The code also checks if the prototype of `me` is the same as `person.prototype`, 
// which is true, and if the `sayHi` method is the same for both instances, which is also true.
