// Escribir total y promedio de precios de productos//
let productoA = 1250.75;
let productoB = 890.50;
let productoC = 2340.25;
let total = productoA + productoB + productoC;
let promedio = total / 3; 
console.log("Producto A: $" + productoA);
console.log("Producto B: $" + productoB);
console.log("Producto C: $" + productoC);
console.log("Total de ventas: $" + total);
console.log("Promedio por producto: $" + promedio.toFixed(2)); 

// El termómetro marca 77 grados Fahrenheit. Convertir esta temperatura a grados Celsius usando la fórmula: C = (F - 32) × 5/9 //

 // Mostrar el resultado redondeado a 1 decimal // 
let fahrenheit = 77;
let celsius = (fahrenheit - 32) * 5 / 9;

console.log("Temperatura en Fahrenheit: " + fahrenheit + "°F");
console.log("Temperatura en Celsius: " + celsius.toFixed(1) + "°C"); 

//  Generador de Números de Lotería // 
// Generar 5 números aleatorios para un boleto de lotería. Cada número debe estar entre 1 y 50 (inclusive).

 // Mostrar los números generados en el formato: "Números de lotería: 15, 32, 8, 41, 27" // 
 // Pista: Math.random() genera números entre 0 y 1
// Pista: Math.floor() redondea hacia abajo

let numero1 = Math.floor(Math.random() * 50) + 1;
let numero2 = Math.floor(Math.random() * 50) + 1;
let numero3 = Math.floor(Math.random() * 50) + 1;
let numero4 = Math.floor(Math.random() * 50) + 1;
let numero5 = Math.floor(Math.random() * 50) + 1;

console.log("Números de lotería: " + numero1 + ", " + numero2 + ", " + numero3 + ", " + numero4 + ", " + numero5); 

// Un cliente tiene $5000 ahorrados en un banco que paga 3.5% de interés anual simple.
// Calcular cuánto dinero tendrá después de 3 años.// 

// Fórmula: Monto Final = Capital + (Capital × Tasa × Tiempo) 
let capital = 12000;
let tasa = 0.035; // 3.5% expresado como decimal
let tiempo = 3; // años
let interes = capital * tasa * tiempo;
let montoFinal = capital + interes;

console.log("Capital inicial: $" + capital);
console.log("Tasa de interés: " + (tasa * 100) + "% anual");
console.log("Tiempo: " + tiempo + " años");
console.log("Interés ganado: $" + interes);
console.log("Monto final: $" + montoFinal); 

// Convertidor de Bases Numéricas //
// Convertir el número decimal 42 a:
 // Sistema binario (base 2)
 //  Sistema octal (base 8)
 // Sistema hexadecimal (base 16) // 

let numero = 42;

let binario = numero.toString(2);
let octal = numero.toString(8);
let hexadecimal = numero.toString(16);

console.log("Número decimal: " + numero);
console.log("En binario: " + binario);
console.log("En octal: " + octal);
console.log("En hexadecimal: " + hexadecimal); 

//  Área y Perímetro de un Círculo //
// Un círculo tiene un radio de 7.5 metros.
//Calcular su área y perímetro.
// Fórmulas: 
// Área = π × radio²
// Perímetro = 2 × π × radio
// Área: 176.71 metros cuadrados
 //Perímetro: 47.12 metros //
let radio = 7.5;

let area = Math.PI * radio * radio;
let perimetro = 2 * Math.PI * radio;

console.log("Radio: " + radio + " metros");
console.log("Área: " + area.toFixed(2) + " metros cuadrados");
console.log("Perímetro: " + perimetro.toFixed(2) + " metros"); 

// Analizar estos valores: 42, "123", NaN, 3.14, "texto", Infinity, 0

// Para cada valor, determinar si:
 // Es de tipo número
 // Es un número finito
 // Es un número entero 
 
let valor1 = 42;
let valor2 = "123";
let valor3 = NaN;
let valor4 = 3.14;
let valor5 = "texto";
let valor6 = Infinity;
let valor7 = 0;

console.log("Analizando: " + valor1);
console.log("- Es número: " + (typeof valor1 === 'number'));
console.log("- Es finito: " + Number.isFinite(valor1));
console.log("- Es entero: " + Number.isInteger(valor1));

