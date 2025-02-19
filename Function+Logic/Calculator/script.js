let num1 = parseInt(prompt("Enter number 1 :"));
let num2 = parseInt(prompt("Enter number 2 :"));
let choice = prompt("Enter your choice :");


function addition(num1 , num2){
    document.write(num1 + " + " + num2 + " = " + (num1 + num2));
    document.write("<br>");
}

function subtraction(num1 , num2){
    document.write(num1 + " - " + num2 + " = " + (num1 - num2));
    document.write("<br>");
}

function division(num1 , num2){
    document.write(num1 + " / " + num2 + " = " + (num1 / num2));
    document.write("<br>");
}

function multiplication(num1 , num2){
    document.write(num1 + " * " + num2 + " = " + (num1 * num2));
    document.write("<br>");
}

switch(choice){
    case "+" : document.write(num1 + " + " + num2 + " = " + (num1 + num2)) ; break;
    case "-" : document.write(num1 + " - " + num2 + " = " + (num1 - num2)) ; break;
    case "/" : document.write(num1 + " / " + num2 + " = " + (num1 / num2)) ; break;
    case "*" : document.write(num1 + " * " + num2 + " = " + (num1 * num2)) ; break;

    default : document.write("Enter valid choice from (+ , - , * , / )");
}
