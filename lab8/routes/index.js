const showRoutes = require('./shows');
const searchRoutes = require('./search')
const path = require('path');

const constructorMethod = (app) => {
    app.use('/shows', showRoutes);
    app.use('/search', searchRoutes);
    app.use('/', (req, res) => {
        res.sendFile(path.resolve('static/search.html'));
    });

    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found' });
    });
};

module.exports = constructorMethod;