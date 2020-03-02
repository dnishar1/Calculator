function evaluate(){
  let evaluating = document.getElementById("answer").value;
  let equal = eval(evaluating);
  document.getElementById("answer").value = equal;
}

var operator1 = null;
var operator2 = null;
var operation = null;

// Clear screen should clear the screen and reset the input field to 0
// TODO: Right now this function just hides the pressed digits. It does not clear the screen
//       I want to clear the screen and reset the input values 
function clearScreen(){
  document.getElementById("answer").value = "0";
  operator1 = "";
  operator2 = "";
}

// This function displays the value pressed on the page. It only displays 0-9
function display(value){
  document.getElementById("answer").value = value;
}

function number(value) {
  if (operation === null){
    if (operator1 === null){
      operator1 = value;
      display(operator1);
    }
      else if (operator1 !== null){
        operator1 = operator1.concat(value);
        display(operator1);
      }
  }
  else {
    if (operator2 !== null){
      operator2 = value;
      display(operator2);
    }
      else if (operator2 !== null){
        operator2 = operator2.concat(value);
        display(operator2);
      }
    }
}

function decimal() {
document.getElementById("answer").value = value;
}

function add(operator1, operator2) {  
   //document.getElementById("add").value += operator2
  operation == operator1 + operator2;
}

function subtract(operator1, operator2) {
  if (operator1 != null && operator1 >= 0){
    return operator1 -= operator2
  }
  else if (operator2 != null && operator2 >= 0){
    return operator2 -= operator1
  }
}

function multiply(operator1, operator2) {
  if (operator1 != null && operator1 >= 0){
    return operator1 *= operator2
  }
  else if (operator2 != null && operator2 >= 0){
    return operator2 *= operator1
  }
}

function divide(operator1, operator2) {
  if (operator1 != null && operator1 >= 0){
    return operator1 /= operator2
  }
  else if (operator2 != null && operator2 >= 0){
    return operator2 /= operator1
  }
}

function equals() {
  if (operation !== null && operator1 !== null && operator2 !== null){
    operation = operator1 + operator2
    display(operation)
  }
}
