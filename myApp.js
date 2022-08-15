let express = require('express');
let app = express();
let env = require('dotenv').config()
const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))

// cai nay chay moi luc server dc nhan request
// app.use(function middleware(req, res, next) {
//     var string = req.method + " " + req.path + " - " + req.ip;
//     console.log(string)
//     next();
//   });


app.get("/:word/echo",(req,res)=>{
  const data = {
    echo:req.params
  }
  res.json(data)
})

// cai nay vua chay request vua chay middleware check cung luc cho 1 cai 
//thay vi tach ra function rieng va goi no theo kieu app.get("/now",function,(req,res))
app.get("/now",(req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);


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
