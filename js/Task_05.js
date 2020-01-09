// TASK #05:
// Дано двузначное число. 
// Определить, какая из его цифр больше: первая или вторая?

let userNumber = parseInt(prompt('Enter the two-digit number'));
let digit01 = parseInt(userNumber / 10);
let digit02 = parseInt(userNumber % 10);

if (digit01 > digit02) {
    alert('The first digit - ' + digit01 + ' of the number ' + userNumber + ' is larger than the second digit - ' + digit02);
} else {
    alert('The second digit - ' + digit02 + ' of the number ' + userNumber + ' is larger than the first digit - ' + digit01);
}