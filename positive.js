/**
 * Positive dominance in Array
 

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`
 */

function positiveDom (array){
    let posDom = 0;
    let negDom= 0;

    array.forEach(element => {
        if (element > 0){
            posDom++;
        }  else if (element< 0){
            negDom++;
        }
    })
     return posDom > negDom};


    console.log(positiveDom([-1, -3, -5, 4, 6767]));