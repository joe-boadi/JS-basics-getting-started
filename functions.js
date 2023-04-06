function addition(num1,  num2){
    add = num1 + num2;
    return add;
}

function introduction(name){
    return `${name} welcome to cohort 1.0`;
}


var person = {
        name: "Joe"
    }

var math = addition(10, 20);
var welcome = introduction("joe Boadi Dev");
console.log(`${welcome} \nyour office is on the ${math}th floor`);

// built-in functions. and more on 
// "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
console.log(Object.keys(person));
console.log(Object.values(person));