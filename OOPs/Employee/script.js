// Employee class
class Employee {
    // Constructor to initialize attributes
    constructor(id, name, salary, role) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.role = role;
    }

    // Method to display employee details
    displayInfo() {
        document.writeln(`<b>Employee ID</b>: ${this.id}<br>`);
        document.writeln(`<b>Name:</b> ${this.name}<br>`);
        document.writeln(`<b>Salary:</b> ₹${this.salary}<br>`);
        document.writeln(`<b>Role:</b> ${this.role}<br><br>`);
    }
}

// Creating 3 Employee Objects
const emp1 = new Employee(101, "Aakash", 50000, "Software Developer");
const emp2 = new Employee(102, "Manav", 60000, "Project Manager");
const emp3 = new Employee(103, "Neha", 45000, "HR Manager");


// Displaying Employee Details
emp1.displayInfo();
emp2.displayInfo();
emp3.displayInfo();
