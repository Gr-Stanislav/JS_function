
const numOne = parseInt(prompt("Первое число:"));
const numTwo = parseInt(prompt("Второе число:"));

function define() {
    if (numOne > numTwo) {
        let a = 1;
        alert (a);
    } else if (numOne < numTwo) {
        let b = -1;
        alert (b);
    } else {
        alert (0);
    }
}

define();