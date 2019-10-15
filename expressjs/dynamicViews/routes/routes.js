const express = require("express");
const router = express.Router();

router.get("/route",(req,res,next)=>{
    //If we want to render a template engine file instead of a HTML one, 
    //we must use render()
    let books = [
        {
            author: "John Doe",
            title: "The red feather"
        },
        {
            author: "John Doe",
            title: "The fugitive's chronicles"
        },
        {
            author: "Richard Sean",
            title: "The sunk boat"
        }
    ]
    res.render("showBooks.pug", {dynamicValue: req.query.user, books: books}); //its already knows to look into "views" because we told him into app.js
})

module.exports = router;