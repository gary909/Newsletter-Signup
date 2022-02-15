var bodyParser = require('body-parser');
var express = require('express');
// var request = require('request');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})