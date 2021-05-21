const authRoutes = require('./auth');
const privateRoutes = require('./private');

const constructorMethod = (app) => {
    app.use('/', authRoutes);
    app.use('/private', privateRoutes);

    app.use('*', (req, res) => {
        res.redirect('/');
    });
};

module.exports = constructorMethod;