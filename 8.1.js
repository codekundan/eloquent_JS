class MultiplicatorUnitError extends Error {}

function primitiveMultiply(a,b) {
    if( Math.random() < 0.2 ) {
        return a*b
    }
    else {
        throw new MultiplicatorUnitError("error is thrown");
    }
}

function relaibleMultiply(c,d) {
    for(;;) {
        try{
            return primitiveMultiply(c,d);
        }
        catch(e) {
            if( !(e instanceof MultiplicatorUnitError) ) 
            throw e;
        }
    }
}

console.group(relaibleMultiply(8,8));