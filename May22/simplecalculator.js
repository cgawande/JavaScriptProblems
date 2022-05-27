//write program for simple calculator
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

function cal(operator, num1, num2) {
    switch (operator) {
        case '-':
            return (num1 - num2);
            break;
        case '+':
            return (num1 + num2);
            break;
        case '*':
            return (num1 * num2);
            break;
        case '/':
            return (num1 / num2);
            break;
        default:
            console.log('Invalid operator');

    }
}
cal(operator, num1, num2)