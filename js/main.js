var buttons = document.getElementsByClassName('numbers')
var operations = document.getElementsByClassName ('operations')
var input = document.getElementById ('insert-numbers')
var deleteInput = document.getElementById('delete')

function addNumber1 (){
    input.value += buttons[0].value       
}
function addNumber2 (){
    input.value += buttons[1].value       
}
function addNumber3 (){
    input.value += buttons[2].value       
}
function addNumber4 (){
    input.value += buttons[3].value       
}
function addNumber5 (){
    input.value += buttons[4].value       
}
function addNumber6 (){
    input.value += buttons[5].value       
}
function addNumber7 (){
    input.value += buttons[6].value       
}
function addNumber8 (){
    input.value += buttons[7].value       
}
function addNumber9 (){
    input.value += buttons[8].value       
}
function addNumber0(){
    input.value += buttons[9].value
}
function addition (){
    input.value += operations[0].value
}
function multiply (){
    input.value += operations[1].value
}
function subtraction (){
    input.value += operations[2].value
}
function division (){
    input.value += operations[3].value
}
function finishOperation (){
    input.value = eval(input.value)
}
function deleteIn (){
    input.value = null
}

operations[0].addEventListener('click', addition)
operations[1].addEventListener('click', multiply)
operations[2].addEventListener('click',subtraction)
operations[3].addEventListener('click', division)
operations[4].addEventListener ('click', finishOperation)
deleteInput.addEventListener ('click', deleteIn)
