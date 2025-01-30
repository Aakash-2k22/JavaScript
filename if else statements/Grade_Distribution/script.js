// Declaring a variable
let percent = prompt("Enter your percentage : ");

//Displaying a percentage 
console.log("The Percentage is : ", percent);

// Grade according to their percentage with some appriciation!!
if(percent<=0 || percent>100)
{
    console.log("Enter a valid percentage !!");
}
else if(percent>=90 && percent<=100)
{
    console.log("You got a A+ grade !! , Well Done  ");
}
else if(percent>=80 && percent<90)
{
    console.log("You got a A grade !! Very Good ");
}
else if(percent>=70 && percent<80)
{
    console.log("You got a B+ grade !! , Good ");
}
else if(percent>=60 && percent<70)
{
    console.log("You got a B grade !! , Nice , but need more practice ");
}
else if(percent>=45 && percent<60)
{
    console.log("You got a C grade !! , not well , Try to get more  ");
}
else if(percent>=33 && percent<45)
{
    console.log("You got a D grade !! , Very Poor Performance ");
}
else
{
    console.log("You are fail , Congradulation for outstanding performance !! ");
}
