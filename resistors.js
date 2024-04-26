
/* Suma de resistencias */
// [X] Preparar constantes
// [X]Declarar función para aceptar un arr por parámetro
// [X]Loop por el arr
// Tomar el valor absoluto de cada elemento
// Sumar todos los valores absolutos del array

const res1=[-1, 5, 6,3];
const res2 =[14, 3.5, 6];
const res3=[8,15,100];

function sumResistencia (arr){
    const arr2=[];
    let res= 0;
    arr.forEach((e) => arr2.push(Math.abs(e)));
    arr2.forEach((e) => ( res=res + e ));
    console.log(`${res} ohms`);

}

sumResistencia(res1);
sumResistencia(res2);
sumResistencia(res3);



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
