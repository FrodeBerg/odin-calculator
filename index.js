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
    return num1 / num2;
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
    result = operation(num1, num2);
    return result    
}