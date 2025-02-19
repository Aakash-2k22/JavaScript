let n = parseInt(prompt("Enter a number: "));

function IsArmstrong(num) {
    let temp = num; 
    let result = 0;
    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }


    num = n;

    while (temp > 0) {
        let digit = temp % 10;  // Extract last digit
        result += Math.pow(digit, count); // Raise digit to power of count and sum
        temp = Math.floor(temp / 10); // Remove last digit
    }

    if (result === num) {
        document.write(num + " is an Armstrong number! ");
    } else {
        document.write(num + " is not an Armstrong number! ");
    }
}

IsArmstrong(n);
