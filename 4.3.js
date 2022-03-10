//  Method 1

function arrayToList(arr) {
    let list = {
     value : 1,
     rest : {
         value : 2,
         rest : {
             value : 3,
             rest : null
         }
     }   
    }

}

console.log(arrayToList([1,2,3]));