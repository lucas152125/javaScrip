// Ejercicio 1.1: Función de bienvenida 

function darBienvenida(nombre) {
    return "Bienvenido/a " + nombre + " al curso de JavaScript";
}

// Pruebas
console.log(darBienvenida("Ana")); // "Bienvenido/a Ana al curso de JavaScript"
console.log(darBienvenida("Carlos")); // "Bienvenido/a Carlos al curso de JavaScript"
                             
// Ejercicio 1.2: Calculadora de descuentos 

function calcularDescuento(precio, descuento = 10) {
    return precio - (precio * descuento / 100);
}

// Pruebas
console.log(calcularDescuento(100)); // 90
console.log(calcularDescuento(100, 20)); // 80
                            
// Ejercicio 2.1: Validador de edad 

const validarEdad = function(edad) {
    return edad >= 18;
};

// Pruebas
console.log(validarEdad(20)); // true
console.log(validarEdad(15)); // false
                             
// Ejercicio 2.2: Contador regresivo recursivo 

                            
const contarRegresivo = function contar(n) {
    if (n <= 0) {
        return [];
    }
    return [n].concat(contar(n - 1));
};

// Pruebas
console.log(contarRegresivo(5)); // [5, 4, 3, 2, 1]
console.log(contarRegresivo(3)); // [3, 2, 1] 

// Ejercicio 3.1: Arrow function simple 

const doblar = numero => numero * 2;

// Pruebas
console.log(doblar(5)); // 10
console.log(doblar(8)); // 16
                            
                         
// Ejercicio 3.2: Arrow function que retorna objeto 

const crearEstudiante = (nombre, nota) => ({
    nombre: nombre,
    nota: nota,
    aprobado: nota >= 60
});

// Pruebas
console.log(crearEstudiante("Luis", 75)); // {nombre: "Luis", nota: 75, aprobado: true}
console.log(crearEstudiante("Ana", 45)); // {nombre: "Ana", nota: 45, aprobado: false} 

// Ejercicio 4.1: Contador personalizado con closure 

function crearContadorPersonalizado(inicial) {
    let contador = inicial;
    
    return function() {
        contador++;
        return contador;
    };
}

// Pruebas
const contador10 = crearContadorPersonalizado(10);
console.log(contador10()); // 11
console.log(contador10()); // 12
const contador100 = crearContadorPersonalizado(100);
console.log(contador100()); // 101 

// Ejercicio 4.2: Cuenta bancaria con closure 

function crearCuentaBancaria(saldoInicial) {
    let saldo = saldoInicial;
    
    return {
        depositar: function(cantidad) {
            saldo += cantidad;
        },
        retirar: function(cantidad) {
            saldo -= cantidad;
        },
        consultarSaldo: function() {
            return saldo;
        }
    };
}

// Pruebas
const cuenta = crearCuentaBancaria(1000);
console.log(cuenta.consultarSaldo()); // 1000
cuenta.depositar(500);
console.log(cuenta.consultarSaldo()); // 1500
cuenta.retirar(200);
console.log(cuenta.consultarSaldo()); // 1300
                            
                         

// Ejercicio 5.1: Función con parámetros rest 

                            
function calcularPromedio(...numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma / numeros.length;
}

// Pruebas
console.log(calcularPromedio(10, 20, 30)); // 20
console.log(calcularPromedio(5, 15, 25, 35)); // 20

// Ejercicio 5.2: Función con destructuring 

function presentarPersona({nombre, edad, ciudad = "No especificada"}) {
    console.log(`${nombre}, ${edad} años, vive en ${ciudad}`);
}

// Pruebas
presentarPersona({nombre: "María", edad: 25, ciudad: "Madrid"});
// "María, 25 años, vive en Madrid"
presentarPersona({nombre: "Pedro", edad: 30});
// "Pedro, 30 años, vive en No especificada"
                            
                        

// parte 2 

// Función anónima asignada a una variable
const calcularArea = function(ancho, alto) {
    return ancho * alto;
};

// Prueba de la función
const area = calcularArea(5, 8);
console.log(`El área del rectángulo es: ${area}`); // 40

// Ejemplo adicional
console.log(calcularArea(10, 3)); // 30
                            

// Array de números
const numeros = [1, 2, 3, 4, 5];

// Usar map con función anónima
const duplicados = numeros.map(function(numero) {
    return numero * 2;
});

console.log("Números originales:", numeros);
console.log("Números duplicados:", duplicados); 

