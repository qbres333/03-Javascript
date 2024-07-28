// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(num) {
    const numType = [`even`, `odd`];
    if(num % 2 === 0) {
        // console.log(numType[0]);
        return numType[0];
    }
    else {
        // console.log(numType[1]);
        return numType[1];
    }
};

console.log(oddOrEven(38));