document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.setAttribute("onclick", "input(this)");
    })    
})

const operations = ["+", "-", "*", "/"];
let currentVariable = "";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        alert("Cant divide by 0 silly!");
        return;
    }
    return Math.round(num1 / num2 * 100) / 100;
}

function operate(symbol, num1, num2) {
    let result = 0;
    let operation = null;
    switch (symbol){
        case "+":
            operation = add;
            break;
        case "-":
            operation = subtract;
            break;
        case "*": 
            operation = multiply;
            break;
        case "/": 
            operation = divide;
            break;
    }
    result = operation(+num1, +num2);
    return result    
}

function solve() {

    let length = currentVariable.length;

    let num1 = null;
    let symbolIndex = 0;
    let symbol = "";
    for (let i = 0; i < length; i++){
        if ( i == length - 1){
            let num2 = currentVariable.slice(symbolIndex + 1, i + 1);
            if (num2.length == 0 || num1 == null) return;
            num1 = operate(symbol, num1, num2);  
        }
        if (operations.includes(currentVariable[i])){
            if (num1 === null) {
                num1 = currentVariable.slice(0, i);
            }else {
                let num2 = currentVariable.slice(symbolIndex + 1, i);
                console.log(symbol, num1, num2);
                num1 = operate(symbol, num1, num2);
            }
            symbol = currentVariable[i];
            symbolIndex = i;
        }
    }

    currentVariable = num1.toString();
    update();
}

function input(element){
    let text = element.innerText;

    if (text == "Clear") {
        currentVariable = "";
        update();
        return;
    };

    if (text == "=") {
        solve();
        return;
    }

    if (text == "." && currentVariable.includes(".")){
        return
    }

    if (text == "Remove") {
        console.log(currentVariable)
        currentVariable = currentVariable.slice(0, -1);
    } else {
        if (operations.includes(currentVariable[currentVariable.length - 1]) && operations.includes(text)) {
            currentVariable = currentVariable.slice(0, -1)
        }
        currentVariable += text;
    }
    update();
}

function update(){
    let display = document.querySelector("#currentVariable");
    display.innerHTML = currentVariable;

}