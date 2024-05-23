const palindromes = function (str) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    cleanedString = str
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    reverseString = cleanedString
        .split('')
        .reverse()
        .join('');

    if(cleanedString === reverseString) {
        return true;
    }
    return false;
}

// Do not edit below this line
module.exports = palindromes;
