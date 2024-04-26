/**
 * Number divided into halves
 */
const n1=4;
const n2 = 10;

function numDiv (num) {
    let res = [];
    const half = num/2;
    res.push(half);
    res.push(half);
    return res;
    
}

console.log(numDiv(n1));
console.log(numDiv(n2));