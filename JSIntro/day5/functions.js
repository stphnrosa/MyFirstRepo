// // app sends out daily business report

// let date = new date();
// let sales = getSalesData (date);
// let labor = getLaborCosts (date);
// let budget = getBudget (date);
// let report = generateReport (date,sales,labor,budget);
// sendReport (report);

// // set up function/declare it

// function getSalesData (forDate) {
//     let netSales = getnetSales(forDate);
//     let salestax = computeSalestax (netSales);
//     return (netSales,salestax);


// }

// function getLaborCosts(forDate) {
//     let staffCosts = getstaffcosts
// }
// //Defining Functions

// 1. Function Declaration (function definitions)
// function sayHello(name) {
// console.log ('hello' + name + '!');
// }

// 2. Function Expression- cannot be invoked until they are defined 

// const sayHello = function(name) {
// console.log('Hello'+ name + '!')
// };

// //Arrow Function - more concise syntax, implicit return of a single ecpression 

// //function declaration below
// function add (a,b){
//     return a + b;
// }

// //Arrow function below
// const add = (a,b)=> a + b;

// //if we're using arrow function, you don't always have to use function and return

// //

// function areBothEven(n1,n2) { //declaring the function
//     return !(n1 % 2) && !(n2 % 2);
   
// }

// console.log(areBothEven(6,8))  // Invoking the function

//n1, n2 are place holders
// != NOT
// // return is the keyword that returns the result of the expression that follows it
// // if n1 % 2 is even then it's true
// // 0 is falsy


//Practice Activity 2: Write a function Declaration. Write a function named computeArea using the function declaration approach

function computeArea(width, height){
   let area= width * height;
     console.log(`the area of a rectangle with a width of ${width} and a height of ${height} + ${area} square units.`);
}
computeArea (4,5)

// // //you can hoist function definition not function declaration

// // parameters are the 'slots' the placeholders for inputs that the function should receive
// //arguments are the specific values of JS data types that we give those slots when we run a function

// // see below

// //  function bottleCapper(bottle,cap){
// //     return bottle + cap; //bottle, cap are slots
// //  }

// //  bottleCapper('green bottle','white cap'); // 'green bottle', 'white cap' are arguments 

//  function getDevObject(name, ...skills){ // name & skills are parameters
//     return{
//         devName: name,
//         jobskills: skills
//     }

//  } console.log( getDevObject('Tishana', "HTML","CSS", "CSS", "ECMAScript"))


//  //Default parameters

//  function setColor(biv=CSSCounterStyleRule, color){
//     //set color to purple if not provided
//     bicycle.color = color || 'purple';

//  }

//  const bike= new Bicycle();
//  setColor(bike,'blue');// sets color to blue
//  setColor(bike); //sets color to purple by default

//  //using default parameters we can do ->

//  function setColor(bicycle, color = 'purple'){
//     bicycle.color= color;
//  }

//  //parameters= placeholders arguments=value
//  // parameters and arguments are matched up by being respective. first parameter is matched to first argument, second parameter is matched to second argument

//  //Hoisting= we can call function declaration before they are defined thanks to HOISTING. this refers to the process whereby the interpreter appears to move the declaration of functions, variables or class to the top of their scope,prior to execution of code

//  function hoist () {
//     console.log(x); //outputs undefined, not a refernceError
//     var x = 25;
//     console.log(x); //outputs 25
//  }

//  //what JS sees
// function hoist(){
//  var x;
//  console.log(x); //outputs undefined , not a reference error
//  x=25;
//  console.log(x);
// }

// // let does not allow us to hoist 
// //type 1 
