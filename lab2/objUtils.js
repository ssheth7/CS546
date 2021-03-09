const makeArrays = function makeArrays(objects) {
    if (!Array.isArray(objects)) {
        throw "Input is not an array";
    }
    let result = [];
    for (let k in objects) {
        if (typeof(objects[k]) !== 'object' || objects[k] == null || objects[k] == undefined || Object.entries(objects[k]).length == 0) {
            throw "Input array contains a bad object";
        }
        for (const [key, value] of Object.entries(objects[k])) {
            result.push([key, value]);
        }

    }
    return result;
};
const helper = function helper(object, arr) {
    for (let k in object) {
        if (typeof(object[k]) === 'object') {
            helper(object[k], arr);
        } else {
            arr.push([k, object[k]]);
        }
    }
}
const isDeepEqual = function isDeepEqual(obj1, obj2) {
    if (obj1 === undefined || obj2 === undefined) {
        throw "Input Objects are not provided";
    }
    if (typeof(obj1) !== 'object' || typeof(obj2) !== 'object') {
        throw "One or both of the inputs is not an object";
    }
    let arr1 = [];
    let arr2 = [];
    helper(obj1, arr1);
    helper(obj2, arr2);
    arr1.sort();
    arr2.sort();
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i][0] !== arr2[i][0] || arr1[i][1] !== arr2[i][1]) {
            return false;
        }
    }
    return true;
};
const computeObject = function computeObject(object, func) {
    if (object === undefined || func === undefined) {
        throw "One of the inputs are not provided";
    }
    if (typeof(object) !== 'object') {
        throw "First parameter is not an object";
    }
    if (typeof(func) !== 'function') {
        throw "Function parameter is non a function";
    }
    if (Object.entries(object).length == 0) {
        throw "Input object is empty";
    }
    for (k in object) {
        if (typeof(object[k]) != 'number') {
            throw "Object contains nonnumber value";
        }
        let result = func(object[k]);
        if (result == null || result == undefined || typeof(result) !== 'number') {
            throw "Function returned non Number";
        }
        object[k] = result;
    }
    return object;
};

module.exports = {
    makeArrays,
    isDeepEqual,
    computeObject
}