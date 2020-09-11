/*
Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`${this.name} is ${this.age} years old.`)
    }
};

const rudy = new Person("Rudy", 20);

/*
Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:
*/

class Teacher extends Person {
    static instruction() {
        console.log("How much teach would a teacher teach if a teacher could teach teach?")

    }
    teach(subject) {
        console.log(`${this.name} teaches ${subject}. He is ${this.age} years old.`)
    }
};

const franklin = new Teacher("Mr. Franklin", 33);

rudy.describe();
Teacher.instruction(); //calling a static method
franklin.teach("science");