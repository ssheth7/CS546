const express = require('express');
const app = express();

const configRoutes = require('./index');

app.use(express.json());
app.use(express.static('public'));
configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000/');
});