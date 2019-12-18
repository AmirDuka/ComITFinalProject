const express = require('express');
const bodyParser = require('body-parser');
const app = express()

// const port = 3000
const port = process.env.PORT || 3000

var mongoose = require('mongoose');
require('dotenv').config();

var AthleteModel = require('./models/athlete.model')

var mongoDB = process.env.MONGO_CONNECT_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

AthleteModel.find().exec((err, athletes) => {
    if(err) {
      res.status(500).send(err)
    }
  })


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// to use pug
app.set('view engine', 'pug');

// to render pug file
app.get('', (req, res) => {
    res.render('index', {});
});

app.post("/create", (req, res) => {

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your bmi is " + bmi);
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);

});


// const express = require("express");
// const bodyParser = require("body-parser");
// const port = 3000

// const app = express();
// app.use(bodyParser.urlencoded({extended: true}));

// app.get("/index.html", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

// app.post("/create", (req, res) => {

//     var weight = parseFloat(req.body.weight);
//     var height = parseFloat(req.body.height);

//     var bmi = weight / (height * height);

//     res.send("Your bmi is " + bmi);
// });


// app.listen(port, function () {
//     console.log(`server is listening on port ${port}`)
// });
