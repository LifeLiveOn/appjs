let express = require('express');
let app = express();

const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/index.html')
})

app.get('/json', function(req, res) {
    res.send({"message": "Hello json"})
})




























 module.exports = app;
