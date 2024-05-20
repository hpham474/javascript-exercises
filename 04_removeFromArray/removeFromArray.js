const removeFromArray = function(array, ...args) {
    let removedArray = [];
    for(const arr of array) {
        if(!args.includes(arr)) {
            removedArray.push(arr);
        }
    }
    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
