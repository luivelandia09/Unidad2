/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
let size = numbers.length;
console.log(`El tamaño del array es ${size}`);
console.log(`El primer elemeto es ${numbers[0]}`);
console.log(`El último elemento es ${numbers[size - 1]}`);
*/

 // Reto
 let frutas = [ "manzana", "pera", "kiwi", "durazno"];
 console.log(frutas);

 //For
 let num1 = 18;
 console.log(num1);
 num1 = num1 + 1;
 console.log(num1);
 num1 -= 3;
 console.log(num1);

 console.log("EMPIEZA EL BUCLE");
for (let i = 1; i <= 10; i++) {
    console.log(`Valor de i = ${i}`);
    console.log("");
}
//Ejercicio
console.log("Números del 1 al 50"); {
for (let i = 1; i <= 50; i++) 
    console.log(i);
}

console.log("NNúmeros del 0 al 26, de 3 en 3"); {
for (let i = 0; i <= 26; i += 3) 
    console.log(i);
}

for (let i = 10; i>= 1; i--) {
    console.log(i);
}
console.log("INICIO WHILE")
let iterator = 15;
while (iterator <= 75) {
    console.log(iterator);
    iterator+=5;
}