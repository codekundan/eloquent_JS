// method 1 working

// function reverseArray(arr) {
//     let size = arr.length;
//     let arr2 = [];
//     for (let i = 0; i < size; i++) {
//         element = arr.pop();
//         arr2.push(element);
//     }
//     return arr2;
// }

// console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));

//  Method 2 working

function reverseArray(arr) {
    let arr2 = [];
    for ( let i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    return arr2;
}

console.log(reverseArray([1,2,3,4,5,6]));



// Method 3 not working

// function reverseInPlace(arr3) {
//     let size = arr3.length;
//     for( let i = 0; i < size; i++) {
//        console.log(arr3.length);
        // element = arr3.shift();          /* This function will give same array as output because all values will get loopback and come to their original indices position */
//         console.log(arr3);
//        arr3.push(element);
//        console.log(arr3);    
//     }
//     console.log(arr3);

// }

// Methiod 4

function reverseInPlace(arr3) {
    let element 
    for( let i = 0; i < Math.floor(arr3.length/2); i++)  {
        let element = arr3[i];
        arr3[i] = arr3[arr3.length - 1 - i];
        arr3[arr3.length -1 -i] = element;
    }
    return arr3;
}

console.log(reverseInPlace([1,2,3,4,5,6]));