// Declaring a variable age
let age = prompt("Enter your age : ");

// Displaying a age
console.log("Your age is : ", age);

// Checking for eligibility for vote
if(age<=0 || age >=100)
{
    console.log("Enter valid age !");
}
else if(age>=18)
{
    console.log("You are eligible for vote !");
}
else
{
    console.log("You are not eligible for vote !");
}