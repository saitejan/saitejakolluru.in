const express = require('express')
const app = express()


app.get('/', function (req, res) {
   res.sendfile(__dirname + '/views/home.html');
})

app.listen(3000)
	
	

