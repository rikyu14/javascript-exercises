const fibonacci = function(n) {

    n = Number(n);

    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
        return 'OOPS';
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    let first = 0;
    let second = 1;
    for (let i = 2; i <= n; i++) {
        let temp = first + second;
        first = second;
        second = temp;
    }

    return second;
};

// Do not edit below this line
module.exports = fibonacci;