console.log("\nAnalizando: " + valor2);
console.log("- Es número: " + (typeof valor2 === 'number'));
console.log("- Es finito: " + Number.isFinite(valor2));
console.log("- Es entero: " + Number.isInteger(valor2));

console.log("\nAnalizando: " + valor3);
console.log("- Es número: " + (typeof valor3 === 'number'));
console.log("- Es finito: " + Number.isFinite(valor3));
console.log("- Es entero: " + Number.isInteger(valor3)); 

// Analizar este texto: " Aprender JavaScript es muy Divertido "

// Mostrar
// Longitud original (con espacios)
// Texto sin espacios al inicio y final
// Longitud sin espacios extra
// Texto en mayúsculas
// Texto en minúsculas
// Primer y último carácter (del texto limpio) 

let texto = " Aprender JavaScript es muy Divertido ";
let textoLimpio = texto.trim();

console.log('Texto original: "' + texto + '"');
console.log("Longitud original: " + texto.length);
console.log('Texto limpio: "' + textoLimpio + '"');
console.log("Longitud limpia: " + textoLimpio.length);
console.log('En mayúsculas: "' + textoLimpio.toUpperCase() + '"');
console.log('En minúsculas: "' + textoLimpio.toLowerCase() + '"');
console.log("Primer carácter: " + textoLimpio[0]);
console.log("Último carácter: " + textoLimpio[textoLimpio.length - 1]);  
// En el texto "JavaScript es genial y JavaScript es poderoso", buscar información sobre la palabra "JavaScript":

// Encontrar:
// Posición de la primera aparición
// Posición de la última aparición
// Si el texto contiene "genial"
// Si el texto empieza con "JavaScript"
// Si el texto termina con "poderoso"

let frase = "JavaScript es genial y JavaScript es poderoso";

console.log('Texto: "' + frase + '"');
console.log('Primera aparición de "JavaScript": posición ' + frase.indexOf("JavaScript"));
console.log('Última aparición de "JavaScript": posición ' + frase.lastIndexOf("JavaScript"));
console.log('¿Contiene "genial"? ' + frase.includes("genial"));
console.log('¿Empieza con "JavaScript"? ' + frase.startsWith("JavaScript"));
console.log('¿Termina con "poderoso"? ' + frase.endsWith("poderoso")); 

//  Extractor de Información Personal
// De la cadena "Juan Carlos Pérez González", extraer:
// El primer nombre (primeras 4 letras)
// El segundo nombre (letras de la posición 5 a 11)
// Los apellidos (desde la posición 13 hasta el final)
// Las últimas 8 letras
// Solo la palabra "Pérez" (posición 13 a 17 

let nombreCompleto = "Juan Carlos Pérez González";
let primerNombre = nombreCompleto.substring(0, 4);
let segundoNombre = nombreCompleto.substring(5, 11);
let apellidos = nombreCompleto.substring(13);
let ultimas8 = nombreCompleto.slice(-8);
let soloPerez = nombreCompleto.substring(13, 18);

console.log('Nombre completo: "' + nombreCompleto + '"');
console.log('Primer nombre: "' + primerNombre + '"');
console.log('Segundo nombre: "' + segundoNombre + '"');
console.log('Apellidos: "' + apellidos + '"');
console.log('Últimas 8 letras: "' + ultimas8 + '"');
console.log('Solo "Pérez": "' + soloPerez + '"'); 

//Corrector de Texto 
// Corregir este texto con errores: "Me gusta Python. Python es facil. Python es rapido."

// Cambios requeridos:
// Cambiar todas las apariciones de "Python" por "JavaScript"
// Cambiar "facil" por "fácil"
// Cambiar "rapido" por "rápido"

// Mostrar el texto original y el corregido. 
let textoOriginal = "Me gusta Python. Python es facil. Python es rapido.";

let paso1 = textoOriginal.replaceAll("Python", "JavaScript");
let paso2 = paso1.replace("facil", "fácil");
let textoCorregido = paso2.replace("rapido", "rápido");

console.log('Texto original: "' + textoOriginal + '"');
console.log('Texto corregido: "' + textoCorregido + '"');  

