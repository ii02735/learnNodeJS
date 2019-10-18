//instead of writing directly callbacks in routes, we will extract them and write then in controllers
//functions must be usables in routes
//so we MUST export thems


const User = require("../models/user");

module.exports.showUsers = (req,res,next) => {
    //res.render("usersView.pug",{ users: User.fetchAll() }); ->fetchAll result will be in a different execution context
    //With that redaction, users will be empty (because it will be filled in another execution context)

    //Other version (callback execution)
                                            //remember, the parameter of our callback is an array, hence the users data !
    /*res.render("usersView.pug", User.fetchAll((usersData) => {
        users: usersData
    }));--> WRONG REDACTION again ! res.render() is OUT of callback's execution context*/

    //all the execution must be made in the good execution context

    //Final right version
    User.fetchAll((usersData)=>{
        res.render("usersView.pug", { users: usersData });
         //don't forget that we had to create a callback here, because file I/O result is in a different execution context !
    });
};

module.exports.createForm = (req,res,next) => {
    res.render("form.pug");
};

module.exports.submitForm = (req,res,next) => {
    const newUser = new User(req.body.username,req.body.userfirstname,req.body.useraccess);
    newUser.save(); //because save is STATIC, it will never be reinitialized (unless if server is stopped + dangerous, it is not a session neither a database value : users will all have the same value !)
    res.redirect("/showUsers");
};

