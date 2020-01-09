// TASK #02:
// Известны два расстояния. 
// Одно в километрах, другое - в футах (1 фут = 0,305м). 
// Какое расстояние меньше?

let userDistanceKm = parseInt(prompt('Enter the first distance (km)'));
let userDistanceFt = parseInt(prompt('Enter the second distance (ft)'));

if ((userDistanceKm * 1000) < (userDistanceFt * 0.305)) {
    alert(userDistanceKm + ' km is shorter than ' + userDistanceFt + ' ft');
} else {
    alert(userDistanceFt + ' ft is shorter than ' + userDistanceKm + ' km');
}
