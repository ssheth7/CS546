const path = require('path');

const constructorMethod = (app) => {
    app.use('/', (req, res) => {
        res.sendFile(path.resolve('index.html'));
    });
};

module.exports = constructorMethod;