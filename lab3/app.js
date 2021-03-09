const people = require("./people");
const work = require("./work");
async function main() {
    console.log("Testing getPersonbyID")
    try {
        const peopledata = await people.getPersonById(43);
        console.log(peopledata);
    } catch (e) {
        console.log(e);
    }

    console.log("Testing HowManyPerState")
    try {
        const peopledata = await people.howManyPerState("CO");
        console.log(peopledata);
    } catch (e) {
        console.log(e);
    }

    console.log("Testing personByAge");
    try {
        const peopledata = await people.personByAge(0);
        console.log(peopledata);
    } catch (e) {
        console.log(e);
    }

    console.log("Testing PersonMetrics");
    try {
        const peopledata = await people.peopleMetrics();
        console.log(peopledata);
    } catch (e) {
        console.log(e);
    }

    console.log("Testing listEmployees");

    try {
        const peopledata = await work.listEmployees();
        for (let i = 0; i < peopledata.length; i++) {
            console.log(peopledata[i]["company_name"]);
            for (let j = 0; j < peopledata[i]['employees'].length; j++) {
                console.log(JSON.stringify(peopledata[i]['employees'][j]));
            }
        }
    } catch (e) {
        console.log(e);
    }

    console.log("Testing fourOneOne");
    try {
        const peopledata = await work.fourOneOne('240-144-7553');
        console.log(peopledata);
    } catch (e) {
        console.log(e);
    }

    console.log("Testing whereDoTheyWork");
    try {
        const peopledata = await work.whereDoTheyWork('277-85-0056');
        console.log(peopledata);
    } catch (e) {
        console.log(e);
    }

}

//call main
main();