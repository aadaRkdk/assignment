const arr =  [3,5,2]
//q1. console.log the maximum number of an array
//expectedd output 5
const maxnum = Math.max(...arr);
console.log(maxnum);

//q2. Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]
const elementToRemove = 2;
let modifiedarr = arr.pop();
console.log("removed element = " + modifiedarr);
console.log(arr);

//q3. Multiply each element of the array by a constant value 5 and log the modified array to the console.
//expected output [15,10]
const value = 5;
let multipliedArr = arr.map(element => {
   return element*value;
});
console.log(multipliedArr);

//q4. find intersection (common elements) of arr and arr2
//expected output: [5]
const arr2 = [5,21,32, 10]

function commonElement(arrx, arry){
    const commonnum = [];
    for(let i = 0; i<arrx.length; i++){{
        for(let j = 0; j<arry.length; j++){
            if(arrx[i] === arry[j]){
                commonnum.push(arrx[i]);
                break;
            }
        }
        }
    }
    return commonnum;
 }

let x = commonElement(arr, arr2);
console.log(x);