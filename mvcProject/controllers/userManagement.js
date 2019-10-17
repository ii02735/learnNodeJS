//instead of writing directly callbacks in routes, we will extract them and write then in controllers
//functions must be usables in routes
//so we MUST export thems


const User = require("../models/user");

module.exports.showUsers = (req,res,next) => {
    res.render("usersView.pug",{ users: User.fetchAll() });
};

module.exports.createForm = (req,res,next) => {
    res.render("form.pug");
};

module.exports.submitForm = (req,res,next) => {
    const newUser = new User(req.body.username,req.body.userfirstname,req.body.useraccess);
    newUser.save(); //because save is STATIC, it will never be reinitialized (unless if server is stopped + dangerous, it is not a session neither a database value : users will all have the same value !)
    res.redirect(301,"/showUsers");
};

