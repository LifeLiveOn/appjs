let express = require('express');
let app = express();
let env = require('dotenv').config()
const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))

// cai nay chay moi luc server dc nhan request
app.use(function middleware(req, res, next) {
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string)
    next();
  });


app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/index.html')
})

app.get('/json', function(req, res) {
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        res.send({"message": "HELLO JSON"})
    }
    else{
    //    res.redirect(process.env.DB_URL) 
    res.send({"message": "Hello json"})
    }
    
    
})




























 module.exports = app;
