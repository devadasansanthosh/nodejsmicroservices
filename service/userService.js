const { readFileSync, writeFileSync } = require("fs");

var userService = { 
   getUsers: function(req, res){ 
        const userList = readFileSync('./service/users.json');
        return JSON.parse(userList);
    },
    adduser: function(req, res){ 
        const userList = readFileSync('./service/users.json');
        var updatedList = JSON.parse(userList);
        const newUser = req.body;
        //write logic to save user to DB
        newUser["id"]=3;
        updatedList.push(newUser);
        console.log(updatedList);
        try {
            writeFileSync('./service/users.json', JSON.stringify(updatedList, null, 2), "utf8");
            console.log("Data successfully saved");
        } catch (error) {
            console.log("An error has occurred ", error);
        }
        return newUser;
    },
  };
  
  module.exports = userService;