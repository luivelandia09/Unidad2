//Metodos de arrays
let fruits = ["manzana", "naranja", "pera", "kiwi"];
console.log(fruits);

//Push(x)
fruits.push("uva");

console.log(fruits);

//Pop()
fruits.pop();

console.log(fruits);

console.log("unshift");
fruits.unshift("sandía");

console.log(fruits);
// Shift

console.log("shift");
fruits.shift();

console.log(fruits);
//Includes
console.log("includes");

console.log(fruits.includes("papaya"));
console.log(fruits.includes("pera"));

//IndexOf

console.log("indexOf");

console.log(fruits.indexOf("pera"));
console.log(fruits.indexOf("fresa"));
//Join

console.log("join");
let fruitsString = fruits.join();
console.log(fruitsString);

console.log(fruits.join("."));
console.log(fruits.join(" "));
console.log(fruits.join(""));
console.log(fruits.join("-"));
console.log(fruits.join("/"));
console.log(fruits.join("*"));
console.log(fruits.join("+"));

//Slice

console.log("slice");
let slicedFruits = fruits.slice(1);

console.log(slicedFruits);
console.log(fruits);
console.log(fruits.slice(1, 3));

//Splice
console.log("splice");

fruits.splice(2, 1, "guanabana", "arandanos");
console.log(fruits);
//Map

console.log("------------------------------");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

let numsMap = nums.map((x) => x * 2);
console.log(numsMap);

let numsToString = nums.map((x) => `Número ${x}`);
console.log(numsToString);
//Filter

let filteredNums = nums.filter((x) => x % 2 !== 0);
console.log(filteredNums);

//Reduce

let sumOfAllElements = nums.reduce((a, b) => a + b, 0);
console.log(sumOfAllElements);

let productOfAllElements = nums.reduce((a, b) => a * b, 1);
console.log(productOfAllElements);

//MATH
//Round
console.log("----------------------------------------");
console.log("Round");

console.log(Math.round(14.3));
console.log(Math.round(14.8));
//Ceil

console.log("Math.ceil");
console.log(Math.ceil(14.3));
//Floor
console.log("Math.floor");
console.log(Math.floor(14.8));
