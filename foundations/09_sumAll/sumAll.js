const sumAll = function(a, b) {
    let sum = 0;
    let startNum = 0;
    let endNum = 0;

    if ( a > b ) {
        startNum = b;
        endNum = a;
    } else {
        startNum = a;
        endNum = b;
    }

    if ( a < 0 || b < 0 ) {
        return "ERROR";
    } else if ( a == "NaN" || b == "NaN" ) {
        return "ERROR";
    } else if ( a !== parseInt(a, 10) || b !== parseInt(b , 10) ) {
        return "ERROR";
    }

    for ( let i = startNum; i <= endNum; i++ ) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
