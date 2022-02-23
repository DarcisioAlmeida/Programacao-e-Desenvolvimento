// Switch

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+' :
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break;
    }
    return result
}

console.log(calculate(4, '+', 8))

console.log(calculate(8, '-', 2))

console.log(calculate(7, '*', 8))

console.log(calculate(9, '/', 3))