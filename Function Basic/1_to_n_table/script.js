let num = parseInt(prompt("Enter a number : "));

function table(num) {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            document.write("||" + j + " x " + i + " = " + j * i + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
        }
        document.write("<br>");
    }


    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    for (let i = 1; i <= 10; i++) {
        for (let j = 11; j <= 20; j++) {
            document.write("||" + j + " x " + i + " = " + j * i + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
        }
        document.write("<br>");
    }


    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    for (let i = 1; i <= 10; i++) {
        for (let j = 21; j <= num; j++) {
            document.write("||" + j + " x " + i + " = " + j * i + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
        }
        document.write("<br>");
    }
}
table(num);