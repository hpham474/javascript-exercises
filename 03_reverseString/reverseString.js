const reverseString = function(string) {
    let arrayString = string.split("");
    let result = "";
    for (let i = arrayString.length-1; i >= 0; i--) {
        console.log(i);
        result += arrayString[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
