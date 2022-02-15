var bodyParser = require('body-parser');
var express = require('express');
var request = require('request');

const app = express();

//use a static folder to host css, images etc
app.use(express.static("public"));
//use body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, function() {
    console.log(`server is running on port 3000`);
});

app.post('/', function(req, res) {

    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email);
    res.sendStatus(200);

});