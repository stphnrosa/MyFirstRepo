//let num;

if (num > 0) {
  console.log("Positive!");
} else {
  console.log("Negative .. So saaad ...");
}
// console.log(num)   //
//
let age = 21;

if (age > 18)
  if (age > 21) {
    console.log("Have a cocktail");
  } else {
    console.log("comeo on in and party!");
  }
else {
  console.log("ACCESS DENIED:Grow up!");
}

// exercise 3

{
  let num = 5;

  if (num > 0) {
    // checks if num is positive
    if (num > 100) {
      // checks if num is greater than 100
      console.log("positive and greater than 100");
    }
  } else {
    console.log("positive but less than 100");
  }
}

// exercise 4

//let grade = 95;

if (grade > 90) {
  console.log("A");
} else if (grade > 80) {
  console.log("B");
} else if (grade > 70) {
  console.log("C");
} else if (grade > 55) {
  console.log("D");
} else {
  console.log("F");
}

let grade = 73;
switch (grade) {
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log("B");
    break;
  case grade >= 70:
    console.log("C");
    break;
  case grade >= 55:
    console.log("D");
  default:
    break;
}

let hats= 40
let isPos = hats > 0 ? true : false

console.log(isPos)

let num = 100;
if (num > 0) {
  // checks the num is positive
  if (num >= 100) {
    // checks if num is greater than 100
    console.log("Positive and greater than or equal to 100");
  } else {
    console.log("Positive but less than 100");
  }
} else {
  console.log("negative");
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debugging Example</title>
</head>
<body>
    <script>
        let x = 10;
        let isEven;

        try {
            if (x > 0) {
                isEven = (x % 2 == 0) ? false : true;
            } else if (x <= 0) {
                throw "Error - Value of 0 or below.";
            }

            console.log(isEven);
        } catch (err) {
            console.log(err);
        } finally {
            console.log(x);
        }
    </script>
</body>
</html>