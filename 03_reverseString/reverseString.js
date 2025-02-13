const reverseString = function(word) {
    let reverseText = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseText += word[i];
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
