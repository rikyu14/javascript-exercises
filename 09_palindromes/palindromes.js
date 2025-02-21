const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz1234567890';

    const cleaned = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;

// List all characters should be included
// Remove all non-included characters
