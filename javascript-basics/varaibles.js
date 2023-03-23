//A variable is a container for holding different types of data
// Defining a variable
//This done using car or const or const

// Strings
// var userName;

// numbers
// var age;
// var x;
// var y;

// let
// let z;

// Const
// const PI = 22/7;

// Initialize the variables - " = " - it used to assign values to variables
// userName =  "Andrew";
// age = 18;
// x = 5.5;
// y = 4.5;
// z = 7;

// Data types
// We have two types of data in JavaScript:- Primitive and Non-Primitive
// 1.Primitive-
// a. numbers - whole numbers
var age = 18;
// b.strings - textual data
var userName = "Andrew";
// c.booleans - true or false values
var isRaining = "false";
// d.undefined - undefined values
var und = undefined;

// 2.Non-Primitive
// a.object - key-value pair separated using a colon (:)
var student = {
    "name":"Andrew",
    "age":18,
    "email":"andrew@gmail.com"

};
// b.array - list of items
var numbers= [1, 3, 5, 7, 9]
var students = ["Dennis", "Reagan", "Risper", "Andrew"]
// c.date - date type
var date = new Date();

// Operators
// Arithmetic Operators
// a. addition +
// b.subtraction -
// c. division /
// d. multiplication *
// modulus %

// Comparison operators
// Less than -> <
// Greater than -> >
// Less than or equals to -> <=
// Greater than or equas to -> >=
// Equal to -> ==
// Not equal -> !=

// Logical operators
// and - &&
// or ||

// Functions -> the bilding blocks of an application
// a function is a block of code that executes when called
// We decalre a function using the "function" keyword
// The syntax of a function:
// function nameoffunction(arguments){body of function}

// console.log()- is used to print

function greetUser(){
    console.log("Hello Everyone");
}

// calling a function
// write the name of the function followed by a pair of parenthesis

greetUser()

// functions with parameters
// a parameter is a value that is passed to a functions parenthesis during the function definition

function addTwoNumbers(x,y){
     return x+y;

}

result = addTwoNumbers(5.5,4)
console.log(result)

// Conditional statements
// if (conditional){
//     some code
// }


var isRaining = false;
// if (isRaining){
//     console.log("Carry an umbrella");
// }

// if-else

// if (isRaining) {
//     console.log("Carry an umbrella");
// } else {
//     console.log("Dont carry an umbrella");
// }

// if else if else
var temperature = 26;

if (temperature>24) {
    console.log("Cover tomatoes")
    
} else if (temperature<24) {
    console.log("Uncover tomatoes")
    
} else{
    console.log("Theres something wrong")
}

var names = "Andrew Karanu";
var age = 70;
var hobbies = ["cooking", "swimming", "basketball"];

console.log("My name is " + names + ". I am " + age + " years old" + ". My hobbies are " + hobbies + ".");
// Uses backticks (``)
console.log(`My name is ${names} and I am ${age} years old. My hobbies are ${hobbies}`)



// Create a function that takes in two numbers and retuns the firts number to the power of the second number
function powerofNum(x,y){
    return x ** y
}
x = 2;
y = 2;
square = powerofNum(x,y)
console.log(`The values of ${x} to the power of ${y} is ${square}`)


// Create a js program using functions to caluculate your age in seconds

function convertAge(age){
    var age_sec = age*365*24*60*60
    console.log(`If you are ${age} years old your age in seconds is ${age_sec} seconds`)
}

convertAge(18)

// Summary on java-script basics
// A variable can be declared using var, let or const
// To assign a value to a variable, use the assignment opertor (=)
// There are two categories of data-types in javascript


// Javascript is used to create dynamic HTML by making changes in the DOM tree. With JS we can manipulate almost everything such as content, styles and even add new elements and remove the existing ones.

// DOM is  a tree like structure that is created when a html document is loaded in a browser. Every node of a DOM tree reprsents a HTML element. DOM can be manipulated to make dynamic changes in a HTML document

// HTML Events and JavaScript
// HTML events are attributes that are used to make something happen. Eg a button click popping a message

// Another examples is popping a message when page loads or when the input changes.

// HTML events are very important because they are used to convert the static HTML elements into dynamic. One of the most important uses of this event is that JS functions can betriggered using them 

// Although a very basic DOM manipulation can be done using HTML serious manipulation is done using functions. This is why HTML events are very important

// Thye are several HTML elements which are divided into different categories:
// Keyboard events, Mouse events, Drag events, Form events. Windows events, Media events and clipboard events

// They are several events in each of theses categories. Our main focus is to understand how to use these events to trigger sth

// Triggering alert()
// The alert function is a pop up that appears on the screen with a message

// Lets see how we can trigger a pop up using the onclick mouse event

// mouse events are one of the most commonly used mouse events. These events are triggered when the user does something with the mouse. For example clicking on something, double clicking on something, hovering over something etc

// The on click event is the most basic HTML event. As the name suggests this event triggers something when an element is clicked on

// The value of a HTML event is always written inside quotes.
// The value will be triggered when the button is clicked


// Triggering a function 
// In the real time, events are used to trigger JS functions. Generally complicated things such as DOM manipulation require some sort of coding logic and there can be multiple lines of code. It is not possible to write all these lines in the HTML and that is why JS function wre used

// Commonly used HTML Events
// 1. Mouse Events-
            // ->




