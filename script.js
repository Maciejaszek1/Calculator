/*let a = prompt('num1');
let b = prompt('operator');
let c = prompt('num 2');

let wynik = 0;

if (b == '+') wynik = a + c;
else if (b == '-') wynik = a - c;
else if (b == '*') wynik = a * c;
else if (b == '/') wynik = a / c;
else alert('wrong operator');
console.log(toString(wynik));
console.log(wynik);*/

//make a function that adds 2 chosen numbers

function numListener(number, num) {
   number.addEventListener('click', function () {
      if(firstNum == 0) {
         firstNum = num;
         console.log("fn" + firstNum);
      }
      else {
         secondNum = num;
         console.log("sn" + secondNum);
      }
   });
}

function opListener(operation) {
   operation.addEventListener('click', function () {
      operator = this.textContent;
      console.log(operator);
   });
}

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
const equal = document.getElementById('equal');

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

equal.addEventListener('click',function () {
   operation();
   console.log(result);
})

