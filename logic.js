
function display(value){
  document.getElementById("answer").value += value;
}

function evaluate(){
  let evaluating = document.getElementById("answer").value;
  let equal = eval(evaluating);
  document.getElementById("answer").value = equal;
}

function clearScreen(){
  document.getElementById("answer").value = "";
}

function number(value){
  
}

function decimal(){

}

function add(){

}

function subtract(){

}

function multiply(){

}

function divide(){

}
function equals(){

}
