// It goes and looks up express from your the node modules directory & then loads it into your file.
// line 3 ceates a new express instance.
var express = require('express')
var app = express()

// defining a route, and is listening for a / and a get http method;
// so if someone gets to this / route, we run this function.
app.get('/', function (req, res) {
    res.send('testing')
})

app.get('/test/', function (req, res) {
    res.send('testing for the second page')
})

app.listen(3000, function () {
    console.log('example app listening on ort 3000!')
});