'use strict';
var userService = require('../service/userService');

module.exports = function(app) {

    app.get("/about", (req, res) => {
        res.send("This is an example microservice using nodejs and express")
    })

   app.get('/users',(req, res) => {
    var users = userService.getUsers(req,res, function(err,dist){ 
        if(err) res.send(err); res.json(dist); 
    });
    res.send(users) 
    })

    app.get('/users/:uid',(req, res) => {
        var user = 
        {
        id:1,    
        firstName:"Sachin",
        lastName:"Tendulkar"
        }
    res.send(user)  
         
       })

    app.post('/user',(req, res) => {
        var newUser = userService.adduser(req,res, function(err,dist){ 
            if(err) res.send(err); res.json(dist); 
        });
        res.send(newUser)  
       }) 
};