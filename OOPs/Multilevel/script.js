// Parent Class: Indian
class Indian {
    constructor(aadharNo, birthPlace) {
        this.aadharNo = aadharNo;
        this.birthPlace = birthPlace;
    }
}

// Child Class: Person (Inheriting from Indian)
class Person extends Indian {
    constructor(aadharNo, birthPlace, name, age, gender) {
        super(aadharNo, birthPlace); // Calling parent class constructor
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// Grandchild Class: Employee (Inheriting from Person)
class Employee extends Person {
    constructor(aadharNo, birthPlace, name, age, gender, id, salary, role) {
        super(aadharNo, birthPlace, name, age, gender); // Calling Person class constructor
        this.id = id;
        this.salary = salary;
        this.role = role;
    }

    // Method to display all details
    displayInfo() {
        document.writeln(`<b>Aadhar No:</b> ${this.aadharNo}<br>`);
        document.writeln(`<b>Birth Place:</b> ${this.birthPlace}<br>`);
        document.writeln(`<b>Name:</b> ${this.name}<br>`);
        document.writeln(`<b>Age:</b> ${this.age}<br>`);
        document.writeln(`<b>Gender:</b> ${this.gender}<br>`);
        document.writeln(`<b>Employee ID:</b> ${this.id}<br>`);
        document.writeln(`<b>Salary:</b> ₹${this.salary}<br>`);
        document.writeln(`<b>Role:</b> ${this.role}<br><br>`);
    }
}

// Creating Employee Object (Which includes properties of Indian & Person)
const emp1 = new Employee("1234-5678-9012", "Mumbai", "Aakash", 25, "Male", 101, 50000, "Software Developer");
const emp2 = new Employee("2345-6789-0123", "Delhi", "Surbhi", 27, "Female", 102, 60000, "HR Manager");

// Displaying Employee Details
emp1.displayInfo();
emp2.displayInfo();
