// Method 1
// function every(arr, func) {
//   for ( let i of arr) {
//     if(!func(i)) return false;
//   }
//   return true;
// }

// console.log(every([1,2,3,4,5], n => n > 10));


//  Method 2 

function every(arr, func) {
  return !arr.some(element => !func(element));
}

console.log(every([1,2,3,4,5], n => n < 6));

//  In method 2, we cannot write some(!func(element)) because compiler will return parameter element not defined. 
//  So pass element as argument i.e. some( element => !func(element)) 
    