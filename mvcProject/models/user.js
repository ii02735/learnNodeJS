//const users = []; we'll now store data in a file (JSON format, file = persistant (even after server shut, data will still be here))
const fs = require("fs");
const path = require("path");
module.exports = class User{
    constructor(name,firstname,access){
        this.name = name;
        this.firstname = firstname;
        this.access = access;
    }

    save()
    {                                               //instead of call rootDir to get main application path
        const pathFile = path.join(path.dirname(process.mainModule.filename),"data","users.json");
        fs.readFile(pathFile,  //we have to read the file first in order to put after the next data
            (err,fileContent) => { 
            let users = [];
            
            if(!err){
                users = JSON.parse(fileContent); //conversion of JSON file to JS array
                users.push(this); //pushing new element to converted array
                fs.writeFile(pathFile, JSON.stringify(users), (err) => console.log(err)); //convert again JS Array to JSON and write that JSON into the file
            }
            else
                console.log(err);
        });
    }

    toString()
    {
        return `${this.name} ${this.firstname} with ${this.access} rank`;
    }

    static fetchAll(callback)
    {
        const pathFile = path.join(path.dirname(process.mainModule.filename),"data","users.json");
        /*fs.readFile(pathFile, //warning : callback is ASYNCHRONOUS : you cannot store data from an outside variable of that callback (execution will already pass
                              //outside variable, and will call callback IN ANOTHER TIME !
            (err,fileContent) =>{
                if(!err)
                    return JSON.parse(fileContent);
                return [];
        });*/

        //And so render must be called in a callback (remember : a function that will be CALLED BACK LATER)
        //Ergo, we must assign a function as paramter of the function
        //that function will have the same execution context than the readFile's callback (both of these are callbacks !)
        
        fs.readFile(pathFile,(err,fileContent)=>{
            if(!err)
                callback(JSON.parse(fileContent)); //Inside of that callback we send an array, here a filled one (from JSON.parse) because the read has been successful
            else
                callback([]); //Here an empty one because the read has failed
        });
    }
}