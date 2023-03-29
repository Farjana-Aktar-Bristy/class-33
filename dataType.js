let a = 25;
// console.log(a);
let b = a;
// console.log(b);
a = 20;
// console.log(a);

let company1 = { job: 'Web Developer' };
let compnay2 = company1;
// console.log(compnay2, company1);
compnay2.job = 'Web Designer';
// console.log(compnay2, company1);


// Statement true and false
let x = 60; //true
x = 0; //false
x = ''; //false
x = ' '; //true
x = undefined; //false
x = null; //false
x = NaN; //false
x = false; //false
x = true;
x = 1; //true
x = -1; //true
x = []; //true
x = {}; //true
x = Symbol; //true



if (x) {
    // console.log("this is true");
}
else {
    // console.log("this is false");
}




let anyNumber;  //undefined
// console.log(anyNumber);

function add(a, b) {
    const sum = a + b;
    return;

}


const sum = add(14, 11);
// console.log(sum);

const num = [10, 15, 60, 20, 25];

// console.log(num[5]);