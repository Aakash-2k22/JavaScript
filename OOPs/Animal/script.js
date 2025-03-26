// Animal class
class Animal {
    // Constructor to initialize attributes
    constructor( name, gender, age) {
        
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    // Method to display Animal details
    displayInfo() {
        document.writeln(`<b>Name:</b> ${this.name}<br>`);
        document.writeln(`<b>Gender:</b> ${this.gender}<br>`);
        document.writeln(`<b>Age:</b> ${this.age}<br><br>`);
    }
}

// Creating 3 Animals Objects
const a1 = new Animal( "Dog", "Male", 8);
const a2 = new Animal( "Elephant", "Female", 25);
const a3 = new Animal( "Tiger", "Male", 18);


// Displaying Animal Details
a1.displayInfo();
a2.displayInfo();
a3.displayInfo();