// Generador de Mensajes Personalizados 
//  Nombre: "María"
// Edad: 25
// Ciudad: "Barcelona"
// Profesión: "Diseñadora"

// Generar estos mensajes usando template literals:
// Saludo personal
// Información completa
// Mensaje de años hasta jubilación (65 años) 

let nombre = "María";
let edad = 25;
let ciudad = "Barcelona";
let profesion = "Diseñadora";

let saludo = `¡Hola ${nombre}! Bienvenida al sistema.`;
let informacion = `${nombre} tiene ${edad} años, vive en ${ciudad} y es ${profesion}.`;
let jubilacion = `Te faltan ${65 - edad} años para jubilarte.`;

console.log(saludo);
console.log(informacion);
console.log(jubilacion); 
// Formateador de Códigos
// Formatear estos códigos:
// Número de factura: "7" → debe quedar "F-007"
// Código de producto: "42" → debe quedar "PROD-0042"
// ID de usuario: "123" → debe quedar "USER-00123"

// También crear un separador de 30 guiones y repetir "¡OFERTA!" 3 veces. 
let numFactura = "7";
let codProducto = "42";
let idUsuario = "123";

let factura = "F-" + numFactura.padStart(3, "0");
let producto = "PROD-" + codProducto.padStart(4, "0");
let usuario = "USER-" + idUsuario.padStart(5, "0");
let separador = "-".repeat(30);
let oferta = "¡OFERTA!".repeat(3);

console.log("Factura: " + factura);
console.log("Producto: " + producto);
console.log("Usuario: " + usuario);
console.log(separador);
console.log(oferta); 

// Calculadora de Texto 
// Un usuario ingresa estos valores como texto: "15" y "8"

// Mostrar qué pasa cuando:
// Se suman con el operador +
// Se restan con el operador -
// Se multiplican con el operador *
// Se dividen con el operador /
// Se convierten a número y luego se suman 

let numero1 = "15";
let numero2 = "8";

console.log('Valores originales: "' + numero1 + '" y "' + numero2 + '"');
console.log("Suma con +: " + (numero1 + numero2));
console.log("Resta con -: " + (numero1 - numero2));
console.log("Multiplicación con *: " + (numero1 * numero2));
console.log("División con /: " + (numero1 / numero2));
console.log("Suma después de convertir: " + (Number(numero1) + Number(numero2))); 
// Analizador de Verdadero y Falso 
// Analizar estos valores para ver si JavaScript los considera verdaderos o falsos:
// 0
// ""
// "0"
// "false"
// null
// undefined
// []
// {}

// Para cada uno, mostrar si es verdadero o falso usando el operador ! 
let valor1 = 0;
let valor2 = "";
let valor3 = "0";
let valor4 = "false";
let valor5 = null;
let valor6 = undefined;
let valor7 = [];
let valor8 = {};

console.log("El valor " + valor1 + " es: " + (!!valor1 ? "verdadero" : "falso"));
console.log('El valor "' + valor2 + '" es: ' + (!!valor2 ? "verdadero" : "falso"));
console.log('El valor "' + valor3 + '" es: ' + (!!valor3 ? "verdadero" : "falso"));
console.log('El valor "' + valor4 + '" es: ' + (!!valor4 ? "verdadero" : "falso"));
console.log("El valor " + valor5 + " es: " + (!!valor5 ? "verdadero" : "falso"));
console.log("El valor " + valor6 + " es: " + (!!valor6 ? "verdadero" : "falso"));
console.log("El valor [] es: " + (!!valor7 ? "verdadero" : "falso"));
console.log("El valor {} es: " + (!!valor8 ? "verdadero" : "falso")); 
// Comparador de Igualdades 
// Comparar estos pares de valores usando == y === para entender la diferencia:
// 5 y "5"
// true y 1
// false y 0
// null y undefined
// "" y 0

// Para cada par, mostrar el resultado de ambas comparaciones. 
let a1 = 5, b1 = "5";
let a2 = true, b2 = 1;
let a3 = false, b3 = 0;
let a4 = null, b4 = undefined;
let a5 = "", b5 = 0;

console.log("Comparando " + a1 + ' y "' + b1 + '":');
console.log("- Con == (con conversión): " + (a1 == b1));
console.log("- Con === (sin conversión): " + (a1 === b1));

