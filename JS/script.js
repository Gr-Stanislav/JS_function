const a = parseInt(prompt ("Ширина триугольникао:"));
const h = parseInt(prompt ("Высота триугольника:"));
let s;


function define() {
    s = (a * h) / 2;
    alert ("Площадь треугольника: " + s + " см. куб");
}

define();