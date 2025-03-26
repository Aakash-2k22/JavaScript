// Student class
class Student {
    // Private attributes using #
    #roll_no;
    #name;
    #age;
    #std;
    #percentage;

    // Parameterized constructor to initialize attributes
    constructor(roll_no, name, age, std, percentage) {
        this.#roll_no = roll_no;
        this.#name = name;
        this.#age = age;
        this.#std = std;
        this.#percentage = percentage;
    }

    // Method to display student details
    displayInfo() {
        document.writeln(`<b>Roll No:</b> ${this.#roll_no}<br>`);
        document.writeln(`<b>Name:</b> ${this.#name}<br>`);
        document.writeln(`<b>Age:</b> ${this.#age}<br>`);
        document.writeln(`<b>Class:</b> ${this.#std}<br>`);
        document.writeln(`<b>Percentage:</b> ${this.#percentage}%<br><br>`);
    }
}

// Creating 3 Student Objects
const student1 = new Student(101, "Aakash", 18, "12th", 91);
const student2 = new Student(102, "Surbhi", 17, "12th", 90);
const student3 = new Student(103, "Aarohi", 17, "11th", 88);

// Displaying Student Details
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();
