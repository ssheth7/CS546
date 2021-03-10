const MongoCollections = require('../config/mongoCollections');
const movies = MongoCollections.movies;
let { ObjectId } = require('mongodb');

async function create(title, plot, rating, runtime, genre, cast, info) {
    if (!title || !plot || !runtime || !rating || !genre || !cast || !info) {
        throw "Not all parameters are given";
    }
    if (typeof(title) !== 'string') {
        throw "Title parameter is not a string";
    } else if (typeof(plot) !== 'string') {
        throw "Plot parameter is not a string"
    } else if (typeof(rating) !== 'string') {
        throw "Rating parameter is not a string"
    } else if (typeof(runtime) !== 'string') {
        throw "Runtime parameter is not a string"
    } else if (typeof(genre) !== 'string') {
        throw "Genre parameter is not a string"
    }
    if (title.trim().length == 0) {
        throw "Title is an empty string";
    } else if (plot.trim().length == 0) {
        throw "Plot is an empty string";
    } else if (rating.trim().length == 0) {
        throw "Rating is an empty string";
    } else if (runtime.trim().length == 0) {
        throw "Runtime is an empty string";
    } else if (genre.trim().length == 0) {
        throw "Genre is an empty string";
    }
    if (!Array.isArray(cast)) {
        throw "Cast parameter is not an array";
    }
    if (cast.length == 0) {
        throw "Case array is empty";
    }
    let validString = false;
    for (let i = 0; i < cast.length; i++) {
        if (typeof(cast[i]) === 'string' && cast[i].trim().length > 0) {
            validString = true;
        } else {
            cast.splice(i, 1);
        }
    }
    if (!validString) {
        throw "Cast array does not contain a valid string";
    }
    if (typeof(info) !== 'object') {
        throw "info parameter is not an object";
    }
    if (Object.keys(info).length > 2) {
        throw "Info object has additional keys";
    }
    if (typeof(info.director) !== 'string' || info.director.trim().length == 0) {
        throw "info.director parameter is invalid";
    }
    if (!info.yearReleased || typeof(info.yearReleased) !== 'number') {
        throw "Info.yearReleased is not given or is not a number";
    }
    let yearValidation = /^[0-9]{4}$/;
    if (!yearValidation.test(info.yearReleased)) {
        throw "info.yearReleased is not a year";
    }
    if (info.yearReleased < 1930 || info.yearReleased > (new Date()).getFullYear() + 5) {
        throw "info.yearReleased is out of range";
    }
    const movieCollection = await movies();
    let newMovie = {
        'title': title,
        'plot': plot,
        'rating': rating,
        'runtime': runtime,
        'genre': genre,
        'cast': cast,
        'info': info
    };
    const insertInfo = await movieCollection.insertOne(newMovie);
    if (insertInfo.insertedCount === 0) {
        throw "Could not add movie";
    }
    const newID = insertInfo.insertedId;
    const movie = await this.get(newID);
    movie['_id'] = movie['_id'].toString();
    return movie;
};
async function get(id) {
    if (!id) {
        throw "id parameter not given";
    }
    let toObject;
    try {
        toObject = ObjectId(id);
    } catch (error) {
        throw "Invalid format for id parameter"
    }
    const movieCollection = await movies();
    const movie = await movieCollection.findOne({ _id: toObject });
    if (movie === null) {
        throw `No movie with id of {{id}}`;
    }
    movie['_id'] = movie['_id'].toString();
    return movie;
};
async function getAll() {
    const allMovies = await movies();
    const collection = await allMovies.find({}).toArray();
    for (let i = 0; i < collection.length; i++) {
        collection[i]['_id'] = collection[i]['_id'].toString();
    }
    return collection;
};
async function remove(id) {
    if (!id) {
        throw "id parameter not provided";
    }
    if (typeof(id) !== 'string') {
        throw "id parameter is not a string";
    }
    let toObject;
    try {
        toObject = ObjectId(id);
    } catch (error) {
        throw "Invalid format for id parameter"
    }
    const Allmovies = await movies();
    const obj = await this.get(id);
    const deleteInfo = await Allmovies.deleteOne({ _id: toObject });
    if (deleteInfo.deletedCount === 0) {
        throw `Could not delete post with id of ${id}`;
    }
    return `${obj['title']} has been successfully deleted`;
};

async function rename(id, newTitle) {
    if (!id) {
        throw "id parameter not given";
    }
    if (!newTitle) {
        throw "newTitle parameter not given";
    }
    if (typeof(id) !== 'string') {
        throw "id is not a string";
    }
    if (typeof(newTitle) !== 'string') {
        throw "newTitle is not a string";
    }
    if (newTitle.trim().length == 0) {
        throw "NewTitle is an empty string";
    }
    let toObject;
    try {
        toObject = ObjectId(id);
    } catch (error) {
        throw "Invalid format for id parameter"
    }
    const Allmovies = await movies();
    const update = { 'title': newTitle };
    const updatedMovie = await Allmovies.updateOne({ _id: toObject }, { $set: update });
    if (updatedMovie.modifiedCount === 0) {
        throw "Could not update movie";
    }
    const obj = await this.get(id);
    obj['_id'] = obj['_id'].toString();
    return obj;
};
module.exports = {
    create,
    getAll,
    get,
    remove,
    rename,
};