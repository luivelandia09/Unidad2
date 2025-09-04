let nombre = "Luisana";
if (nombre.length < 5) {
console.log("¡ Qué nombre tan corto !");
}
else {
    console.log("¡Que nombre tan largo!");
}
let age = "16";
if (age > 18) {
    console.log("Es mayor de edad");
}
else {
    console.log("Es menor de edad");
}
let numeroMenor = 4;
let numeroMayor = 6;
if (numeroMenor < numeroMayor) {
    console.log(`El numero ${numeroMenor} es menor que ${numeroMayor}` );
}
let num1 = 74;
let num2 = 36;

console.log( `primer numero -> ${num1}`);
console.log(`segundo numero -> ${num2}`);
if (num1 > num2) {
    console.log("El primer numero es mayor");
} else if ( num2 > num1) {
    console.log("El segundo numero es mayor");
} else {
    console.log("Son iguales");
}
edad = 16;
let estaEnUSA = true;
if (edad >= 21) {
    if (estaEnUSA) {
        console.log("Es mayor de edad");
    } else { (edad < 21)

    }
     {
        console.log("Es menor de edad");
    }
}
else {
    console.log("Es mayor de edad");
}
console.log("Switch Case");
let numeroMes = 2;
switch(numeroMes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;

    default:
    console.log("Mes no válido");
}

let numeroSemana = 7;

switch(numeroSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Sábado");
        break;
    case 3:
        console.log("Viernes");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Miércoles");
        break;
    case 6:
        console.log("Martes");
        break;
    case 7:
        console.log("Lunes");
        break;

    default:
        console.log("NO VÁLIDO")

}