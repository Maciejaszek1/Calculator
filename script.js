//event listener shortcut for numbers
function numListener(number, num) {
   number.addEventListener('click', function () {
      if(operator == "") {
         firstArr.push(num);
         console.log(firstArr);
      }
      else {
         secondArr.push(num);
         console.log(secondArr);
      }
   });
}

//event listener shortcut for operations
function opListener(operation) {
   operation.addEventListener('click', function () {
      if(operatorClicked == true){
         equate();
         firstArr = [];
         firstArr[0] = result;
         secondArr = [];
      }

      operatorClicked = true;
      operator = this.textContent;
      console.log(operator);
   });
}

//returns operation from 2 numbers
function operation() {

      if (operator == "+") {
         result = secondNum + firstNum;
      } else if (operator == "-"){
         result = secondNum - firstNum;
      } else if (operator == "*"){
         result = secondNum * firstNum;
      } else if (operator == "/"){
         result = secondNum / firstNum;
      }
}

//equates
function equate() {
   firstNum = parseInt(firstArr.join(''));
   secondNum = parseInt(secondArr.join(''));
   console.log(typeof firstNum + firstNum);
   console.log(typeof secondNum + secondNum);

   operation();
   console.log(result);
}

//clears calculator
function clear() {
   operatorClicked = false;
   firstArr = [];
   secondArr = [];
   result =0;
   firstNum = 0;
   secondNum = 0;
   operator = "";
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
const deletion = document.getElementById('delete');
const equateButton = document.getElementById('equal');

const screen = document.getElementById

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


//event listener for equasion
equateButton.addEventListener('click',function (){
   equate();
   clear();
});

clearButton.addEventListener('click', clear);

