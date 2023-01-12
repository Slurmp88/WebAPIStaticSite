var express = require("express");
var app = express(); 
var port = process.env.port || 3000;
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
app.listen(port, function(){console.log("running on netlifi")}); //Looking at port 3000 With a Callback Function

