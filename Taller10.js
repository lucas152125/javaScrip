//  Problema 1: Contador de números positivos

                            
const numeros = [150, -80, 200, -45, 300, 120, -30, 250, -100, 180];
let diasConGanancias = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        diasConGanancias++;
    }
}

console.log("Total de días con ganancias:", diasConGanancias);
                            
                        

                    
// Problema 2: Buscador de contraseña 

const contraseñaCorrecta = 1007;

for (let intento = 1000; intento <= 1010; intento++) {
    console.log("Probando:", intento);
    if (intento === contraseñaCorrecta) {
        console.log("¡Contraseña encontrada:", intento + "!");
        break;
    }
} 
 // Problema 3: Calificaciones escolares 

const calificaciones = [8.5, 4.2, 7.0, 5.8, 9.2, 6.5, 3.9, 8.1];
let aprobados = 0;
let reprobados = 0;

for (let i = 0; i < calificaciones.length; i++) {
    if (calificaciones[i] >= 6) {
        aprobados++;
    } else {
        reprobados++;
    }
}

console.log("Estudiantes aprobados:", aprobados);
console.log("Estudiantes reprobados:", reprobados);
                                 

// Problema 4: Calculadora de factorial 

                        
                                
const numero = 6;
let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

console.log("El factorial de", numero, "es:", factorial); 

// Problema 5: Contador de vocales 

const palabra = "programacion";
const vocales = "aeiou";
let contadorVocales = 0;

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i].toLowerCase();
    if (vocales.includes(letra)) {
        contadorVocales++;
    }
}

console.log(`La palabra "${palabra}" tiene ${contadorVocales} vocales`);
                                    
                                

// Problema 6: Sistema de inventario 
                                        
const inventario = {
    laptops: 5,
    mouse: 25,
    teclados: 8,
    monitores: 15,
    cables: 3
};

for (let producto in inventario) {
    let cantidad = inventario[producto];
    if (cantidad < 10) {
        console.log(`REABASTECER: ${producto} (${cantidad})`);
    } else {
        console.log(`BIEN SURTIDO: ${producto} (${cantidad})`);
    }
}
             
// Problema 7: Validador de números primos 

const numero = 17;
let esPrimo = true;

console.log("Verificando divisibilidad...");

if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(`El número ${numero} ES primo`);
} else {
    console.log(`El número ${numero} NO es primo`);
}
                                            
// Problema 8: Calculadora de promedio de temperaturas 

const temperaturas = [22, 25, 19, 27, 24, 21, 26];
let suma = 0;

// Calcular suma
for (let i = 0; i < temperaturas.length; i++) {
    suma += temperaturas[i];
}

// Calcular promedio
let promedio = suma / temperaturas.length;

// Contar días por encima del promedio
let diasEncima = 0;
for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > promedio) {
        diasEncima++;
    }
}

console.log("Promedio de temperatura:", promedio.toFixed(2) + "°C");
console.log("Días por encima del promedio:", diasEncima); 

// Problema 9: Generador de tabla de multiplicar personalizada 

                                       
                                                
const numeros = [3, 7, 9];
const limite = 6;

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    console.log(`Tabla del ${numero}:`);
    
    for (let j = 1; j <= limite; j++) {
        console.log(`${numero} x ${j} = ${numero * j}`);
    }
    
    console.log(""); // Línea en blanco 
} 

// Problema 10: Contador de palabras en texto 

                                            
                                                    
const texto = "JavaScript es un lenguaje de programacion muy popular";
let palabras = 1; // Empezamos con 1 porque si hay texto, hay al menos 1 palabra

// Contar espacios para determinar número de palabras
for (let i = 0; i < texto.length; i++) {
    if (texto[i] === " ") {
        palabras++;
    }
}

console.log("El texto tiene", palabras, "palabras"); 

// Problema 11: Sistema de votación
                                                        
const votos = ["Ana", "Carlos", "Ana", "María", "Carlos", "Ana", "Luis", "María", "Carlos", "Ana"];
const conteoVotos = {};

// Contar votos
for (let i = 0; i < votos.length; i++) {
    let candidato = votos[i];
    if (conteoVotos[candidato]) {
        conteoVotos[candidato]++;
    } else {
        conteoVotos[candidato] = 1;
    }
}

