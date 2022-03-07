// // Method 1

// function range(start, end, step) {
//     var arr = [];    /* way to declare an array in JS. Array grows dynamically in JS */
//     let length = end - start + 1;
//     for (let i=0; i< length; i++) {
//         arr[i] = start + i;
        
//     }
//     return arr;
// }





// function sum(a,b) {
//     arr2 = range(a,b);
//     let result = 0;
//     for( let i=0; i < arr2.length; i++) {      /* arr2.length is not the length of range function. dot(.)    operator calls the pre-defined .length property of objects  */ 
//         result += arr2[i];
//     }
//     console.log(arr2);
//     return result;
    
// }

// console.log(sum(1,10));



// Method 2

let array = [];

function range( start, end, step = start < end ? 1 : -1) {
    if (step > 0) {
        for( let i = start; i <= end; i = i + step) {array.push(i);}
    }
    else {
        for( let i = start; i >= end; i = i + step) {array.push(i);}
    }
    return array;    
    }

    function sum(array) {
        let result = 0;
        for( let i = 0; i < array.length; i++) {
            result = result + array[i];
        }
        console.log(array);       
        return result; 
    }

    console.log(sum(range(30,2,-2)));