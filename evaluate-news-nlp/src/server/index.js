var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')




const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

//console.log(JSON.stringify(mockAPIResponse))


//when you go to the website, it responds with the home page//
app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

//path
//you can pass in the text into the req//
app.get('/getKey', function(req, res) {
    res.json({
        "key": process.env.API_KEY
    });
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
    //console.log(`Your API key is ${process.env.API_KEY}`)
})




const dotenv = require('dotenv');
dotenv.config();
