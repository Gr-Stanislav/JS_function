const a = parseInt(prompt ("Факториал числа:"));
let result = 1;


function factorial(a) {
    while (a) {
        result *= a--;
    }
    return result;
}

alert (factorial(a));
