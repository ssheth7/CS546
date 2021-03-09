const axios = require('axios');
const people = require('./people');
async function getPeople() {
    const url = "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json";
    const { data } = await axios.get(url)
    const parsedData = data // parse the data from JSON into a normal JS Object
    return parsedData // this will be the array of people objects
}
async function getCompanies() {
    const url = "https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json";
    const { data } = await axios.get(url)
    const parsedData = data // parse the data from JSON into a normal JS Object
    return parsedData // this will be the array of people objects
}
async function listEmployees() {
    const companies = await getCompanies();
    let res = [];
    for (let i = 0; i < companies.length; i++) {
        let employees = [];
        let obj = { "company_name": companies[i]["company_name"] };
        let ids = companies[i]["employees"];
        for (let j = 0; j < ids.length; j++) {
            const person = await people.getPersonById(ids[j]);
            employee = {
                "first_name": person['first_name'],
                "last_name": person['last_name']
            };
            employees.push(employee);
        }
        obj["employees"] = employees;
        res.push(obj);
    }
    return res;
};
async function fourOneOne(phoneNumber) {
    if (!phoneNumber) {
        throw "Input parameter not given";
    }
    if (typeof(phoneNumber) !== "string") {
        throw "Input parameter is not a string"
    }
    let format = /^[0-9]{3}(-){1}[0-9]{3}(-){1}[0-9]{4}$/;
    if (!format.test(phoneNumber)) {
        throw "Input does not fit format";
    }
    const companies = await getCompanies();
    for (let i = 0; i < companies.length; i++) {
        if (companies[i]["company_phone"] == phoneNumber) {
            return {
                "company_name": companies[i]['company_name'],
                "company_address": companies[i]['company_address'],
            };
        }
    }
    throw "Phone number not found";
};
async function whereDoTheyWork(ssn) {
    if (!ssn) {
        throw "Input parameter not given";
    }
    if (typeof(ssn) !== 'string') {
        throw "Input parameter is not a string";
    }
    let format = /^[0-9]{3}(-){1}[0-9]{2}(-){1}[0-9]{4}$/;
    if (!format.test(ssn)) {
        throw "Input parameter does not match format";
    }

    const people = await getPeople();
    let id = undefined;
    let name = undefined;
    for (let i = 0; i < people.length; i++) {
        if (people[i]['ssn'] === ssn) {
            id = people[i]['id'];
            name = people[i]['first_name'] + " " + people[i]['last_name'];
            break;
        }
    }
    if (!id) {
        throw "ssn is invalid";
    }

    const companies = await getCompanies();
    let company = undefined;
    for (let i = 0; i < companies.length; i++) {
        for (let j = 0; j < companies[i]['employees'].length; j++) {
            if (id == companies[i]['employees'][j]) {
                company = companies[i]["company_name"];
            }
        }
    }
    if (!company) {
        throw "ID does not belong to a company";
    }
    return `${name} works at ${company}.`;
};
module.exports = {
    getPeople,
    getCompanies,
    listEmployees,
    fourOneOne,
    whereDoTheyWork,
};