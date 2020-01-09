// TASK #07:
// Дано трехзначное число. 
// Верно ли, что все его цифры одинаковые? 
// Есть ли среди его цифр одинаковые?

let userNumber = parseInt(prompt('Enter the three-digit number'));

let firstDigit = parseInt(userNumber / 100);
let secondDigit = parseInt(userNumber / 10 % 10);
let thirdDigit = parseInt(userNumber % 10);

if (firstDigit === secondDigit && firstDigit === thirdDigit) {
    alert('Entered number: ' + userNumber + '\nThe first digit: ' + firstDigit +
    '\nThe second digit: ' + secondDigit + '\nThe third digit: ' + thirdDigit +
    '\nDigits status: equal');
} else {
    alert('Entered number: ' + userNumber + '\nThe first digit: ' + firstDigit +
    '\nThe second digit: ' + secondDigit + '\nThe third digit: ' + thirdDigit +
    '\nDigits status: not equal');
}

if (firstDigit === secondDigit) {
    alert('The first digit: ' + firstDigit + ' - is equal to the second digit: ' + secondDigit);
} else if (firstDigit === thirdDigit) {
    alert('The first digit: ' + firstDigit + ' - is equal to the third digit: ' + thirdDigit);
} else if (secondDigit === thirdDigit) {
    alert('The second digit: ' + secondDigit + ' - is equal to the third digit: ' + thirdDigit);
} else {
    alert('There are no equal digits in the number: ' + userNumber);
}
