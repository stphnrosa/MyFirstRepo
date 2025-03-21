// arrays start at 0
// organized by index(always in a sequential order- 0,1,2,3,4)
// key value pairs (technically)
// more than one element
// Arrays name should be plural
// Are objects but function differently
// can cal them variables
//arrays can go in arrays and in objects, etc

//v we created an array named "movies". even though there's nothing in the array(brackets), it's still there as a shelf.
//let movies = ["Shrek","The Notebook","Mean Girls"]
//let movie1 = movies[2]
//console.log(movie1)

//strings and collection of data. letters= characters

//let movies = ["Shrek","The Notebook","Mean Girls"]
//movies[1] = "batman"
//movies[movies.length]= " "
//console.log(movies)


//let movies = ["Shrek","The Notebook","Mean Girls"]
//movies[15] = "superman"

//console.log(movies)

//strings are also a data collection

//manipulating array length
//let movies = ["Shrek","The Notebook","Mean Girls"]
//movies.length = 50
//movies.length = 2
//console.log(movies)
 
//shortening the array

//Array Iteration

//for (let i = 0; i < movies.length; i++){
    //console.log(movies[i]);
//}

//let movies = ["Shrek","The Notebook","Mean Girls"]

////for (let counter = 0; counter <= movies.length; counter++){

//console.log(movies[counter]);
//}
// within our loop we initilize starting index i to be 0, since arrays start at 0 not 1

// array method (i.e. ".length" )
// methods allow us to pass values into them 

// concat- joining two things together.
//let yourMovies = ["Shrek","The Notebook","Mean Girls"]
//let myMovies = ["batman", "The count of Monte Cristo", "shark tales"];

//let ourMovies= yourMovies.concat(myMovies);

//console.log(ourMovies);

// you can also use this to repeat arrays by passing them into the concat methods multiple times 

//let yourMoviesCopy= yourMovies.concat();
// console.log(yourMoviesCopy);

//join method- allows us to turn all emenents of anarray into a single string. The join() method accepts a delimetr that will be used to join the array elements together 
//let movies = ["Shrek","The Notebook","Mean Girls"]

//let movieString = movies.join(" and ");

//console.log(movieString);

//push and unshift- adding elements to an array 

//let movies = ["Shrek","The Notebook","Mean Girls"]

//let moviesExtramovies.push("Lion King")

//movies.push("Lion King") // this puts the movie at the end of the list

//console.log(movies);

//movies.unshift("Lion King") //this puts the movie at the beginning  of the list
//console.log(movies);

//splice has a syntax of array.splice(start,deleteCount,newItem1,newItem2...)

//let movies = ["Shrek","The Notebook","Mean Girls"]

//console.log(movies);

//reverse- transpose an array, transposes the elements of an array in place.. 

//flat - flatten ensted arrays. in order to access elements in inner arrays, we simply add additional square bracket notations to our syntax

// let numArray= [
// [1,2,3,],
// [4,5,6,],
// [7,8,9,].

// ];

//iterate over all of the elements in an array
let movies = ["Shrek","The Notebook","Mean Girls"]

movies.forEach((movie) => {
   fiveMovie= movie + " 5" 
    console.log(fiveMovie)
}
)