console.log('Hola');
console.log("FUNCIONES");
console.log("Buenas noches");
console.log(8);
console.log("Luisana");
console.log("fin");

function mostrarMensaje() {
console.log("Buenas noches");
console.log(8);
console.log("Luisana");
console.log("fin");  
}
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();

 console.log("1");
 console.log("2");
 console.log("3");
 console.log("4");
 console.log("5");
 console.log("6");
 console.log("7");
 console.log("8");
 console.log("9");
 console.log("10");

function mostrarNumeros() {
 console.log("1");
 console.log("2");
 console.log("3");
 console.log("4");
 console.log("5");
 console.log("6");
 console.log("7");
 console.log("8");
 console.log("9");
 console.log("10");
}
mostrarNumeros();
mostrarNumeros();
mostrarNumeros();

function addTwoNumbers (x,y) {
    console.log(`Primer Parámetro: ${x}`);
    console.log(`Segundo Parámetro: ${y}`);
    let result = x + y;
    console.log(`El resultado de ${x} + ${y} es ${result}`);
}
let number1 = 35;
let number2 = 27;
addTwoNumbers (number1, number2);


console.log("RETORNO DE VALORES");
function greet (targetName) {
    let message =`Hola ${targetName}, espero estes bien`;
    return message;
}
let name = "Paola";
let greetMessage = greet(name);
console.log(greetMessage);
console.log(greet("Ana"));


let sumeNumbers = (a, b) =>  {
    console.log(`Factor 1 ${a}`);
    console.log(`Factor 2 ${b}`);
    return a +b;
}
let num1 = 35;
let num2 = 21;
let result = sumeNumbers(num1, num2);
console.log(sumeNumbers(num1,num2));