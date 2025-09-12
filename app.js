console.log("This is app.js");

class Person {
    name;
    age;
    occupation;
    message

    constructor(name, age, occupation, message) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.meassage = message;
    }
    
   displayInfo() { 
     console.log("Name: " + this.name);
     console.log("Age: " + this.age);
     console.log("Occupation: " + this.occupation);
     console.log("Message: " + this.message);
   }

   showName() {
     console.log(this.name);
   }

   showMassege() {
     console.log(this.message);
   }
}

const person1 = new Person("Coco Martin", 24, Masahista, "Ser, tapos na po");
const person2 = new Person("Virtor Magtagol ", 24, superhero, "Ajrooooooo");

person1.displayInfo();
Person.displayInfo();

