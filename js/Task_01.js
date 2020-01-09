// TASK #01:
// Даны два различных числа. Определить какое из них больше, а какое меньше.

let number01 = parseInt(prompt('Enter the first number'));
let number02 = parseInt(prompt('Enter the second number'));

if (number01 > number02) {
    alert('Number ' + number01 + ' is larger than ' + 'number ' + number02);
} else if (number02 > number01) {
    alert('Number ' + number02 + ' is larger than ' + 'number ' + number01);
} else {
    alert('Number ' + number01 + ' is equal to ' + 'number ' + number02);
}