// Mostrar resultados
let ganador = "";
let maxVotos = 0;

for (let candidato in conteoVotos) {
    console.log(`${candidato}: ${conteoVotos[candidato]} votos`);
    if (conteoVotos[candidato] > maxVotos) {
        maxVotos = conteoVotos[candidato];
        ganador = candidato;
    }
}

console.log(`Ganador: ${ganador} con ${maxVotos} votos`); 

// Problema 12: Detector de secuencias numéricas 

const numeros = [1, 2, 3, 7, 8, 12, 13, 14, 15, 20];
let secuenciaActual = [numeros[0]];
let mejorSecuencia = [numeros[0]];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] === numeros[i-1] + 1) {
        // Es consecutivo, agregarlo a la secuencia actual
        secuenciaActual.push(numeros[i]);
    } else {
        // No es consecutivo, verificar si la secuencia actual es la mejor
        if (secuenciaActual.length > mejorSecuencia.length) {
            mejorSecuencia = [...secuenciaActual];
        }
        // Iniciar nueva secuencia
        secuenciaActual = [numeros[i]];
    }
}

// Verificar la última secuencia
if (secuenciaActual.length > mejorSecuencia.length) {
    mejorSecuencia = [...secuenciaActual];
}

console.log(`Secuencia más larga: [${mejorSecuencia.join(", ")}] con ${mejorSecuencia.length} números consecutivos`); 

// Problema 13: Calculadora de números perfectos 


                                                    
                                                        
const limite = 30;
const numerosPerfectos = [];

for (let num = 1; num < limite; num++) {
    let divisores = [];
    let sumaDivisores = 0;
    
    // Encontrar divisores propios
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisores.push(i);
            sumaDivisores += i;
        }
    }
    
    // Verificar si es perfecto
    if (sumaDivisores === num && divisores.length > 0) {
        console.log(`Verificando número ${num}: Divisores [${divisores.join(", ")}], Suma: ${sumaDivisores} - ES PERFECTO`);
        numerosPerfectos.push(num);
    }
}

console.log("Números perfectos encontrados:", numerosPerfectos);
                                                        
// Problema 14: Analizador de patrones de venta 

const ventas = [100, 120, 130, 125, 140, 150, 160, 155, 170, 180];
let rachaActual = 1;
let mejorRacha = 1;
let inicioMejorRacha = 0;
let inicioRachaActual = 0;

for (let i = 1; i < ventas.length; i++) {
    if (ventas[i] > ventas[i-1]) {
        // Ventas crecientes
        rachaActual++;
    } else {
        // Se rompió la racha
        if (rachaActual > mejorRacha) {
            mejorRacha = rachaActual;
            inicioMejorRacha = inicioRachaActual;
        }
        rachaActual = 1;
        inicioRachaActual = i;
    }
}

// Verificar la última racha
if (rachaActual > mejorRacha) {
    mejorRacha = rachaActual;
    inicioMejorRacha = inicioRachaActual;
}

// Extraer las ventas de la mejor racha
let ventasMejorRacha = [];
for (let i = inicioMejorRacha; i < inicioMejorRacha + mejorRacha; i++) {
    ventasMejorRacha.push(ventas[i]);
}

console.log(`Mayor racha de crecimiento: ${mejorRacha} días consecutivos (días ${inicioMejorRacha + 1}-${inicioMejorRacha + mejorRacha})`);
console.log("Ventas en esa racha:", ventasMejorRacha);
                                                        
                                                    

// Problema 15: Generador de pirámide numérica 

const niveles = 5;
let numeroActual = 1;

for (let fila = 1; fila <= niveles; fila++) {
    let lineaTexto = "";
    
    for (let columna = 1; columna <= fila; columna++) {
        lineaTexto += numeroActual;
        if (columna < fila) {
            lineaTexto += " ";
        }
        numeroActual++;
    }
    
    console.log(lineaTexto);
} 

// Problema 16: Simulador de juego de dados 