// Arrow function - sintaxis corta
const cuadrado = num => num * num;

// Arrow function - sintaxis completa
const cuadradoCompleto = (num) => {
    return num * num;
};

// Pruebas
console.log(cuadrado(4)); // 16
console.log(cuadrado(7)); // 49
console.log(cuadradoCompleto(5)); // 25
                            
                         
// Array de números del 1 al 10
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Método por pasos
const pares = numeros.filter(num => num % 2 === 0);
const cubos = pares.map(num => num ** 3);

console.log("Números originales:", numeros);
console.log("Números pares:", pares);
console.log("Cubos de pares:", cubos);

// Método encadenado
const resultado = numeros
    .filter(num => num % 2 === 0)
    .map(num => num ** 3);

console.log("Resultado encadenado:", resultado); 

// Ejercicio 8.1: Callback Simple 

// Función principal que usa callback
function procesarNumero(numero, callback) {
    return callback(numero);
}

// Callbacks
const duplicar = (num) => num * 2;
const triplicar = (num) => num * 3;
const cuadrado = (num) => num * num;

// Pruebas
console.log(procesarNumero(5, duplicar)); // 10
console.log(procesarNumero(5, triplicar)); // 15
console.log(procesarNumero(5, cuadrado)); // 25

// Uso con función anónima
console.log(procesarNumero(8, function(n) { return n + 10; })); // 18
                            
                        
// Ejercicio 8.2: Callback con Arrays
                            
// Implementación personalizada de forEach
function miForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// Array de prueba
const letras = ['a', 'b', 'c'];

// Callback que muestra elemento e índice
miForEach(letras, (elemento, indice) => {
    console.log(`Elemento: ${elemento}, Índice: ${indice}`);
});

// Callback que muestra todo
miForEach(letras, (elemento, indice, array) => {
    console.log(`${elemento} en posición ${indice} de [${array}]`);
});
                           
// Ejercicio 9.1: Función que Retorna Función 
                            
// Función de orden superior que retorna una función
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

// Crear multiplicadores específicos
const multiplicarPor2 = crearMultiplicador(2);
const multiplicarPor3 = crearMultiplicador(3);
const multiplicarPor10 = crearMultiplicador(10);

// Pruebas
console.log(multiplicarPor2(5)); // 10
console.log(multiplicarPor3(4)); // 12
console.log(multiplicarPor10(7)); // 70

// Versión con arrow function
const crearMultiplicadorArrow = factor => numero => numero * factor;
const multiplicarPor5 = crearMultiplicadorArrow(5);
console.log(multiplicarPor5(6)); // 30
                            
                        
// Ejercicio 9.2: Decorador de Funciones 

// Decorador que añade logging a cualquier función
function conLog(func) {
    return function(...args) {
        console.log(`Ejecutando función con argumentos: [${args}]`);
        const resultado = func(...args);
        console.log(`Resultado: ${resultado}`);
        return resultado;
    };
}

// Función simple de suma
function sumar(a, b) {
    return a + b;
}

// Aplicar el decorador
const sumarConLog = conLog(sumar);

// Pruebas
sumarConLog(3, 4); // Logs + retorna 7
sumarConLog(10, 5); // Logs + retorna 15

// También funciona con arrow functions
const multiplicar = (a, b) => a * b;
const multiplicarConLog = conLog(multiplicar);
multiplicarConLog(3, 7); // Logs + retorna 21
                            
                        
// Ejercicio 10.1: Contador con Closure 

// Función que crea un contador con closure
function crearContador(valorInicial = 0) {
    let contador = valorInicial; // Variable privada

    return {
        incrementar: function() {
            contador++;
            return contador;
        },
        decrementar: function() {
            contador--;
            return contador;
        },
        obtenerValor: function() {
            return contador;
        },
        reset: function() {
            contador = valorInicial;
            return contador;
        }
    };
}

// Crear contadores independientes
const contador1 = crearContador();
const contador2 = crearContador(10);

// Pruebas
console.log(contador1.obtenerValor()); // 0
console.log(contador1.incrementar()); // 1
console.log(contador1.incrementar()); // 2

console.log(contador2.obtenerValor()); // 10
console.log(contador2.decrementar()); // 9

// Los contadores son independientes
console.log(contador1.obtenerValor()); // 2 (sin cambios)
                            
                        
// Ejercicio 10.2: Módulo con Closures

