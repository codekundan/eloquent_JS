function loop(start, test, update, body) {
    for( let i = start; test(i); i = update(i) ) {
        body(i);
    }
}


loop(5, n => n > 0, n => n - 1, console.log);

/* passing console.log() with parenthesis as 4th parameter will not work because function name with parenthesis means calling the function. */