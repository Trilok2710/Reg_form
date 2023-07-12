var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://127.0.0.1:27017/mydb5',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var SCname = req.body.SCname;
    var address = req.body.address;
    var sport = req.body.sport;
    var cname = req.body.cname;
    var cemail = req.body.cemail;
    var cphno = req.body.cphno;
    var vcname = req.body.vcname;
    var vcemail = req.body.vcemail;
    var vcphno = req.body.vcphno;

    var data = {
        "SCName":SCname,
        "address":address,
        "Sport Chosen":sport,
        "captain's name": cname,
        "captain's email" : cemail,
        "captain's phone": cphno,
        "vicecaptain's name": cname,
        "vicecaptain's email" : vcemail,
        "vicecaptains phone": vcphno
    }

    db.collection('users1').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(7000);


console.log("Listening on PORT 7000");
//array ,and data append 