// Módulo de cuenta bancaria con closures
function crearCuenta(saldoInicial = 0) {
    let saldo = saldoInicial;
    let historial = [];

    // Función privada para registrar transacciones
    function registrarTransaccion(tipo, monto, saldoAnterior) {
        historial.push({
            fecha: new Date().toLocaleString(),
            tipo: tipo,
            monto: monto,
            saldoAnterior: saldoAnterior,
            saldoNuevo: saldo
        });
    }

    return {
        depositar: function(monto) {
            if (monto <= 0) {
                return "El monto debe ser positivo";
            }
            const saldoAnterior = saldo;
            saldo += monto;
            registrarTransaccion("Depósito", monto, saldoAnterior);
            return `Depósito exitoso. Nuevo saldo: $${saldo}`;
        },

        retirar: function(monto) {
            if (monto <= 0) {
                return "El monto debe ser positivo";
            }
            if (monto > saldo) {
                return "Fondos insuficientes";
            }
            const saldoAnterior = saldo;
            saldo -= monto;
            registrarTransaccion("Retiro", monto, saldoAnterior);
            return `Retiro exitoso. Nuevo saldo: $${saldo}`;
        },

        consultarSaldo: function() {
            return `Saldo actual: $${saldo}`;
        },

        obtenerHistorial: function() {
            return [...historial]; // Retorna copia del historial
        }
    };
}

// Crear cuenta
const miCuenta = crearCuenta(1000);

// Pruebas
console.log(miCuenta.consultarSaldo()); // Saldo actual: $1000
console.log(miCuenta.depositar(500)); // Depósito exitoso...
console.log(miCuenta.retirar(200)); // Retiro exitoso...
console.log(miCuenta.retirar(2000)); // Fondos insuficientes
console.log(miCuenta.consultarSaldo()); // Saldo actual: $1300

// Ver historial
console.log("Historial de transacciones:");
console.log(miCuenta.obtenerHistorial());
                            
                
// Ejercicio 10.1: Promise Básico
                            
// Función que retorna una Promise
function operacionAsincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 100) + 1;
            const exito = Math.random() > 0.8; // 80% de éxito
            
            if (exito) {
                resolve(numero);
            } else {
                reject("Error en la operación");
            }
        }, 2000);
    });
}

// Usar la Promise con .then() y .catch()
console.log("Iniciando operación asíncrona...");
operacionAsincrona()
    .then(resultado => {
        console.log(`Operación completada: ${resultado}`);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });

console.log("Esta línea se ejecuta inmediatamente");
                            
                         

// Ejercicio 10.2: Async/Await 

// Función async que maneja múltiples operaciones
async function ejecutarOperaciones() {
    try {
        console.log("Ejecutando múltiples operaciones en paralelo...");
        
        // Ejecutar 3 operaciones en paralelo
        const promesas = [
            operacionAsincrona(50),
            operacionAsincrona(53),
            operacionAsincrona(53),
        ];
        
        // Esperar a que todas se completen
        const resultados = await Promise.all(promesas);
        
        // Sumar todos los resultados
        const suma = resultados.reduce((acc, num) => acc + num, 0);
        
        console.log("Resultados individuales:", resultados);
        console.log(`Suma total: ${suma}`);
        
        return suma;
    } catch (error) {
        console.log("Error en las operaciones:", error);
        throw error;
    }
}

// Ejecutar la función async
ejecutarOperaciones()
    .then(resultado => console.log("Proceso completado:", resultado))
    .catch(error => console.log("Falló el proceso:", error));
                             

    // Ejercicio 11.1: Función Curry

    function curry(fn) {
    return function curried(...args) {
        // Si tenemos todos los argumentos necesarios
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        
        // Si no, retornamos una nueva función que espera más argumentos
        return function(...nextArgs) {
            return curried.apply(this, args.concat(nextArgs));
        };
    };
}

// Función de ejemplo para testear curry
function sumarTres(a, b, c) {
    return a + b + c;
}

// Crear versión curried
const sumarCurried = curry(sumarTres);

// Diferentes formas de usar curry
console.log("Suma normal:", sumarTres(1, 2, 3)); // 6

console.log("Curry completo:", sumarCurried(1)(2)(3)); // 6
console.log("Curry parcial 1:", sumarCurried(1, 2)(3)); // 6
console.log("Curry parcial 2:", sumarCurried(1)(2, 3)); // 6

// Crear funciones especializadas
const sumar5 = sumarCurried(5);
const sumar5y10 = sumar5(10);

