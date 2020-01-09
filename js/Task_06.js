// TASK #06:
// Дано трехзначное число. 
// Определить является ли четной сумма его цифр. 
// Определить, кратна ли сумма его цифр пяти. 
// Определить является ли произведение его цифр больше 100.

let userNumber = parseInt(prompt('Enter the three-digit number'));

let firstDigit = parseInt(userNumber / 100);
let secondDigit = parseInt((userNumber / 10) % 10);
let thirdDigit = parseInt(userNumber % 10);
let sum = firstDigit + secondDigit + thirdDigit;
let product = firstDigit * secondDigit * thirdDigit;

if (sum % 2 === 0) {
    alert('Entered number: ' + userNumber + '\nThe first digit: ' + firstDigit + 
    '\nThe second digit: ' + secondDigit + '\nThe third digit: ' + thirdDigit +
    '\nThe sum of the digits: ' + sum + '\nThe sum status: even');
} else {
    alert('Entered number: ' + userNumber + '\nIts first digit: ' + firstDigit + 
    '\nIts second digit: ' + secondDigit + '\nIts third digit: ' + thirdDigit +
    '\nThe sum of the digits: ' + sum + '\nThe sum status: odd');
}

if (sum % 5 === 0) {
    alert('The sum: ' + sum + ' - is mutliple to 5');
} else {
    alert('The sum: ' + sum + ' - is not mutliple to 5')
}

if (product > 100) {
    alert('The product: ' + product + ' - is larger than 100'); 
} else {
    alert('The product: ' + product + ' - is not larger than 100')
} 


