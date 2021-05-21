const express = require('express');
const app = express();
const configRoutes = require('./routes');
const session = require('express-session');

const exphbs = require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: '' }));
app.set('view engine', 'handlebars');
app.use(
    session({
        name: 'lab10',
        secret: "OwO whats this",
        saveUninitialized: true,
        resave: false,
        cookie: { maxAge: 60000 }
    })
);
app.use('/private', (req, res, next) => {
    let authenticated = " (Non-Authenticated User)";
    if (req.session && req.session.user) {
        authenticated = " (Authenticated User)";
    }
    console.log("[" + (new Date().toUTCString()) + "] " + req.method + " " + req.originalUrl + authenticated);
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(403).render('error', { error: "User is not logged in" });
    }
});

app.use('*', (req, res, next) => {
    if (req.originalUrl === "/private") {
        next();
    }
    let authenticated = " (Non-Authenticated User)";
    if (req.session && req.session.user) {
        authenticated = " (Authenticated User)";
    }
    console.log("[" + (new Date().toUTCString()) + "] " + req.method + " " + req.originalUrl + authenticated);
    next();
});

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
});