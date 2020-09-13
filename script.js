var calculatorEle = document.body.querySelector(".calculator");
var number1 = Number(prompt("Enter a number."));
if(isNaN(number1)){
   calculatorEle.innerHTML="Value entered for number 1 is not valid.";
}
var number2 = Number(prompt("Enter second number."));
if(isNaN(number2)){
   calculatorEle.innerHTML="Value entered for number 2 is not valid.";
}
var operator=prompt("Enter an operation to be performed. Enter '*','/','+',or'-'.")
if(operator=="*"){
var total= number1*number2;
  document.body.querySelector(".calculator").innerHTML=total;
}else if(operator=="/"){
  var total=number1/number2;
  document.body.querySelector(".calculator").innerHTML=total;
}else if(operator=="+"){
  var total = number1+number2;
  document.body.querySelector(".calculator").innerHTML=total;
}else if(operator=="-"){
  var total=number1-number2;
  document.body.querySelector(".calculator").innerHTML=total;
}else{
  calculatorEle.innerHTML="Operator entered not valid.";
}