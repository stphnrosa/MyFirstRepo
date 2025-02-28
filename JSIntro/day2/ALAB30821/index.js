let radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;

let plants = 20;
let minperplant = 0.8;
let capacity = 0;

//if amount of plants * .8 % 78 meters is >= 80 percent then I need to prune it
//if its 50-80% then it's just monitored
//in weeks 1 we are less then 50% of max capacity

if (capacity > area * 0.8) {
  console.log("capacity over 80%, prune");
} else if (capacity >= area * 0.5) {
  console.log("Capacity is 50% - 80% capacity");
} else {
  console.log("capacity is below 50%, we can plant some more");
}


//Part 2: determine:The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks. If the space remained circular, what would be the radius of this expanded garden?

//Part 3:Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.


