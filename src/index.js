const express = require('express');
const path= require('path');
const morgan = require('morgan');


// const { engine, create } = require ('express-handlebars');
const app = express()
const port = 3000


app.use(morgan('combined'))

// Templet engine
app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'resources/views'));

// 
app.use('/css',express.static(path.resolve(__dirname,'public/css')));;
app.use('/img',express.static(path.resolve(__dirname,'public/img')));;
app.use('/js',express.static(path.resolve(__dirname,'public/js')));;

// Router
app.get("/", (req, res) => {
	res.render("home", {
		title: "Home",
	});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})