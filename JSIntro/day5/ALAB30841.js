//Part 1: Refactoring Old Code



//Part 2: Expanding Functionality

// Declare a variable that stores the number of columns in each row of data within the CSV.

// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

const tableInfo= "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26" // Lists all the information from the CSV data table

let newdata= tableInfo.split("\n"); // splits the information from the  previous CSVdata accordingly by category

console.log(newdata); // applies the split with the tableinfo into the console

let data= [] //
let row; 4

//Part 3: Transforming Data

let people = [];
for (let i= 1; i< data.length; i++) {
    let person ={};
    person.id = data [i][0];
    person.name = data [i] [1];
    person.occupation = data[i][2];
    person.age = data [i][3]

    people.push(person);
}
     console.log(people);

//For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.


 const keys =["ID","Name","Occupation","Age"];
 console.log(keys)

 let ID= [42,57,63,98];
 let Name= [" Bruce", "Bob", "Blaine","Bill"];
 let occupation=["knight","Fry Cook","Quiz Master","Doctor's Assistant"];
 let Age=[42,57,63,98];
 

//Part 4: Sorting and Manipulating Data
