const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')

const notesRoutes = require("./routes/notes");

const app = express();                                                                               //here we are creating an express app by executing express as a function

const corsOptions = {
    origin: 'http://localhost:4200'
}

app.use(bodyParser.json())

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');                                               //here the argument before comma is the CORS which we have to enable here to fetch the api in browser because we are running our server api on different port and the frontend ui on different port.   and the second argument after the comma , is * which means all the resources can acces this api we can also give specfic or number of specific domain sepereated by the comma ,  .
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');         //here after we have allowed the origin above we also have to allow the methods which are bascially the http mehtods which we can allow to have access to them.  we can give all the methods seperated by comma , or we can give specific methods to get accessed by the domain
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');                    //here we have define Headers.  which are useful if we have a post request on the server then we have to to use this header in the frontend to be able to post the data to the server
//     next();                                                                                          //here we have call next function to continue the route below to read further routes which are define below
// })


app.use(cors(corsOptions));

app.use(notesRoutes);                                                                                //if we have given the first argument before the comma , is the url plus the url we have given in the routes file for example if we have given here /admin and in the routes file we have given /notes so the url that client enter to reach the path is /admin/notes.  and to reach the route we have to register it on the app.js file

mongoose.connect('mongodb://localhost:27017/Notes_App')
.then(result => {
    app.listen(8080);
    console.log("Connected")
})
.catch(err => {console.log(err)})
