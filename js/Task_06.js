// TASK #06:
// Дано трехзначное число. 
// Определить является ли четной сумма его цифр. 
// Определить, кратна ли сумма его цифр пяти. 
// Определить является ли произведение его цифр больше 100.

let userNumber = parseInt(prompt('Enter the three-digit number'));

let digit01 = parseInt(userNumber / 100);
let digit02 = parseInt((userNumber / 10) % 10);
let digit03 = parseInt(userNumber % 10);
let sum = digit01 + digit02 + digit03;
let product = digit01 * digit02 * digit03;

if (sum % 2 === 0) {
    alert('Entered number: ' + userNumber + '\nThe first digit: ' + digit01 + '\nThe second digit: ' + digit02 + 
    '\nThe third digit: ' + digit03 + '\nThe sum of the digits: ' + sum + '\nThe sum status: even');
} else {
    alert('Entered number: ' + userNumber + '\nIts first digit: ' + digit01 + '\nIts second digit: ' + digit02 + 
    '\nIts third digit: ' + digit03 + '\nThe sum of the digits: ' + sum + '\nThe sum status: odd');
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


