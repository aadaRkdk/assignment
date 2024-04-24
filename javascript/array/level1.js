const arr = [3,5,2]

console.log(arr);
//Q1. calculate length of array and console log
//expected output is 3
console.log("the length of array = " +arr.length);

//Q2. reverse the array and console log
//expected output [2,5,3]
const reversearr = arr.reverse();
console.log(reversearr);


//Q3. join the array and console log
// expected output 352
const newarr = arr.join();
console.log(newarr);

//Q4 Remove the last element from the array and log the modified array to the console
const removeLast = arr.pop();
console.log(removeLast);

const num = [6,4,2,8,10,12]
// Q5 Check if all elements in the num  are even. Log "All even" or "Not all even" accordingly.
function isEven(number){
    return (number%2===0);
}
allEven = num.every(isEven);
if(allEven){
    console.log("All even");
}
else{
    console.log("Not all even");
}

//q6. Find the index of a specific element in the array. Log the index to the console. 
//expected output: 3
const allNum = [3, 5, 2, 8, 5];

function findindex(x, searchElement){
    for(let i = 0; i<x.length; i++){
        if(x[i] === searchElement){
            return (i+1);
        }
    }
}
const searchElement = 2;
let indexof2 = findindex(allNum, searchElement);
console.log("Index of 2 = " + indexof2);