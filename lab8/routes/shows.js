const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:id', async(req, res) => {
    id = req.params.id;
    try {
        if (!id || id.trim().length == 0) {
            throw "No id parameter given";
        }
        const { data } = await axios.get("http://api.tvmaze.com/shows/" + id);
        let regex = /(&nbsp;|<([^>]+)>)/ig;

        let sanitized = data.summary.replace(regex, "");
        data.summary = sanitized;
        if (!data.language) {
            data.language = "N/A";
        }
        if (!data.genres || data.genres.length == 0) {
            data.genres = ["N/A"];
        }
        if (!data.rating || !data.rating.average) {
            data.rating.average = "N/A";
        }
        if (!data.network.name) {
            data.network.name = "N/A";
        }
        res.render('shows', { "data": data });
    } catch (e) {
        res.status(404).render('error', { "error": e });
    }
});
module.exports = router;