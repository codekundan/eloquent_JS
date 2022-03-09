let arr = [[1,2,3],[4,5],[6]];

console.log(arr.reduce((previousValue, currentValue) => previousValue.concat(currentValue), [10,9]));

// previousValue takes the empty array [], which is given as initialValue. 
// If no initialValue given, then previousValue takes first value at array index 0. 
// currentValue takes the first value of array at index 0.
//  If no initialValue given, then currentValue takes second value at array index 1. 