// TASK #07:
// Дано трехзначное число. 
// Верно ли, что все его цифры одинаковые? 
// Есть ли среди его цифр одинаковые?

let userNumber = parseInt(prompt('Enter the three-digit number'));

let digit01 = parseInt(userNumber / 100);
let digit02 = parseInt(userNumber / 10 % 10);
let digit03 = parseInt(userNumber % 10);

if (digit01 === digit02 && digit01 === digit03) {
    alert('Entered number: ' + userNumber + '\nThe first digit: ' + digit01 + '\nThe second digit: ' + 
    digit02 + '\nThe third digit: ' + digit03 + '\nDigits status: equal');
} else {
    alert('Entered number: ' + userNumber + '\nThe first digit: ' + digit01 + '\nThe second digit: ' + 
    digit02 + '\nThe third digit: ' + digit03 + '\nDigits status: not equal');
}

if (digit01 === digit02) {
    alert('The first digit: ' + digit01 + ' - is equal to the second digit: ' + digit02);
} else if (digit01 === digit03) {
    alert('The first digit: ' + digit01 + ' - is equal to the third digit: ' + digit03);
} else if (digit02 === digit03) {
    alert('The second digit: ' + digit02 + ' - is equal to the third digit: ' + digit03);
} else {
    alert('There are no equal digits in the number: ' + userNumber);
}
