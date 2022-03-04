// Method 1

// let height, width;
// height = 8;
// width = 4;

// for( let i = " #"; i.length < height ; i++) {
//     if(i%2==0) {
//         console.log(" #".repeat(width));
//     }
//     else {
//         console.log("# ".repeat(width));
//     }
// }

// Method 2

let size = 8;
let board = "";

for( let i = 0; i < size; i++) {
    for( let j = 0; j < size; j++) {
        if( (i+j)%2 == 0 ) {
            board += " ";
        }
        else {
            board += "#";
        }
       
    }
    board += "\n";
}
console.log(board);