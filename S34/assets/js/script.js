//Metodos de arrays
let fruits = ["manzana", "naranja", "pera", "kiwi"];
console.log(fruits);

//push(x)
fruits.push("uva");

console.log(fruits);

//pop()
fruits.pop();
console.log(fruits);

console.log("unshift");
fruits.unshift("sandía");
console.log(fruits);

console.log("shift");
fruits.shift();
console.log(fruits);
console.log("includes");
console.log(fruits.includes("papaya"));
console.log(fruits.includes("pera"));

console.log("indexOf");
console.log(fruits.indexOf("pera"));
console.log(fruits.indexOf("fresa"));

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

console.log("slice");
let slicedFruits = fruits.slice(1);
console.log(slicedFruits);
console.log(fruits);
