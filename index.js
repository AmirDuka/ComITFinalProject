const express = require('express');
const bodyParser = require("body-parser");
const app = express()

// const port = 3000
const port = process.env.PORT || 3000

// to use pug
app.set('view engine', 'pug');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

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
