const app = document.querySelector(".App");

const addTwoNumbers = (num1: number, num2: number) => {
  let result = num1 + num2;

  return `
    <div class="App__info">
        <span id="numX">${num1} +</span>
        <span id="numY"> ${num2}</span>
        <span id="result"> = ${result}</span>
    </div>
`;
};

const numberOne = 3;
const numberTwo = 5;

app.innerHTML = addTwoNumbers(numberOne, numberTwo);
