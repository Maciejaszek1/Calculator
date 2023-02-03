function display(numbers) {
   screenContent.textContent += numbers;
}

function clearDisplay() {
   screenContent.textContent = "";
}

//event listener shortcut for numbers
function numListener(number, num) {

   number.addEventListener('click', function () {
      if(operator == "") {
         firstArr.push(num);
         display(this.textContent);
      }
      else {
         secondArr.push(num);
         display(this.textContent);
      }
   });
}

//event listener shortcut for operations
function opListener(operation) {
   operation.addEventListener('click', function () {
      if(operatorClicked == true && secondArr != ""){
         equate();
      } else if (operatorClicked == true && secondArr == ""){
         screenContent.textContent = screenContent.textContent
            .toString()
            .slice(0, -3)
         ;
         operator = this.textContent;
      }

      dot.disabled = false;
      operatorClicked = true;
      operator = this.textContent;
      
      if (firstArr.length == 0) display(0);
      display(" " + this.textContent + " ");
   });
}

//returns operation from 2 numbers
function operation() {

      if (operator == "+") {
         result = firstNum + secondNum;
      } else if (operator == "-"){
         result = firstNum - secondNum;
      } else if (operator == "*"){
         result = firstNum * secondNum;
      } else if (operator == "/"){
         result = firstNum / secondNum;
      }
}

//equates
function equate() {
   if (firstArr.length == 0) firstArr.push(0);
   if (secondArr.length == 0) secondArr.push(0);
   
   firstNum = parseFloat(firstArr.join(''));
   secondNum = parseFloat(secondArr.join(''));

   operation();
   clearDisplay();
   display(Math.round(result * 100) / 100);
}

//clears calculator
function clear() {
   operatorClicked = false;
   firstArr = [];
   secondArr = [];
   firstNum = 0;
   secondNum = 0;
   operator = "";
   dot.disabled = false;
}

//deletes last number in array
function deletion() {
       
   if(operator == ""){
      firstArr.pop();
   } else {
      secondArr.pop();
   }
   screenContent.textContent = screenContent.textContent
   .toString()
   .slice(0, -1)
}

let operatorClicked = false;
let firstArr = [];
let secondArr = [];
let result = 0;
let firstNum = 0;
let secondNum = 0;
let operator = "";

const num0 = document.getElementById('zero');
const num1 = document.getElementById('one');
const num2 = document.getElementById('two');
const num3 = document.getElementById('three');
const num4 = document.getElementById('four');
const num5 = document.getElementById('five');
const num6 = document.getElementById('six');
const num7 = document.getElementById('seven');
const num8 = document.getElementById('eight');
const num9 = document.getElementById('nine');

const sum = document.getElementById('sum');
const subtract = document.getElementById('subtract');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');

const dot = document.getElementById('dot');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equateButton = document.getElementById('equal');

const screen = document.querySelector('.screen');
const screenContent = document.createElement('div');
screenContent.classList.add('screenContent');
screen.appendChild(screenContent);

numListener(num0, 0);
numListener(num1, 1);
numListener(num2, 2);
numListener(num3, 3);
numListener(num4, 4);
numListener(num5, 5);
numListener(num6, 6);
numListener(num7, 7);
numListener(num8, 8);
numListener(num9, 9);

opListener(sum);
opListener(subtract);
opListener(divide);
opListener(multiply);


//event listener for equation
equateButton.addEventListener('click',function (){
   equate();
   clear();
   firstArr.push(result);
});

clearButton.addEventListener('click', function(){
   result = 0;
   clear();
   clearDisplay();
});
deleteButton.addEventListener('click', deletion);

dot.addEventListener('click',function () {
   if(operator == ""){
      firstArr.push('.');
      display(this.textContent);
      dot.disabled = true;
   } else {
      secondArr.push('.');
      display(this.textContent);
   
      dot.disabled = true;
   }
})


