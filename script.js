const display = document.getElementById("display");

function appendValue(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){

try{

let expression = display.value;
let result = eval(expression);

display.value = result;

let history = document.getElementById("historyList");

let item = document.createElement("li");
item.textContent = expression + " = " + result;

history.prepend(item);

}
catch{
display.value = "Error";
}
}

function squareRoot(){

try{
display.value = Math.sqrt(eval(display.value));
}
catch{
display.value = "Error";
}

}

function toggleTheme(){
document.body.classList.toggle("light");
}

document.addEventListener("keydown",(event)=>{

const key = event.key;

if(!isNaN(key) || "+-*/.%".includes(key)){
appendValue(key);
}

else if(key==="Enter"){
calculate();
}

else if(key==="Backspace"){
deleteLast();
}

else if(key==="Escape"){
clearDisplay();
}

});