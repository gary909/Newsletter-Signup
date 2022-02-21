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

app.post("/failure", function(req, res){
    res.redirect("/");
})

// app.listen(3000, function() {
//     console.log(`server is running on port 3000`);
// });

app.listen(process.env.PORT || 3000, function() {
    console.log(`server is running on port 3000`);
});

app.post('/', function(req, res) {

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const https = require("https");

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/xxxxxxx";

    const options = {
        method: "POST",
        auth: "xxxxxxxx"
    }

    const request = https.request(url, options, function(response){

        if (response.statusCode === 200){
            res.sendFile(__dirname + '/success.html')
        } else {
            res.sendFile(__dirname + '/failure.html')
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
    // console.log(firstName, lastName, email);
    // res.sendStatus(200);

});

