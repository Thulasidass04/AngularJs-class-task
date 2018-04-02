const express = require('express');
const app = express();
const port = 3001;



app.use(express.static('public'));
app.use('/lib', express.static('node_modules'));



app.listen(port,(err)=>{
	if (err) {
		console.log("Failed While Starting Server")
	}else{
		console.log("Server Started Listeining at" +  port);
	}
})