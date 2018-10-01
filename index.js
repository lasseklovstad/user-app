
var express = require('express');
var app = express();

// your express configuration here




const port = process.env.PORT || 8081;

let bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let csvdata = require('csvdata')

let filePath = "./data.csv";
let csvData = []


app.use(express.static(__dirname+'/public'));

function loadData(){
	csvdata.load(filePath).then(function(data) {
  	console.log(data);
  	csvData = data;
});
}





app.post('/', function(req,res){
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;

	data =[{name:name,email:email,password:password}];
	csvdata.write(filePath,data,{append:'true',header:'name,email,password'}).then(function(data){
		
  		
		});
	
	
  	res.send('User succesfully added!');
});

app.get('/', function(req,res){
	res.sendFile(__dirname+"/index.html");
});
app.get('/pdf', function(req,res){
	res.sendFile(__dirname+"/pdf.html");
});

app.get('/admin', function(req,res){
		csvdata.load(filePath).then(function(data) {
	  	csvData = data;
	  	res.send(JSON.stringify(csvData));
		});
		
});

app.listen(port);
//console.log('Server started! At http://localhost:' + port);