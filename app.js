var app = document.querySelector(".App");
var addTwoNumbers = function (num1, num2) {
    var result = num1 + num2;
    var html_data = " <div class=\"App__info\">\n  <span id=\"numX\">" + num1 + " +</span>\n  <span id=\"numY\"> " + num2 + " = </span>\n  <span id=\"result\">  " + result + "</span>\n</div>";
    if (typeof num1 !== "number" || typeof num1 !== "number") {
        throw new Error("Incorrect Input");
    }
    return html_data;
};
var numberOne = 3;
var numberTwo = 2;
app.innerHTML = addTwoNumbers(numberOne, numberTwo);
