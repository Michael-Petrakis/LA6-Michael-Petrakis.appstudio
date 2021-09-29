<<<<<<< Updated upstream
function addTwo(n1, n2) { 
  let answer = n1 + n2
  return answer
  }

btnCalculatorAdd.onclick=function(){
  let num1 = Number(inptNumber1.value)
  let num2 = Number(inptNumber2.value)
  names = inptName.value
  lblCalculator.value = names + ", the answer is " + addTwo(num1, num2)
}

function multiplyTwo(n1, n2) { 
  let answer = n1 * n2
  return answer
  }

btnCalculatorMultiply.onclick=function(){
    let num1 = Number(inptNumber1.value)
    let num2 = Number(inptNumber2.value)
    names = inptName.value
    lblCalculator.value = names + ", the answer is " + multiplyTwo(num1, num2)
}

btnReset.onclick=function(){
  lblCalculator.value = ""
  inptNumber1.value = ""
  inptNumber2.value = ""
=======

btnCalculatorAdd.onclick=function(){
  let number1 = inptNumber1.value
  let number2 = inptNumber2.value
  lblCalculator.value = 
>>>>>>> Stashed changes
}
