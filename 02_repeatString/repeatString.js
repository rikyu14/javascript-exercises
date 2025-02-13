const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let input = "";
    for (let i = 0; i < num; i++) {
        input += string;
    }
    return input;
}

// Do not edit below this line
module.exports = repeatString;
