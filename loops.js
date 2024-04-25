/* Calculate the sum of all resistors connected in series. 
`sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
*/

const Resistencias = (array) => {
    let a=0;
    for (let i=0; i< array.length; i++) {
        a += array[i];
    };
    if (a === 1) {
        return a + " ohm";
    } else {
        return a + "ohms";
    }
};

console.log(Resistencias([-1, 5, 6, 3]));
console.log(Resistencias([14,3.5,6]));
console.log(Resistencias([8,15,100]));