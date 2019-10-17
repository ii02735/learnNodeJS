const express = require("express");
const router = express.Router();
const path = require("path")
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

router.get("/hbs",(req,res,next)=>{
    const value = 1000;
    res.render("template.handlebars", { variable: "hello world", value: value, isGreatherThan20: value > 20, 
        books: [
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
        ]}
    )
})

router.get("/ejs",(req,res,next)=>{
    const value = 1000;
    res.render("template.ejs", { variable: "hello world", value: 1000, 
        books: [
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
        ]}
    )
})
router.get("/form",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","form.html"));
})

module.exports = router;