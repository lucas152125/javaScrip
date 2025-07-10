/* variables */ 
let nombre = "estudiante"; 
console.log(nombre);

let edad = 20; 
let  ciudad = "Bogota";
let esestudiante = true;
console.log(edad, ciudad , esestudiante);
console.log(typeof 42);
console.log(typeof "Hola");
console.log(typeof true);
console.log(typeof undefined); 
let a = 10;
let b = 3;
console.log("suma:", a + b); 
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b); 


nombre = "Fanny";
let apellido = "Villa";
nombreCompleto = nombre + " " + apellido;
console.log("Nombre completo:", nombreCompleto);
let producto = "Smart tv";
let precio = 1050;
console.log(`El ${producto} cuesta $${precio}`);
let texto = "235";
console.log("Number():", Number(texto));
console.log("parseInt():", parseInt(texto));
console.log("parseFloat():", parseFloat(texto));
let numero = 465;
console.log("String():", String(numero));
console.log("toString():", numero.toString());
console.log("Concatenación:", numero + "");

console.log("5 + '3' =", 5 + "3");
console.log("'5' + 3 =", "5" + 3);
console.log("5 + 3 =", 5 + 3);

console.log("'10' - 3 =", "10" - 3);
console.log("'10' * 2 =", "10" * 2);
console.log("'10' / 2 =", "10" / 2); 

let valor1 = null;
let valor2 = undefined;
let valor3 = Number("abc");
console.log("null:", valor1);
console.log("undefined:", valor2);
console.log("NaN:", valor3);

precio = 78.99;
let descuento = 0.15;
let precioFinal = precio * (1 - descuento);
console.log("Precio final:", precioFinal); 

numero = 69.789;
console.log("Math.round():", Math.round(numero));
console.log("Math.floor():", Math.floor(numero));
console.log("Math.ceil():", Math.ceil(numero)); 

precio = 163.456789;
console.log("Precio formateado:", precio.toFixed(2));
console.log("Tipo del resultado:", typeof precio.toFixed(2)); 

console.log("5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");
console.log("true == 1:", true == 1);
console.log("true === 1:", true === 1); 

let radio = 5;
let area = Math.PI * radio * radio;
console.log("Área del círculo:", area);
console.log("Área redondeada:", Math.round(area)); 

let textoMixto = "12.34abc";
console.log("parseInt():", parseInt(textoMixto));
console.log("parseFloat():", parseFloat(textoMixto));
console.log("Number():", Number(textoMixto));
let resultado = (parseFloat("10.5") + parseInt("20.7")) * Number("2");
console.log("Resultado:", resultado);
console.log("Paso a paso:");
console.log("parseFloat('10.5'):", parseFloat("10.5"));
console.log("parseInt('20.7'):", parseInt("20.7"));
console.log("Number('2'):", Number("2")); 

console.log("isNaN(42):", isNaN(42));
console.log("isNaN('42'):", isNaN("42"));
console.log("isNaN('abc'):", isNaN("abc"));
console.log("isNaN(NaN):", isNaN(NaN)); 

let numeroTexto1 = "15.5";
let numeroTexto2 = "4.2";

let num1 = parseFloat(numeroTexto1);
let num2 = parseFloat(numeroTexto2);

console.log(`Números: ${num1} y ${num2}`);
console.log(`Suma: ${(num1 + num2).toFixed(2)}`);
console.log(`Resta: ${(num1 - num2).toFixed(2)}`);
console.log(`Multiplicación: ${(num1 * num2).toFixed(2)}`);
console.log(`División: ${(num1 / num2).toFixed(2)}`); 
