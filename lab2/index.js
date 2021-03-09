const ArrayUtils = require("./arrayUtils");
const StringUtils = require("./stringUtils");
const objUtils = require("./objUtils")
console.log("Testing ArrayUtils");
console.log("Testing mean");
try {
    console.log("\tTesting success");
    let meanOne = ArrayUtils.mean([9999, 1111, 5432, 6453]);
    console.log('\t' + meanOne);
    console.log("\tMean passed test case ");
} catch (e) {
    console.error("\tMean failed test case " + e);
}

try {
    console.log("\tTesting fail");
    const meanTwo = ArrayUtils.mean([]);
    console.log("\tMean passed test case ");
} catch (e) {
    console.error("\tMean failed test case " + e);
}

console.log("Testing medianSquared");
try {
    console.log("\tTesting success");
    const medianOne = ArrayUtils.medianSquared([1, 2, 4, 6, 7, 8, 9, 14]);
    console.log('\t' + medianOne);
    console.log("\tMediansquared passed test case ");
} catch (e) {
    console.error("\tMediansquared failed test case " + e);
}

try {
    console.log("\tTesting fail");
    const medianTwo = ArrayUtils.medianSquared(["nonsense", 1, null, "apple"]);
    console.log("\tMediansquared passed test case ");
} catch (e) {
    console.error("\tMediansquared failed test case " + e);
}

console.log("Testing maxElement");
try {
    console.log("\tTesting success");
    const maxElementOne = ArrayUtils.maxElement([-5, -6, -7]);
    console.log('\t' + JSON.stringify(maxElementOne));
    console.log("\tmaxElement passed test case ");
} catch (e) {
    console.error("\tmaxElement failed test case " + e);
}

try {
    console.log("\tTesting fail");
    const maxElementTwo = ArrayUtils.maxElement([1, 2, '']);
    console.log("\tmaxElement passed test case ");
} catch (e) {
    console.error("\tmaxElement failed test case " + e);
}

console.log("Testing fill");
try {
    console.log("\tTesting success");
    const fillOne = ArrayUtils.fill(5, '10');
    console.log('\t' + fillOne);
    console.log('\tFill passed test case');
} catch (e) {
    console.error("\tFill failed test case " + e);
}

try {
    console.log("\tTesting fail");
    const fillTwo = ArrayUtils.fill();
    console.log('\tFill passed test case');
} catch (e) {
    console.error("\tFill failed test case " + e);
}

console.log("Testing countRepeating");
try {
    console.log("\tTesting success");
    let countOne = ArrayUtils.countRepeating(['5', 5, '1', '1', "1", 1, '2', '2']);
    console.log('\t' + JSON.stringify(countOne));
    console.log('\tcountRepeating passed test case');
} catch (e) {
    console.error("\tcountRepeating failed test case " + e);
}

try {
    console.log("\tTesting fail");
    const countTwo = ArrayUtils.mean([7, '7', 13, true, , 6]);
    console.log('\tcountRepeating passed test case');
} catch (e) {
    console.error("\tcountRepeating failed test case " + e);
}

console.log("Testing isEqual");
try {
    console.log("\tTesting success");
    const isEqualOne = ArrayUtils.isEqual([
        [0],
        [1, 2],
        ["3", "4"]
    ], [
        [2, 1],
        ["4", "3"],
        [0]
    ]);
    console.log('\t' + isEqualOne);
    console.log('\tisEqual passed test case');
} catch (e) {
    console.error("\tisEqual failed test case " + e);
}

try {
    console.log("\tTesting fail");
    const isEqualTwo = ArrayUtils.isEqual([1, 3, null], [1, 2, 3, 4]);
    if (!isEqualTwo) {
        throw "";
    }
    console.log('\tisEqual passed test case');
} catch (e) {
    console.error("\tisEqual failed test case");
}

console.log("Testing StringUtils");
console.log("Testing camelCase");
try {
    console.log("\tTesting success");
    const camelCaseOne = StringUtils.camelCase(' Hello How are you');
    console.log('\t' + JSON.stringify(camelCaseOne));
    console.log('\tcamelCase passed test case');
} catch (e) {
    console.error("\tcamelCase failed test case " + e);
}

try {
    console.log("\tTesting fail");
    const camelCaseTwo = StringUtils.camelCase(["ba", 'ab']);
    console.log('\tisEqual passed test case');
} catch (e) {
    console.error("\tisEqual failed test case " + e);
}

console.log("Testing replaceChar");
try {
    console.log("\tTesting success");
    let replaceCharOne = StringUtils.replaceChar(" Hello How are you");
    console.log('\t' + JSON.stringify(replaceCharOne));
    console.log('\treplaceChar passed test case');
} catch (e) {
    console.error("\treplaceChar failed test case " + e);
}

try {
    console.log("\tTesting fail");
    const replaceCharTwo = StringUtils.replaceChar([1234], ['123']);
    console.log('\treplaceChar passed test case');
} catch (e) {
    console.error("\treplaceChar failed test case " + e);
}

console.log("Testing mashUp");
try {
    console.log("\tTesting success");
    const mashUpOne = StringUtils.mashUp("ba", "ab");
    console.log('\t' + mashUpOne);
    console.log('\tmashUp passed test case');
} catch (e) {
    console.error("\tmashUp failed test case " + e);
}

try {
    console.log("\tTesting fail");
    const mashUpTwo = StringUtils.mashUp("h", "asdfghjkqwertyui");
    console.log('\tmashUp passed test case');
} catch (e) {
    console.error("\tmashUp failed test case " + e);
}
console.log("Testing objUtils");
console.log("Testing makeArrays");
let first = { x: 0 };
let second = { a: 20, b: 9999 };
try {
    console.log("\tTesting success");
    const makeArraysOne = objUtils.makeArrays([first, second]);
    console.log('\t' + makeArraysOne);
    console.log('\tmakeArrays passed test case');
} catch (e) {
    console.error("\tmakeArrays failed test case " + e);
}

try {
    console.log("\tTesting fail");
    const makeArraysTwo = objUtils.makeArrays([{}, {}]);
    console.log('\tmakeArrays passed test case');
} catch (e) {
    console.error("\tmakeArrays failed test case " + e);
}

console.log("Testing isDeepEqual");
first = { a: { b: { c: { d: 5 } } } };
second = { a: { b: { c: { d: 5 } } } };
try {
    console.log("\tTesting success");
    const isDeepEqualOne = objUtils.isDeepEqual(first, second);
    console.log('\t' + isDeepEqualOne);
    console.log('\tisDeepEqual passed test case');
} catch (e) {
    console.error("\tisDeepEqual failed test case " + e);
}

try {
    console.log("\tTesting fail");
    if (!objUtils.isDeepEqual(second)) {
        throw "Input returned false";
    }
} catch (e) {
    console.error("\tisDeepEqual failed test case " + e);
}

console.log("Testing computeObject");
try {
    console.log("\tTesting success");
    const computeObjectOne = objUtils.computeObject({ A: 0, a: 99999, b: 1 }, n => n * n);
    console.log('\t' + JSON.stringify(computeObjectOne));
    console.log('\tcomputeObject passed test case');
} catch (e) {
    console.error("\tcomputeObject failed test case " + e);
}

try {
    console.log("\tTesting fail");
    objUtils.computeObject({ a: 6 }, n => { n: 1 });
} catch (e) {
    console.error("\tcomputeObject failed test case " + e);
}