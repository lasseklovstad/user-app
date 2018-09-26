const express = require('express');
const app = express();
const port = process.env.PORT || 8081;


app.get('/api/user', function(req,res){
	var user_id = req.param('id');
  	var token = req.param('token');
  	var geo = req.param('penis');
	res.send(user_id + ' ' + token + ' ' + geo);
});

app.get('/login', function(req,res){
	res.sendFile(__dirname+"/index.html");
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);