console.log("Función especializada:", sumar5y10(3)); // 18
                            
                        
// Ejercicio 11.2: Composición de Funciones 

function compose(...funciones) {
    return function(valor) {
        return funciones.reduceRight((acc, fn) => fn(acc), valor);
    };
}

// Pipe: aplica funciones de izquierda a derecha
function pipe(...funciones) {
    return function(valor) {
        return funciones.reduce((acc, fn) => fn(acc), valor);
    };
}

// Funciones simples para componer
const incrementar = x => x + 1;
const duplicar = x => x * 2;
const cuadrado = x => x * x;

// Usando compose (derecha a izquierda)
const operacionCompose = compose(duplicar, cuadrado, incrementar);
console.log("Compose con 3:", operacionCompose(3)); // (3+1)² * 2 = 32

// Usando pipe (izquierda a derecha)
const operacionPipe = pipe(incrementar, duplicar, cuadrado);
console.log("Pipe con 3:", operacionPipe(3)); // ((3+1) * 2)² = 64

// Ejemplo más complejo con strings
const procesar = pipe(
    str => str.toLowerCase(),
    str => str.trim(),
    str => str.replace(/\s+/g, '-'),
    str => str.substring(0, 10)
);

console.log("Procesando texto:", procesar("  Hola Mundo JavaScript  "));
                             

// Ejercicio 14.1: Call, Apply y Bind

const persona1 = {
    nombre: "Ana",
    edad: 25
};

const persona2 = {
    nombre: "Carlos",
    edad: 30
};

// Función que depende del contexto (this)
function saludar(saludo = "Hola") {
    return `${saludo}, soy ${this.nombre} y tengo ${this.edad} años`;
}

function presentarse(profesion, ciudad) {
    return `${this.nombre} es ${profesion} y vive en ${ciudad}`;
}

// Usando CALL (argumentos individuales)
console.log("--- CALL ---");
console.log(saludar.call(persona1)); // Hola, soy Ana...
console.log(saludar.call(persona2, "Buenos días")); // Buenos días, soy Carlos...
console.log(presentarse.call(persona1, "doctora", "Madrid"));

// Usando APPLY (argumentos en array)
console.log("--- APPLY ---");
console.log(saludar.apply(persona1, ["¡Hola!"])); // ¡Hola!, soy Ana...
console.log(presentarse.apply(persona2, ["ingeniero", "Barcelona"]));

// Usando BIND (crear nueva función con contexto fijo)
console.log("--- BIND ---");
const saludarAna = saludar.bind(persona1);
const saludarCarlos = saludar.bind(persona2, "¡Qué tal!");

console.log(saludarAna()); // Hola, soy Ana...
console.log(saludarCarlos()); // ¡Qué tal!, soy Carlos...

// Bind con argumentos parciales
const presentarAna = presentarse.bind(persona1, "diseñadora");
console.log(presentarAna("Valencia")); // Ana es diseñadora...
                            
                        
// Ejercicio 14.2: Factory de Objetos con Métodos 

function crearCalculadora(valorInicial = 0) {
    let valor = valorInicial;
    let historial = [];
    
    function registrarOperacion(operacion, operando, resultado) {
        historial.push(`${operacion} ${operando} = ${resultado}`);
    }

    return {
        sumar(num) {
            const anterior = valor;
            valor += num;
            registrarOperacion(`${anterior} +`, num, valor);
            console.log(`Sumando ${num}: ${anterior} + ${num} = ${valor}`);
            return this; // Para encadenamiento
        },

        restar(num) {
            const anterior = valor;
            valor -= num;
            registrarOperacion(`${anterior} -`, num, valor);
            console.log(`Restando ${num}: ${anterior} - ${num} = ${valor}`);
            return this;
        },

        multiplicar(num) {
            const anterior = valor;
            valor *= num;
            registrarOperacion(`${anterior} ×`, num, valor);
            console.log(`Multiplicando por ${num}: ${anterior} × ${num} = ${valor}`);
            return this;
        },

        dividir(num) {
            if (num === 0) {
                console.log("Error: División por cero");
                return this;
            }
            const anterior = valor;
            valor /= num;
            registrarOperacion(`${anterior} ÷`, num, valor);
            console.log(`Dividiendo por ${num}: ${anterior} ÷ ${num} = ${valor}`);
            return this;
        },

        resultado() {
            console.log(`Resultado final: ${valor}`);
            return valor;
        },

        reset() {
            valor = valorInicial;
            historial = [];
            console.log(`Calculadora reseteada a ${valorInicial}`);
            return this;
        },

        historial() {
            console.log("Historial de operaciones:", historial);
            return this;
        }
    };
}

