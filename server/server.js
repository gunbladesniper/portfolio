var express = require('express');

const path = require('path');
var bodyParser = require('body-parser');
var dataRouter = require("./appData");




var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/getProject', dataRouter );

app.get('*', (req, res)=>{
	res.sendFile(path.join(__dirname,'../client/public/index.html'))
});

app.listen(3000, ()=> console.log('listening on port 3000'));