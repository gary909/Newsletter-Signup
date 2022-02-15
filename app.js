var bodyParser = require('body-parser');
var express = require('express');
var request = require('request');

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(3000, function() {
    console.log(`server is running on port 3000`);
});