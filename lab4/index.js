const movies = require('./data/movies');
const connection = require('./config/mongoConnection');

const main = async() => {

    console.log("Creating and adding Inception");
    const inception = await movies.create("Inception",
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. ",
        "PG-13",
        "2hr 28min",
        "Action", ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"], { director: "Christoper Nolan", yearReleased: 2010 });
    console.log(inception)

    console.log("\nCreating and adding The Dark Knight");
    const batman = await movies.create("The Dark Knight",
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "PG-13",
        "2hr 32min",
        "Action", ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], { director: "Christoper Nolan", yearReleased: 2008 });
    console.log(batman)

    console.log("\nGetting all movies");
    const allMovies = await movies.getAll();
    console.log(allMovies);

    console.log("\nCreating and adding Interstellar");
    const interstellar = await movies.create("Interstellar",
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. ",
        "PG-13",
        "2hr 49min",
        "Action", ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], { director: "Christoper Nolan", yearReleased: 2014 });
    console.log(interstellar);

    console.log("\n Renaming Inception");
    const getFirst = await movies.getAll();
    let renamed;
    let removed;
    for (let i = 0; i < getFirst.length; i++) {
        if (getFirst[i]['title'] === "Inception") {
            renamed = await movies.rename(getFirst[i]['_id'].toString(), "Titanic 2");
        } else if (getFirst[i]['title'] === "The Dark Knight") {
            removed = await movies.remove(getFirst[i]['_id'].toString());
        }

    }
    console.log(renamed);

    console.log("\n Removing The Dark Knight");
    console.log(removed);

    console.log("\nGetting all movies");
    const getAll = await movies.getAll();
    console.log(getAll);

    console.log("\nTesting Errors\n");
    try {
        const createError = await movies.create("test", "test", "test", "test", "asd", ["", 1097, "   "], { director: 'test', yearReleased: 2015 });
    } catch (error) {
        console.log(error);
    }
    try {
        const removeError = await movies.remove(0);
    } catch (error) {
        console.log(error);
    }
    try {
        const renameError = await movies.rename("asdonasdpiwe-9ru324oub", "    ");
    } catch (error) {
        console.log(error);
    }

    try {
        const renameError2 = await movies.rename("", "test");
    } catch (error) {
        console.log(error);
    }

    try {
        const getError = await movies.get("My parents approval :(");
    } catch (error) {
        console.log(error);
    }

    const db = await connection();
    await db.serverConfig.close();

}
main().catch((error) => {
    if (error.name == "MongoServerSelectionError") {
        console.log("Mongod service is not running");
    } else {
        console.log(error);
    }
});