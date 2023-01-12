var express = require("express");
var app = express(); 

//set up a route for static files
app.use(express.static(__dirname+"/static"))

//Every route has a Request (req) and a response (res)
app.get('/',  //First Param is the route to local host ("/"),
    function(req, res) // Second param is call back function 
    {
        res.sendFile(__dirname+"/static/index.html")
    }
);

//this is looking for the "Home" page
app.get('/home', 
    function(req, res)
    {
        res.send("Home Page")
    }
);

//Listener is last
app.listen(3000, function(){console.log("running on localhost:3000")}); //Looking at port 3000 With a Callback Function

