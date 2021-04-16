const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async(req, res) => {
    searchTerm = req.body.searchTerm.trim();
    try {
        if (!searchTerm) {
            throw "searchTerm not provided";
        }
        let { data } = await axios.get('http://api.tvmaze.com/search/shows?q=' + searchTerm);
        data = data.slice(0, 20);
        res.render('search', { "searchTerm": searchTerm, "shows": data });
    } catch (e) {
        res.status(400).render('error', { "error": e });
    }
});

module.exports = router;