// TASK #05:
// Дано двузначное число. 
// Определить, какая из его цифр больше: первая или вторая?

let userNumber = parseInt(prompt('Enter the two-digit number'));
let firstDigit = parseInt(userNumber / 10);
let secondDigit = parseInt(userNumber % 10);

if (firstDigit > secondDigit) {
    alert('The first digit - ' + firstDigit + ' of the number ' + userNumber + ' is larger than the second digit - ' + secondDigit);
} else {
    alert('The second digit - ' + secondDigit + ' of the number ' + userNumber + ' is larger than the first digit - ' + firstDigit);
}