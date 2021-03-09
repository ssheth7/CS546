const axios = require('axios');
async function getPeople() {
    const url = "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json";
    const { data } = await axios.get(url)
    const parsedData = data // parse the data from JSON into a normal JS Object
    return parsedData // this will be the array of people objects
}
async function getPersonById(id) {
    if (!id) {
        throw "id parameter not given";
    }
    if (typeof(id) != 'number') {
        throw "id is not a number";
    }
    const people = await getPeople();
    for (let i = 0; i < people.length; i++) {
        if (people[i]['id'] == id) {
            return people[i];
        }
    }
    throw "ID is not found";
};
async function howManyPerState(stateAbbrv) {
    if (!stateAbbrv) {
        throw "stateAbbrv parameter not given";
    }
    if (typeof(stateAbbrv) !== 'string') {
        throw "Parameter is not an abbreviation";
    }
    if (stateAbbrv.length != 2) {
        throw "Input string is of invalid length";
    }
    const people = await getPeople();
    let result = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i]['address']['state'] === stateAbbrv) {
            result++;
        }
    }
    if (result > 1) {
        return result;
    }
    throw "Invalid state abbreviation";
};
const getAge = function getAge(dob) {
    let current = new Date();
    let age = current.getUTCFullYear() - new Date(dob).getFullYear();
    if (current.getMonth() < new Date(dob).getMonth()) {
        age--;
    } else if (current.getMonth() == new Date(dob).getMonth() && current.getDate() < new Date(dob).getDate()) {
        age--;
    }
    return age;
};
async function personByAge(index) {
    if (typeof(index) !== 'number') {
        throw "Input is not a string";
    }
    const people = await getPeople();
    people.sort((a, b) => {
        return Date.parse(a["date_of_birth"]) - Date.parse(b["date_of_birth"]);
    });
    if (people[index] == undefined) {
        throw "Invalid index";
    }
    let firstName = people[index]["first_name"];
    let lastName = people[index]["last_name"];
    let dob = people[index]["date_of_birth"];
    age = getAge(dob);

    return {
        "first_name": firstName,
        "last_name": lastName,
        "date_of_birth": dob,
        "age": age,
    };
};
async function peopleMetrics() {
    const people = await getPeople();
    let longestName = people[0]['first_name'] + " " + people[0]['last_name'];
    let shortestName = longestName;
    let vowelCount = 0;
    let totalConsonants = 0;
    let ageCount = 0.0;

    let map = {};
    let vowels = /[aeiou]/gi;
    let consonants = /[qwrtyplkjhgfdszxcvbnm]/gi;

    for (let i = 0; i < people.length; i++) {

        let fullName = people[i]["first_name"] + " " + people[i]["last_name"];
        vowelCount += fullName.match(vowels).length;
        totalConsonants += fullName.match(consonants).length;
        if (longestName.length < fullName.length) {
            longestName = fullName;
        } else if (shortestName.length > fullName.length) {
            shortestName = fullName;
        }

        ageCount += getAge(people[i]["date_of_birth"]);

        let city = people[i]['address']['city'];
        if (map[city] == undefined) {
            map[city] = 1;
        } else {
            map[city]++;
        }
    }
    let MostPopularCity = "Durham";
    let keys = Object.keys(map);
    for (let i = 0; i < keys.length; i++) {
        if (map[keys[i]] > map[MostPopularCity]) {
            MostPopularCity = keys[i];
        }
    }
    return {
        'totalLetters': vowelCount + totalConsonants,
        'totalVowels': vowelCount,
        'totalConsonants': totalConsonants,
        'longestName': longestName,
        'shortestName': shortestName,
        'mostRepeatingCity': MostPopularCity,
        'averageAge': (ageCount / people.length).toFixed(0)
    };
};
module.exports = {
    getPeople,
    getPersonById,
    howManyPerState,
    personByAge,
    peopleMetrics
};