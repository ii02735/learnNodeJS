console.log("hello world");

//Example for writing a text file : import needed though

const fs = require('fs'); //fs for File System
//fs.writeFileSync("file.txt","hello world !!"); //create file.txt and write inside it
fs.writeFileSync("file.txt","hello new version of nodejs !");


//Arrow function is used to replace function keyword

var myfunc = () => "hello world lambda"; //function(){ return "hello world";}
console.log(myfunc());

//spread = operator to create a clone of an array if alone, ELSE will add its elements in an existant one

var arr = ["hello","bye"];

//If we want to make a copy

var arrCpy = arr.slice(); //Is acceptable but what if we want to add elements in an existing array ?
//Note : those are ES6 syntaxes, in server side those are acceptable, but not really in LEGACY BROWSER, so BE CAREFUL !
var arr2 = ["bonjour","au revoir"];

arr2 = [...arr2,...arr]; //will let arr2's elements untouched and will add arr's ones

console.log(arr2);

//rest = varargs, unlimited arguments, typed as usual ones, and not in an array instead

const f = (...v1) => { return v1 };

console.log(f(1,2,3,4,5));

//Destructuring : write interested property instead of the whole object in argument
const person = {name: "Doe", firstname: "John"};
let old_param = (Object) => Object.name;

console.log(old_param(person));

//with destructuring instead

let new_param = ({ name }) => name; //Because we want to work with the name, we write it in { } and JS will check the object passed and get the name attribute

console.log(new_param(person));

//we can also assign to outside variables (must have same name !), the object's values
//For arrays, must have same number !
const [f1,f2,f3,f4] = arr2; //got 4 elements and not 2 because we used SPREAD !
const { name, firstname } = person; //name and firstname are from the global environment

console.log(name + " " + firstname);
console.log(f1); //will print 'bonjour'

//template literal

const nameTest = "john";
const action = "learning";

console.log(`${nameTest} is ${action}`);

