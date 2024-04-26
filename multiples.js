/**
 * Array of Multiples
 

Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 */


function multiplos (a,b) {
    let arr= [];
    let x= 1;
    for (let i=1; i<=b; i++){
        arr.push(a*x);
        x++;
    }
    return arr;

};

console.log(multiplos(2,10));
console.log(multiplos(17,6));
