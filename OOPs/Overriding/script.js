class School{


    constructor(school,year){
        this.school = school;
        this.year = year;
    } 
    
    Display() {
        document.writeln(`<b>School Name:</b> ${this.school}<br>`);
        document.writeln(`<b>Since:</b> ${this.year}<br>`);
    }
}

class Student extends School{
    constructor(name,std,school,year){
        super(school,year);
        this.name = name;
        this.std = std;
    }

    Display(){
        document.writeln(`<b>Name:</b> ${this.name}<br>`);
        document.writeln(`<b>School Name :</b> ${this.school}<br>`);
        document.writeln(`<b>Standard :</b> ${this.std}<br>`);
        document.writeln(`<b>Since :</b> ${this.year}<br>`);
    }
}

const s1 = new Student("Aakash", "10th", "Greenwood High", 1995);
s1.Display();