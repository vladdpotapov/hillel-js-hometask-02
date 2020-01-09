// TASK #08:
// Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)

let userNumber = parseInt(prompt('Enter the six-digit number'));

let digit01 = parseInt(userNumber / 100000);
let digit02 = parseInt(userNumber / 10000 % 10);
let digit03 = parseInt(userNumber / 1000 % 10);
let digit04 = parseInt(userNumber / 100 % 10);
let digit05 = parseInt(userNumber / 10 % 10);
let digit06 = parseInt(userNumber % 10);

if (digit01 === digit06 && digit02 === digit05 && digit03 === digit04) {
    alert('The number ' + userNumber + ' - is specular');
} else {
    alert('The number ' + userNumber + ' - is not specular');
}
