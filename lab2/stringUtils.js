const camelCase = function camelCase(string = '') {
    if (typeof(string) != 'string') {
        throw "Input is not a string";
    }
    if (string.trim().length <= 0) {
        throw "Input string is too small"
    }
    string = string.trim();
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == ' ') {
            if (string.charAt(i + 1) != ' ') {
                result += string.charAt(i + 1).toUpperCase();
                i++;
                continue;
            } else {
                continue;
            }
        }
        result += string.charAt(i).toLowerCase();
    }
    return result;
};
const replaceChar = function replaceChar(string = "") {
    if (typeof(string) != 'string') {
        throw "Input string is not a string";
    }
    if (string.trim().length <= 0) {
        throw "Input string is too small";
    }
    string = string.trim()
    let result = string.charAt(0);
    let special = result;
    let astrk = true;
    for (let i = 1; i < string.length; i++) {
        if (string.charAt(i).toUpperCase() == special.toUpperCase() && astrk) {
            astrk = !astrk;
            result += '*';
        } else if (string.charAt(i).toUpperCase() == special.toUpperCase() && !astrk) {
            astrk = !astrk;
            result += '$';
        } else {
            result += string.charAt(i);
        }
    }
    return result;
};
const mashUp = function mashUp(string1, string2) {
    if (typeof(string1) != 'string' || typeof(string2) != 'string') {
        throw "input is not a string";
    }
    if (string1.trim().length <= 1 || string2.trim().length <= 1) {
        throw "An input string is too small"
    }
    string1 = string1.trim();
    string2 = string2.trim();
    let first = string2.substr(0, 2) + string1.substr(2);
    let second = string1.substr(0, 2) + string2.substr(2);
    return first + " " + second;
};
module.exports = {
    camelCase,
    replaceChar,
    mashUp
}