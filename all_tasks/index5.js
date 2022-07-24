// Create a class for Human with constructor taking input as name. It will have member functions such as introduce and sayHello.
// Create a child class for Student with constructor taking input as name and also taking batch name. Member functions introduce and sayHello, but introduce will also introduce the role as student.
// [optional] Create another child class for Educator.

// class Human {
//   constructor(name) {
//     this.name = name;
//   }
//   introduce() {
//     console.log(`Hi, I am ${this.name}`);
//   }
//   sayHello() {
//     console.log("Hello");
//   }
// }

class Human {
    constructor(name){
        this.name = name;
    }
    introduce(){
        console.log(`hi, i am ${this.name}`);
    }
    sayHello(){
        console.log("hello");
    }
}

let Human_obj = new Human("John");
console.log(Human_obj);
Human_obj.introduce();
Human_obj.sayHello();   // hello_world

// class Student extends Human{
//     constructor(name, batch){
//         super(name);
//         this.batch = batch;
//     }
//     introduce(){
//         super.introduce();
//         console.log(`I am a student of batch ${this.batch}`);
//     }
// }
//     student_obj = new Student("John", "Batch-1");
//     console.log(student_obj);
//     student_obj.introduce();
//     student_obj.sayHello();   // hello_world

class Student extends Human {
    constructor(name, batch){
        super(name)
        this.batch=batch;
    }
    intorduce(){
        console.log(`hi, i am ${this.name} and i am a student of batch ${this.batch}`);
    }

    sayHello(){
        console.log("hello");
    }
}
let student_obj = new Student("john", "F-S-D Batch-5");
console.log(student_obj);
student_obj.intorduce();

class Educator extends Human{
    constructor(name, batch){
        super(name);
        this.batch=batch;
    }
    introduce(){
        console.log(`hi, i am ${this.name} and i am a Educator of batch ${this.batch}`);
    }
    }
    let Educator_obj = new Educator("aayush", "F-S-D Batch-5");
    console.log(Educator_obj);
    console.log(Educator_obj.introduce());