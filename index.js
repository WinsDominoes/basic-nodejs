const express = require('express') // requiring the express module
const app = express() // using express for the web app
const port = process.env.PORT || 3000 // declare the port for the nodeapp

// set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(port, () =>
    console.log(`App is listening on port ${port}.`) // this is where the node app will be started
)

app.use(express.static(__dirname + '/public')) // this is for including files like css/js/ or something like that

// question: where is the "index" located? well ejs uses the 'views' folder as a default for the .ejs files and if you want to add more files....
// just create like page2.ejs 

app.get('/', (req, res) => { // receive the request from a user
    res.render('index') // using the ejs engine to render the index.ejs file
})

/* 
app.get('/'about, (req, res) => { // receive the request from a user
    res.render('about') // using the ejs engine to render the index.ejs file
})
*/