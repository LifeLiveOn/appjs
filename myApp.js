let express = require('express');
let app = express();
let env = require('dotenv').config()
const path = require('path')
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')))

// cai nay chay moi luc server dc nhan request
// app.use(function middleware(req, res, next) {
//     var string = req.method + " " + req.path + " - " + req.ip;
//     console.log(string)
//     next();
//   });

app.post('/name',function(req, res){
  var string = req.body.first + " " + req.body.last
  res.json({name: string})
})

app.get('/name', function(req, res) {
  var{first:firstname, last:lastname} = req.query
  res.json({
    name: `${firstname} ${lastname}`,
  })
})


app.get("/:word/echo",(req,res)=>{
  const data = {
    echo:req.params.word
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