const dados = [3, 6, 2, 4, 5, 1, 6, 3, 4, 2, 5, 6, 1, 4, 3];
let puntosJugador1 = 0;
let puntosJugador2 = 0;
let turno = 1;
let indiceDado = 0;
let ganador = null;
while (ganador === null && indiceDado < dados.length) {
    // Turno del Jugador 1
    if (indiceDado < dados.length) {
        let dado = dados[indiceDado];
        puntosJugador1 += dado;
        console.log(`Turno ${turno} - Jugador 1: ${dado}, Total: ${puntosJugador1}`);
        indiceDado++;
        if (puntosJugador1 >= 20) {
            ganador = "Jugador 1";
            break;
        }
    }
    // Turno del Jugador 2
    if (indiceDado < dados.length) {
        let dado = dados[indiceDado];
        puntosJugador2 += dado;
        console.log(`Turno ${turno} - Jugador 2: ${dado}, Total: ${puntosJugador2}`);
        indiceDado++;
        if (puntosJugador2 >= 20) {
            ganador = "Jugador 2";
            break;
        }
    }
    turno++;
}
if (ganador === "Jugador 1") {
    console.log(`¡Jugador 1 gana con ${puntosJugador1} puntos!`);
} else if (ganador === "Jugador 2") {
    console.log(`¡Jugador 2 gana con ${puntosJugador2} puntos!`);
} else {
    console.log("Juego terminado sin ganador (se acabaron los dados)");
}
                 
// Problema 17: Detector de palíndromos numéricos 

                                                                    
const inicio = 100;
const fin = 150;
const palindromos = [];
for (let num = inicio; num <= fin; num++) {
    // Convertir número a string para facilitar la comparación
    let numStr = num.toString();
    let esPolindromo = true;
    // Verificar si es palíndromo comparando caracteres
    for (let i = 0; i < numStr.length / 2; i++) {
        if (numStr[i] !== numStr[numStr.length - 1 - i]) {
            esPolindromo = false;
            break;
        }
    }
    if (esPolindromo) {
        console.log(`Verificando ${num}: SÍ es palíndromo`);
        palindromos.push(num);
    }
}
console.log("Palíndromos encontrados:", palindromos); 

// Problema 18: Sistema de calificación ponderada 

const materias = {
    matematicas: { nota: 8.5, creditos: 4 },
    fisica: { nota: 7.2, creditos: 3 },
    quimica: { nota: 9.0, creditos: 3 },
    literatura: { nota: 6.8, creditos: 2 }
};
let sumaNotasPonderadas = 0;
let totalCreditos = 0;
for (let materia in materias) {
    let nota = materias[materia].nota;
    let creditos = materias[materia].creditos;
    console.log(`${materia}: ${nota} (${creditos} créditos)`);
    sumaNotasPonderadas += nota * creditos;
    totalCreditos += creditos;
}
let promedioPonderado = sumaNotasPonderadas / totalCreditos;
let estado = promedioPonderado >= 7.0 ? "APROBADO" : "REPROBADO";
console.log("Promedio ponderado:", promedioPonderado.toFixed(2));
console.log("Estado:", estado); 

// Problema 19: Algoritmo de ordenamiento burbuja 

let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;
console.log("Array inicial:", arr);
for (let i = 0; i < n - 1; i++) {
    let intercambios = false;
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Intercambiar elementos
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            intercambios = true;
        }
    }
    console.log(`Pasada ${i + 1}:`, [...arr]);
    // Si no hubo intercambios, el array ya está ordenado
    if (!intercambios) {
        break;
    }
}
console.log("Array ordenado:", arr); 

// Problema 20: Calculadora de secuencia de Fibonacci 

                                                                        
const cantidad = 15;
const fibonacci = [];
const numerosPares = [];
// Inicializar los primeros dos números
fibonacci[0] = 0;
fibonacci[1] = 1;
// Verificar si los primeros números son pares
if (fibonacci[0] % 2 === 0) {
    numerosPares.push(fibonacci[0]);
}
if (fibonacci[1] % 2 === 0) {
    numerosPares.push(fibonacci[1]);
}
// Generar el resto de la secuencia
for (let i = 2; i < cantidad; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    // Verificar si es par
    if (fibonacci[i] % 2 === 0) {
        numerosPares.push(fibonacci[i]);
    }
}
console.log("Secuencia Fibonacci:", fibonacci);
console.log("Números pares en la secuencia:", numerosPares);
                                                                        
                                            
                                                  
                                                                        
                                                                    

                                                                    
                                            
                                                            
                                                        

                                                    
                                                        
       
                                                
                                            