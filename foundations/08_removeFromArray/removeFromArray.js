const removeFromArray = function( arr, ...numOptions ) {

    numOptions.forEach( (num) => {
        arr = arr.filter( (item) => item !== num );
    })

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
