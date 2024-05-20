const sumAll = function(num1, num2) {
    if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    larger = 0;
    smaller = 0;
    if (num1 > num2) {
        larger = num1;
        smaller = num2;
    }
    else {
        larger = num2;
        smaller = num1;
    }

    let sum = 0;

    for(let i = smaller; i <= larger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
