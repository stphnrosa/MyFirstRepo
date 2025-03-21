//Data Collections: Arrays & Objects

let name1 ="John"
let name2 = "Abagail" 
let name3 = "Jerome" 

// ... many names later

let greeting1 = "Hello," + name1 +"!";
//.. many greetings later

//^ this is not sustainable

const names =["John", "Abigail", "Jerome", ..., "Cynthia"]; //<--- this is an array. the array is named "names". Arrays start at 0. JOhn = 0, Abigail=1, Jerome=2, etc. Names functions as a variable as well. "JOHN" is an element in the array

const greetings=[];

for (let i=0; i < names.length; i++){

}

// Arrays are list like objects with keys of 0,1, etc. NOT like HTML

// Use array literal syntax
let nums=["1","2","3"]

