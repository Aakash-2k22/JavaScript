let num = parseInt(prompt("Enter a number: "));

function isPrime() {
    if (num < 2) {
        document.write(num + " is NOT a prime number.");
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            document.write(num + " is NOT a prime number.");
            return;
        }
    }
    
    document.write(num + " is a prime number.");
}

isPrime();