// Crear y usar calculadoras
const calc1 = crearCalculadora(10);
const resultado1 = calc1
    .sumar(5)
    .multiplicar(2)
    .restar(8)
    .dividir(3)
    .resultado(); // 4

console.log("\n--- Segunda calculadora ---");
const calc2 = crearCalculadora();
calc2.sumar(100).dividir(4).multiplicar(3).resultado(); // 75
                            
                        
// Ejercicio 15.1: Throttle y Debounce 
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func.apply(this, args);
        }
    };
}

// DEBOUNCE: Retrasa ejecución hasta que paren las llamadas
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Funciones de ejemplo
function buscar(termino) {
    console.log(`🔍 Buscando: "${termino}" - ${new Date().toLocaleTimeString()}`);
}

function onScroll(posicion) {
    console.log(`📜 Scroll en posición: ${posicion} - ${new Date().toLocaleTimeString()}`);
}

// Crear versiones optimizadas
const busquedaDebounced = debounce(buscar, 500); // 500ms de espera
const scrollThrottled = throttle(onScroll, 200); // máximo cada 200ms

// Simular búsqueda rápida (debounce)
console.log("=== SIMULANDO BÚSQUEDA RÁPIDA (DEBOUNCE) ===");
busquedaDebounced("j");
setTimeout(() => busquedaDebounced("ja"), 100);
setTimeout(() => busquedaDebounced("jav"), 200);
setTimeout(() => busquedaDebounced("java"), 300);
setTimeout(() => busquedaDebounced("javas"), 400);
setTimeout(() => busquedaDebounced("javascript"), 450);
// Solo se ejecutará la última búsqueda después de 500ms

// Simular scroll rápido (throttle)
setTimeout(() => {
    console.log("\n=== SIMULANDO SCROLL RÁPIDO (THROTTLE) ===");
    for (let i = 0; i < 10; i++) {
        setTimeout(() => scrollThrottled(i * 100), i * 50);
    }
}, 2000);
                            
                         
// Ejercicio 15.2: Función Once y Partial 

function once(fn) {
    let executed = false;
    let result;

    return function(...args) {
        if (!executed) {
            executed = true;
            result = fn.apply(this, args);
            console.log("✅ Función ejecutada por primera vez");
        } else {
            console.log("❌ Función ya ejecutada, retornando resultado anterior");
        }
        return result;
    };
}

// PARTIAL: Aplicación parcial de argumentos
function partial(fn, ...argsIniciales) {
    return function(...argsRestantes) {
        return fn.apply(this, [...argsIniciales, ...argsRestantes]);
    };
}

// Ejemplos de uso de ONCE
function inicializar() {
    console.log("🚀 Inicializando sistema...");
    console.log("📊 Cargando configuración...");
    console.log("🔗 Conectando a base de datos...");
    return "Sistema inicializado correctamente";
}

const inicializarUnaVez = once(inicializar);

console.log("=== PROBANDO FUNCIÓN ONCE ===");
console.log("Primera llamada:", inicializarUnaVez());
console.log("Segunda llamada:", inicializarUnaVez());
console.log("Tercera llamada:", inicializarUnaVez());

// Ejemplos de uso de PARTIAL
function calcular(operacion, a, b, c) {
    switch(operacion) {
        case 'suma':
            return a + b + c;
        case 'producto':
            return a * b * c;
        case 'promedio':
            return (a + b + c) / 3;
        default:
            return 0;
    }
}

console.log("\n=== PROBANDO FUNCIÓN PARTIAL ===");

// Crear funciones especializadas
const sumar = partial(calcular, 'suma');
const multiplicar = partial(calcular, 'producto');
const promediar = partial(calcular, 'promedio');

console.log("Suma 2+3+4:", sumar(2, 3, 4)); // 9
console.log("Producto 2×3×4:", multiplicar(2, 3, 4)); // 24
console.log("Promedio (10,20,30):", promediar(10, 20, 30)); // 20

// Partial con más argumentos fijos
const sumarCon10 = partial(sumar, 10); // ya tiene 'suma' y primer número 10
console.log("Sumar 10+5+3:", sumarCon10(5, 3)); // 18

// Combinar once y partial
const inicializarBaseDatos = once(partial(calcular, 'inicializar'));
                            
                        