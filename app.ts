const app = document.querySelector(".App");

const addTwoNumbers = (num1: number, num2: number) => {
  let result = num1 + num2;

  const html_data = ` <div class="App__info">
  <span id="numX">${num1} +</span>
  <span id="numY"> ${num2} = </span>
  <span id="result">  ${result}</span>
</div>`;

  //   if (typeof num1 !== "number" || typeof num1 !== "number") {
  //     throw new Error("Incorrect Input");
  //   }

  return html_data;
};

const numberOne = 3;
const numberTwo = 2;

app.innerHTML = addTwoNumbers(numberOne, numberTwo);
