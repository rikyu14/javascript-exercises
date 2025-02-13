const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || 
        end < 0 ||
        Math.floor(start) !== start ||
        Math.floor(end) !== end
     ) {
        return "ERROR";
    } else if (start < end) {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    } else if (start > end) {
        for (let i = start; i >= end; i--) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
