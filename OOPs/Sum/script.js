class Calculator {
    sum(a, b, c = 0, d = 0) {
        let argCount = arguments.length; // Count the actual arguments passed

        if (argCount < 2 || argCount > 4) {
            document.writeln("Pass Atleast 2 to 4 arguments !!");
        } else {
            let total = a + b + c + d;
            document.writeln(`Sum: ${total} <br>`);
        }
    }
}

// Example Usage:
const calc = new Calculator();

calc.sum(10, 20);      
calc.sum(10, 20, 30);  
calc.sum(10, 20, 30, 40);

