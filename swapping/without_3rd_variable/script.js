// Getting user input
let a = prompt("Enter a : ");
let b = prompt("Enter b : ");

// Displaying original value
console.log("Before Swapping :");
console.log("a is :",a);
console.log("b is :",b);

// Swapping without using 3rd variables
a = a + b ; 
b = a - b ;
a = a - b ;

// Displaying Swap Values
console.log("After Swapping :");
console.log("a is :",a);
console.log("b is :",b);
