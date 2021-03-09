const mean = function mean(array = []) {
    if (!Array.isArray(array)) {
        throw "Input is not an array";
    }
    if (array.length == 0) {
        throw "Input array is of length 0";
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) != 'number') {
            throw "Input contains a non number";
        }
        sum += array[i];
    }
    return sum / array.length;
};
const medianSquared = function medianSquared(array = []) {
    if (!Array.isArray(array)) {
        throw "Input is not an array";
    }
    if (array.length == 0) {
        throw "Input array is of length 0";
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) != 'number') {
            throw "Input contains a non number";
        }
    }
    array.sort();
    if (array.length % 2 == 1) {
        return Math.pow(array[Math.floor(array.length / 2)], 2)
    }
    let first = array[array.length / 2 + 1];
    let second = array[array.length / 2];
    return Math.pow((first + second) / 2, 2);
};
const maxElement = function maxElement(array) {
    if (!Array.isArray(array)) {
        throw "Input is not an array";
    }
    if (array.length == 0) {
        throw "Input array is of length 0";
    }
    let max = array[0];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) != 'number') {
            throw "Input array contains non number";
        }
        if (array[i] > max) {
            max = array[i];
            index = i;
        }
    }
    let result = {};
    result[max] = index;
    return result;
};
const fill = function fill(end = -1, value) {
    if (typeof(end) != "number" || end < 1 || end % 1 != 0) {
        throw "Invalid end value";
    }
    let result = [];
    for (let i = 0; i < end; i++) {
        if (value == undefined) {
            result[i] = i;
        } else {
            result[i] = value;
        }
    }
    return result;

};
const countRepeating = function Repeating(array = []) {
    if (!Array.isArray(array) || array.includes(undefined) || array.includes(null)) {
        throw "Invalid array input";
    }
    if (array == []) {
        return {};
    }
    array.sort();
    result = {};
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1]) {
            count++;
        } else {
            if (count != 0) {
                result[array[i]] = count + 1;
                count = 0;
            }
        }
    }
    return result;
};
const isEqual = function isEqual(arrayOne, arrayTwo) {
    if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo) || arrayOne.length != arrayTwo.length) {
        return false;
    }
    arrayOne.sort();
    arrayTwo.sort();
    if (arrayOne === arrayTwo) {
        return true;
    }
    for (let i = 0; i < arrayOne.length; i++) {
        if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo)) {
            if (!isEqual(arrayOne[i].sort(), arrayTwo[i].sort())) {
                return false;
            } else {
                continue;
            }
        }
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return true;
};
module.exports = {
    mean,
    medianSquared,
    maxElement,
    fill,
    countRepeating,
    isEqual
};