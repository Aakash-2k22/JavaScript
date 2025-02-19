// Step 1: Take user input
let n = parseInt(prompt("Enter a number: "));

// Step 2: Function to calculate factorial 
function calculateFactorial(num) {
    let factorial = 1;
    
    for (let i = 1; i <= num; i++) {
        factorial *= i; // Multiply each number
    }

    // Step 3: Print the result inside the function
    document.write("Factorial of " + num + " is " + factorial);
}

// Step 4: Call the function
calculateFactorial(n);
