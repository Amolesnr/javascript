//Welcome to Javascript
console.log("Hello World");

//Variables and Variable Hoisting

// Variable declaration
var students; //students has no intitial value
let smartribe;
const teacher = true; //declared the variable
//and inst

students = "Angel, Anna and Jason";

console.log(students);

students = prompt("What is your name?");

function alertMessage() {
  alert("Welcome, " + students);
}

// initializing value of variable

alertMessage();

//Datatypes
//Boolean: True or False;
//string- represents letters
//null - empty
//number-

//eg
var isHungry;
isHungry = false; //boolean
let studentname;
studentname = "Kwabena"; //string
let box = null; //null
let age = 42; //number

console.log(isHungry, studentname, box, age);
function NewAlert() {
  if (isHungry) {
    alert("It is " + isHungry + " " + studentname + " is Hungry");
  }
}

NewAlert();

//block of code in js

{
}

// concatenation in js
// adding strings and variables together using "+" symbol

alert(studentname + " is " + age + " years old.");

// Kwabena is 42 years old

// Adding numbers
/*
let x = "Abena"; //a b
let y = 6; // c d

let z = x + y; //Abena6 - javascript concatention

z = x - y; //NaN- javascript operation

let b = x * y; //108 - javascript operation

let c = x / y; //3 - javascript operation

console.log(z);
console.log(b);
console.log(c);

//.tostring is used to convert
//content
//any variable to a string

let a = y.toString();
console.log(a); //6 - as a string
console.log(typeof a); // string
console.log(typeof isHungry); // boolean
console.log(typeof studentname); // string
console.log(typeof box); //object

//Converting Strings to numbers
let example = "123student"; //string
let nexample = parseInt(example); //123

console.log(nexample); //123 - number
console.log(typeof nexample); // number

let future = example + 21245; //123student20

//rules for parseInt method
future = "123student21245"; //12320

let newfuture = parseInt(future);

console.log(newfuture); //123

let newstring = "123.234student";
let stringNum = parseInt(newstring);

console.log(stringNum); //123

//which method can be used to return decimal
//numbers from a string

let newStringNum = parseFloat(newstring);

console.log(newStringNum); //123.234

console.log(typeof newStringNum); //Number

let newAdd = stringNum * newStringNum;

console.log(newAdd); //
*/
// Arrays
/*Notes
  An array literal is a list of zero or more
  expressions, each of which represents an 
  array element, enclosed in square brackets.


  */

let school_names;
school_names = [
  "Candyland School", //0 position
  "Dison International School", //1st position
  "New Mission Academy", //2nd position
  "First Baptist School", //3rd position
];

console.log(school_names);
/*
  Nb: in the variable school these are the 
  following elements and array position

  Candyland School- 0 position
  Dison International School - 1 position
  New Mission Academy - 2 position 
  First baptist School - 3 position

  On this note, when counting elements in 
  an array, always start from zero
  */

let school_location;
school_location = ["Ejisu", "Burma Hills", , "Tema Community 5"]; //array

console.log(school_location);
//School_name,School_location
//Candyland School,Ejisu
//Dison International School,Burma Hills
//New Mission Academy, Tema Community 5
//First Baptist School,

/*
  Coding Challenge 1

  Ages 
  create 6 variables
  -dog name- ask user for dog name
  -dog age- ask user for dog age
  -dog years-7
  - cat name - ask user for cat name
  -cat age - ask user for cat years
  -cat years - 5
    
  calculate the dog and cat's age in 
  human years using the following 
  formula

  dog= dogs age x dog years
  cat= cats age x cat years

  Alert the following 

  dog name is  dog human years old

  cat name is cat human years old

*/

//Challenge Solution



let dogName, dogAge, dogYears, catName, catAge, catYears;
dogName = "Fido"; //string
dogAge = 12; //Number
dogYears = 7; //Number
catName = "Whiskers"; //string
catAge = 9; //Number
catYears = 5; //Number

alert(dogAge,dogName,dogYears);

//Dog and Cat age in Human Years
let DogHumanYears = dogAge * dogYears; //84

console.log(DogHumanYears);

let CatHumanYears = catAge * catYears; //45

console.log(CatHumanYears);

//loging statement in console
//first statement
// dog name is  dog human years old

console.log(dogName + " is " + DogHumanYears + 
  " human years old."
);

//first statement
// cat name is  cat human years old

console.log(catName + " is " + CatHumanYears + 
  " human years old."
);

*/

//Javascript objects
// can be assigned to variables

const newObject = {
  propertyname: value,
};



//example
const newcar = {
  horsepower: "100",
  strength: "500",
  mileage: "1000",
};

//newcar is the object name
horsepower- 100//string
strength- 500
mileage - 1000


const oldcar= {
  horsepower:"1500",
  strength:"2500",
  mileage:"50",
};

//FROM THE ABOVE
//wHAT IS THE TOTAL HORSEPOWER FOR  BOTH CARS
//Find the total strength and mileage
//Find the product of the strength and 
//mileage of each car


let total = 
parseInt(oldcar.horsepower) + parseInt(newcar.horsepower) ;
//1600 - angel
//1500100

console.log(newcar.horsepower); //100
console.log(newcar.mileage); //1000
console.log(newcar.strength); //500

//objectname.propertyname - value of the 
//object's property

let x = a + b// value of a plus value of b



//Ghana identity Registration
const ghIdentity = {
  FirstName: NewFirstName, //Anna
  Middlename: NewMiddleName, //Lois Tetekie
  LastName: NewLastName, // Ami-Narh
  Address: Useradress,
  Language: Userlanguage,
};

//1. Anna Lois Tetekie Ami-Narh
//2.

let NewFirstName, NewMiddleName, NewLastName;
NewFirstName = prompt("Enter First Name"); //Anna
NewMiddleName = prompt("Enter Middle Name"); //Lois Tetekie
NewLastName = prompt("Enter lastname"); //Ami-Narh
