function howdy() {
    console.log('Jenna Smith says Hi!');
}

howdy();

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    }
    if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count.");
    }
    if (string.length === 7) {
        console.log('7, what a perfect choice!');
    }
};

console.log(numba('7'));
console.log(numba('seventy'));
console.log(numba('university'));
