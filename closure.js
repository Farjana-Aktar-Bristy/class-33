// A closure is the combination of a function bundled together
// (enclosed) with references to its surrounding state (the lexical environment)


function stopwatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

let time = stopwatch();
console.log(time());
console.log(time());
console.log(time());


