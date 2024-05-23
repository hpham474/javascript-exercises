const findTheOldest = function(arr) {

    arr.sort((a,b) => {
        const currentYear = new Date().getFullYear();
        const aAge = (a.yearOfDeath === undefined)
            ? currentYear - a.yearOfBirth
            : a.yearOfDeath - a.yearOfBirth;
        const bAge = (b.yearOfDeath === undefined)
            ? currentYear - b.yearOfBirth
            : b.yearOfDeath - b.yearOfBirth;

        if ( aAge > bAge ) {
            return -1;
        }
        if ( aAge === bAge ) {
            return 0;
        }
        if ( aAge < bAge ) {
            return 1;
        }
    });

    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
