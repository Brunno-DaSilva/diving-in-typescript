var app = document.querySelector(".App");
var addTwoNumbers = function (num1, num2) {
    var result = num1 + num2;
    return "\n    <div class=\"App__info\">\n        <span id=\"numX\">" + num1 + " +</span>\n        <span id=\"numY\"> " + num2 + "</span>\n        <span id=\"result\"> = " + result + "</span>\n    </div>\n";
};
var numberOne = 3;
var numberTwo = 5;
app.innerHTML = addTwoNumbers(numberOne, numberTwo);
