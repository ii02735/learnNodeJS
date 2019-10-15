const express = require("express");
const router = express.Router();
const rootDir = require("../util/rootDir");
const path = require("path");

router.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","file.html"));
});

router.get("/users",(req,res,next)=>{
    res.status(200).json([
        {
            email: "bilaal.yadallee@gmail.com",
            password: "<secret>",
            book:{
                author: "john doe",
                release: "1998 of May 28"
            }
        },
        {
            email: "yadallee.bilaal@gmail.com",
            password: "<secret>",
            book:{
                author: "john doe",
                release: "1998 of May 28"
            }
        }
    ]);
})

module.exports = router;