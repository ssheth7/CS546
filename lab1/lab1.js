const questionOne = function questionOne(arr = []) {
    // Implement question 1 here
    let isPrime = (num) => {
        if (num <= 1) {
            return false;
        }

        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    };
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let prime = isPrime(arr[i]);
        result[arr[i]] = prime;
    }
    return result;
}

const questionTwo = function questionTwo(arr = []) {
    // Implement question 2 here
    if (arr.length == 0) {
        return 0;
    }
    let sum = arr.reduce((a, b) => a + Math.pow(b, 2), 0);
    return Number(Math.sqrt(Math.pow(sum, 5)).toFixed(2));

}

const questionThree = function questionThree(text) {
    console.log(text);
    // Implement question 3 here
    result = {
        "consonants": 0,
        "vowels": 0,
        "numbers": 0,
        "spaces": 0,
        "punctuation": 0,
        "specialCharacters": 0
    };

    let punctuation = /[\.!,;():'\[\]"{}\-\?]/;
    let vowels = /[aeiou]/i;
    let special = /[\\@#<>\$%\^&\*\|_=\+`~\/]/;
    let numbers = /[0-9]/;
    let consonants = /[qwrtyplkjhgfdszxcvbnm]/i;
    let spaces = /\s/;
    for (let i = 0; i < text.length; i++) {
        let current = text.charAt(i);
        if (current.match(consonants)) result["consonants"]++;
        else if (current.match(vowels)) result["vowels"]++;
        else if (current.match(numbers)) result["numbers"]++;
        else if (current.match(spaces)) result["spaces"]++;
        else if (current.match(special)) result["specialCharacters"]++;
        else if (current.match(punctuation)) {
            result["punctuation"]++;
        }
    }
    return result;
}

const questionFour = function questionFour(loanAmount, rate, years) {
    // Implement question 4 here
    let i = rate / 100;
    let payment = loanAmount * (i / 12);
    payment /= (1 - Math.pow(1 + (i / 12), (-years * 12)));
    return Number(payment.toFixed(2));
}

module.exports = {
    firstName: "Shivam",
    lastName: "Sheth",
    studentId: "10435941",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};