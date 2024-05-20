const removeFromArray = function(array, remove1, remove2, remove3, remove4) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === remove1 || array[i] === remove2 || array[i] === remove3 || array[i] === remove4) {
            array.splice(i,1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
