// First part

// function countBs(txt) {
//     let count = 0;
//     for(let i=0; i < txt.length; i++) {
//         if(txt[i]== "B") {count++;}
//     }
//     return count;
// }

function countBs(str) {
    return countChar(str, "B");
}

function countChar(txt, userChar) {
    let count = 0;
    for( let i=0; i< txt.length; i++) {
        if(txt[i]== userChar) {count++;}
    }
    return count;
}

console.log(countChar("BBKJHKHhlajldsjsal;dnlBJBLHDLKhjsaljas;dk;asBHBJHGJH", "B"));
console.log(countBs("BBKJHKHhlajldsjsal;dnlBJBLHDLKhjsaljas;dk;asBHBJHGJH"));