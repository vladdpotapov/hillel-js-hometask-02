// TASK #04:
// Дано число. Определить, заканчивается оно четной цифрой или нечетной? 
// Вывести последнюю цифру.

let userNumber = parseInt(prompt('Enter the number'));
let lastFigure = parseInt(userNumber % 10);

if (lastFigure % 2 === 0) {
    alert('The last figure - ' + lastFigure + ' of the number ' + userNumber + ' is even');
} else {
    alert('The last figure - ' + lastFigure + ' of the number ' + userNumber + ' is odd');
}