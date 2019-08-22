function evaluate(){
  let evaluating = document.getElementById("answer").value;
  let equal = eval(evaluating);
  document.getElementById("answer").value = equal;
}

function clearScreen(){
  document.getElementById("answer").value = "";
}

/* NEW FUNCTIONALITY */

let operator1 = null;
let operator2 = null;
let operation = null;

function display(value){
  document.getElementById("answer").value = value;
  //calculator.dispValue = dispValue === '0' ? value : dispValue + value;
}

function number(value) {
  // if 'operator1' is equal to null
  // then let's set 'operator1' to the 'value' parameter
  // else if 'operator1' is not equal to null
  // then let's set concatenate the 'value' parameter to 'operator1'
  if (operator1 === null){
    operator1 = value;
    display(operator1);
  }
    else if (operator1 !== null){
      operator1 = operator1.concat(value);
      display(operator1);
  }
  
}

function decimal(dot) {
//  if (diaplay(value).include(dot)){
//    display(value) += dot;
//  }
}

function add(operator1, operator2) {
  if (operator1 != null && operator1 >= 0 ){
    return operator1 += operator2
  }
  else if (operator2 != null && operator2 >= 0){
    return operator2 += operator1
  }
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

function equals(operator1, operator2) {
  //if (operator1 && operator2){
    //value = operator1 + operator2
  //}
}