console.log("\nComparando " + a2 + " y " + b2 + ":");
console.log("- Con == (con conversión): " + (a2 == b2));
console.log("- Con === (sin conversión): " + (a2 === b2));

console.log("\nComparando " + a3 + " y " + b3 + ":");
console.log("- Con == (con conversión): " + (a3 == b3));
console.log("- Con === (sin conversión): " + (a3 === b3));

console.log("\nComparando " + a4 + " y " + b4 + ":");
console.log("- Con == (con conversión): " + (a4 == b4));
console.log("- Con === (sin conversión): " + (a4 === b4));

console.log('\nComparando "' + a5 + '" y ' + b5 + ':');
console.log("- Con == (con conversión): " + (a5 == b5));
console.log("- Con === (sin conversión): " + (a5 === b5)); 

// Convertidor Universal 
// Tomar el valor "42" y convertirlo a:
// Número usando Number()
// Número usando el operador +
// Número usando parseInt()
// Booleano usando Boolean()
// Booleano usando !!

// También tomar el número 0 y convertirlo a string y booleano. 
let textoNumero = "42";
let numeroZero = 0;
console.log('Valor original: "' + textoNumero + '"');
console.log("Con Number(): " + Number(textoNumero));
console.log("Con +: " + (+textoNumero));
console.log("Con parseInt(): " + parseInt(textoNumero));
console.log("Con Boolean(): " + Boolean(textoNumero));
console.log("Con !!: " + (!!textoNumero));

console.log("\nValor 0 como string: " + '"' + String(numeroZero) + '"');
console.log("Valor 0 como booleano: " + Boolean(numeroZero)); 

// Operaciones Extrañas 
// JavaScript a veces hace cosas raras con las conversiones. Calcular y explicar qué pasa en estas operaciones:
// true + true
// "5" - "2"
// "5" + 2
// "5" * "2"
// [] + []
// [] + {}
// "10" - 5 + "3" 
console.log("true + true = " + (true + true));
console.log('"5" - "2" = ' + ("5" - "2"));
console.log('"5" + 2 = ' + ("5" + 2));
console.log('"5" * "2" = ' + ("5" * "2"));
console.log("[] + [] = " + '"' + ([] + []) + '"');
console.log("[] + {} = " + '"' + ([] + {}) + '"');
console.log('"10" - 5 + "3" = ' + ("10" - 5 + "3")); 
//  Detector de Tipos y Conversiones 
// Crear un analizador que tome cualquier valor y muestre:
// Su valor original
// Su tipo usando typeof
// Cómo se ve convertido a string
// Cómo se ve convertido a número
// Cómo se ve convertido a booleano
// Analizar estos valores: 42, "texto", null, undefined, [] 

let valor1 = 42;
let valor2 = "texto";
let valor3 = null;
let valor4 = undefined;
let valor5 = [];

console.log("=== ANALIZANDO: " + valor1 + " ===");
console.log("Tipo: " + typeof valor1);
console.log('Como string: "' + String(valor1) + '"');
console.log("Como número: " + Number(valor1));
console.log("Como booleano: " + Boolean(valor1));

console.log('\n=== ANALIZANDO: "' + valor2 + '" ===');
console.log("Tipo: " + typeof valor2);
console.log('Como string: "' + String(valor2) + '"');
console.log("Como número: " + Number(valor2));
console.log("Como booleano: " + Boolean(valor2));

console.log("\n=== ANALIZANDO: " + valor3 + " ===");
console.log("Tipo: " + typeof valor3);
console.log('Como string: "' + String(valor3) + '"');
console.log("Como número: " + Number(valor3));
console.log("Como booleano: " + Boolean(valor3));

console.log("\n=== ANALIZANDO: " + valor4 + " ===");
console.log("Tipo: " + typeof valor4);
console.log('Como string: "' + String(valor4) + '"');
console.log("Como número: " + Number(valor4));
console.log("Como booleano: " + Boolean(valor4));

console.log("\n=== ANALIZANDO: [] ===");
console.log("Tipo: " + typeof valor5);
console.log('Como string: "' + String(valor5) + '"');
console.log("Como número: " + Number(valor5));
console.log("Como booleano: " + Boolean(valor5));