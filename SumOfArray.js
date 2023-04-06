SomeArr = [1, 2, 5, 9, 4]
let sum = 0;
for(let i = 0; i < SomeArr.length; i++) {
    sum += SomeArr[i];
    console.log(sum);
}

// take an array of numbers, 
// where the sum of any two sum to a number(target) outside the arr.
const indexArr = function(arr, target) {

   const result = [];

    for(let i = 0;  i < arr.length;  i++) {
        const remain = target - arr[i];

        for(let j = i + 1;  j < arr.length; j++){
            if(arr[j] === remain){

                result.push(i,j);
                return result;
            }
        }
    }
    return result;
};

const arr = [6, 7, 4, 3, 2, 1, 0];
const target = 10;
const print = indexArr(arr, target);
console.log(print);