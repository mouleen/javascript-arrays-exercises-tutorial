let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item) => {
            // magic goes inside these brackets
            return_array.push((item === 0 )? 'Yahoo' : item);
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));
