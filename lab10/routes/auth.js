const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const path = require('path')
const users = require('./users')
router.get('/', async(req, res) => {
    if (req.session && req.session.user) {
        res.redirect('/private');
    } else if (req.session && req.session.error) {
        req.session.error = undefined;
        res.status(401).render('index', { error: true });
    } else {
        res.render('index', { error: false });
    }
});

router.post('/login', async(req, res) => {
    try {
        const { username, password } = req.body;
        for (let i = 0; i < users.length; i++) {
            const compareHashes = await bcrypt.compare(password, users[i].hashedPassword);
            if (username === users[i].username && compareHashes) {
                req.session.user = {
                    firstName: users[i].firstName,
                    lastName: users[i].lastName,
                    Bio: users[i].Bio,
                    Username: users[i].username
                };
                res.cookie("AuthCookie");
            }
        }
        if (req.session && req.session.user) {
            res.redirect('/private');
        } else {
            req.session.error = true;
            res.redirect('/');
        }
    } catch {
        res.redirect('/');
    }
});

router.get('/logout', async(req, res) => {
    if (req.session.user) {
        req.session.destroy();
        res.clearCookie();
        res.send('<a>Logged out</a><br><a href="/"> Log back in through here</a>');
    } else {
        res.redirect('/');
    }
});

module.exports = router;