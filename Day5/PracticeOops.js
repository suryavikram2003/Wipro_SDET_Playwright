
//Synopsis

//Class & Object: class is a blueprint for creating objects, and an object is an instance of a class. 
//  Defined a Student class with properties and methods, then created multiple
//  student objects to store and display individual student information.


//Encapsulation: It is the bundling of data and methods that operate on that data within a single unit (class) and restricting access to other parts of the code.
// Implemented data hiding in the Employee class using the private field 
// #salary, allowing salary access only through the showsalary() method.


//Inheritance: It is a new class that inherits the properties and behaviors (methods) of an existing class. parent, child relationship.
//  Created a Bike class that inherits the common functionality of the
//  Vehicle class, enabling code reusability and extending additional features like ride().


//Polymorphism: single method that performs different actions based on the object that is calling it.
//  Used method overriding in different payment classes 
// (CreditCardPayment, UPIpayment, CashPayment) so the same pay() method performs different actions based on the payment type.


//Abstraction: hiding the implementation details and showing only the essential features of the object to the user.
//  Implemented abstraction in the MobilePhone class by
//  hiding the internal network connection process and exposing only the essential makeCall() functionality to the user



//1. Class creation and object
class Student{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    display()
    {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

const student1 = new Student("vikram",23);
student1.display();
const student2 = new Student("Surya",22);
student2.display();

//2. Encapsulation
class Employee{
    #salary;
    constructor(name,salary)
    {
        this.name = name;
        this.#salary = salary;
    }
    showsalary()
    {
        console.log(`${this.name}'s salary is ${this.#salary}`);

    }
}
const employee1 = new Employee("Vikram",50000);
employee1.showsalary();

//Inheritance
class Vehicle{
    start()
    {
        console.log("Vehicle is started");

    }
}
class Bike extends Vehicle
{
    ride()
    {
        console.log("Riding a bike");
    }
}
const b1 = new Bike();
b1.start();
b1.ride();


//Polymorphism
class Payment
{
    pay()
    {
        console.log("Payment Process");
    }

}
class CreditCardPayment extends Payment
{
    pay()
    {
        console.log("Paid using Credit Card");
    }
}
class UPIpayment extends Payment
{
    pay()
    {
        console.log("Paid using UPI");
    }
}
class CashPayment extends Payment
{
    pay()
    {
        console.log("Paid using Cash");
    }
}

const payments = [new CreditCardPayment(), new UPIpayment(), new CashPayment()];
payments.forEach(payment => payment.pay());


//Abstraction
class MobilePhone{
    makeCall(number)
    {
        this.#connectToNetwork();
        console.log(`Calling ${number}...`);
    }
    #connectToNetwork()
    {
        console.log("Connecting to network...");
    }
}
const phone = new MobilePhone();
phone.makeCall("1234567890");