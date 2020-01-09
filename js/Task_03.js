// TASK #03:
// Определить, является ли число 'a' делителем числа 'b' ? И наоборот. (Дать два ответа).

let userNumber01 = parseInt(prompt('Enter the first number'));
let userNumber02 = parseInt(prompt('Enter the second number'));

if (userNumber01 % userNumber02 === 0) {
    alert(userNumber02 + ' is a divider of ' + userNumber01);
} else {
    alert(userNumber02 + ' is not a divider of ' + userNumber01);
}

if (userNumber02 % userNumber01 === 0) {
    alert(userNumber01 + ' is a divider of ' + userNumber02);
} else {
    alert(userNumber01 + ' is not a divider of ' + userNumber02);
}

