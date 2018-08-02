const express = require('express')
const csp = require('express-csp-header');
const path = require("path");
const cors = require("cors");


const app = express();

// app.use(cors({origin: 'http://localhost:3000'}));

// app.use(express.static(__dirname));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

app.get('/assets/:name', function (req, res, next) {
    var options = {
        root: __dirname + '/assets/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.name;
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });

});



app.listen(3000, function() { console.log('Example app listening on port 3000!') })