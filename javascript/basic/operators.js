
//q1. create two constants, add them assign to a new constants
const x = 'abc';
const y = 'def';
const z = x + y;
console.log(z);

//q2. Check below code, output should be false by comparing. console.log the answer
const a = 10
const b = '10'

console.log(a===b);

//q3. generate a random number between 0 and 5, if it is lesser than 3, console.log "lesser than 3" else "Greater"
const num = Math.floor(Math.random()*6);
if(num<3){
    console.log("less than 3.");
}
else{
    console.log("greater or equal to 3.");
}
