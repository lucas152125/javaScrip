//  Ejercicio 1: Números del 1 al 15 //

for (let i = 1; i <= 15; i++) {
    console.log(i); 
}


//  Ejercicio 2: Números pares del 2 al 20 //

for (let i = 2; i <= 20; i +=2) { 
    console.log(i); } 
  
    // Ejercicio 3: Cuenta regresiva desde 10 // 

for (let i = 10; i >= 1; i--) { 
    console.log(i); 
} 
console.log("¡Despegue!"); 

// Ejercicio 4: Tabla de multiplicar del 7 // 
                
for (let i = 1; i <= 10; i++) { 
    console.log(`7 x ${i} = ${7 * i}`);
}

// Ejercicio 5: Suma de números del 1 al 100 // 

                
let suma = 0; 
for (let i = 1; i <= 100; i++) { 
    suma += i; 
}
console.log("La suma de números del 1 al 100 es:", suma);

// Ejercicio 6: Dividir hasta llegar a 1 //

                
let numero = 128; 
let divisiones = 0; 
while (numero > 1) { 
    numero = numero / 2; 
    divisiones++; 
    console.log(`División ${divisiones}: ${numero}`); 
} 
console.log("Número de divisiones:", divisiones); 

// Ejercicio 7: Números impares menores a 25 // 

                            
let i = 1; 
while (i < 25) { 
    console.log(i); 
    i += 2; 
}
                            
         
// Ejercicio 8: Potencias de 2 // 

let exponente = 1; 
while (exponente <= 8) { 
    let potencia = 2 ** exponente;
    console.log(`2^${exponente} = ${potencia}`); 
    exponente++; 
}
                                        

// Ejercicio 9: Menú de opciones // 

let opcion = 0; 
do { 
    console.log("=== MENÚ ==="); 
    console.log("1. Opción 1"); 
    console.log("2. Opción 2"); 
    console.log("3. Opción 3"); 
    console.log("4. Salir"); 
    opcion++; // Simula selección de usuario 
    console.log("Opción seleccionada:", opcion); 
} while (opcion !== 4);
                            

// Ejercicio 10: Contar dígitos // 

let numero = 9876; 
let digitos = 0; 
do { 
    numero = Math.floor(numero / 10); 
    digitos++; 
} while (numero > 0);
console.log("El número 9876 tiene", digitos, "dígitos");
                                                
 
// Ejercicio 11: Propiedades de un estudiante // 

const estudiante = { 
    nombre: "Edwin Otero", 
    edad: 39, 
    curso: "Desarollo Full Stack", 
    nota: 9.5 
}; 
for (let propiedad in estudiante) { 
    console.log(`${propiedad}: ${estudiante[propiedad]}`); 
}
          
 // Ejercicio 12: Índices de un array // 

                                                 
const dias = ["lunes", "martes", "miércoles", "jueves", "viernes"]; 
for (let indice in dias) { 
    console.log(`Índice ${indice}: ${dias[indice]}`); 
} 

// Ejercicio 13: Inventario de productos // 

                                    
const inventario = {
    manzanas: 50,
    bananas: 30,
    naranjas: 25,
    peras: 15,
    uvas: 40
};
for (let producto in inventario) {
    console.log(`${producto}: ${inventario[producto]}`);
}
                      

// Ejercicio 14: Colores favoritos // 
                                
                                                
const colores = ["rojo", "azul", "verde", "amarillo", "morado"];
for (let color of colores) { 
    console.log("Color favorito:", color); 
} 

// Ejercicio 15: Caracteres de una palabra // 

const palabra = "JAVASCRIPT"; 
for (let letra of palabra) { 
    console.log(letra); 
}
      
// Ejercicio 16: Buscar número específico // 

for (let i = 1; i <= 50; i++) { 
    if (i === 23) { 
        console.log("¡Encontrado el número 23!"); 
        break; 
    } 
    console.log(i); 
} 

// Ejercicio 17: Saltar múltiplos de 3 // 

                                                        
                                                            
for (let i = 1; i <= 20; i++) { 
    if (i % 3 === 0) { 
        continue; 
    } 
    console.log(i); 
}
              
// Ejercicio 18: Patrón de asteriscos // 

                                                                    
for (let i = 1; i <= 5; i++) { 
    let fila = ""; 
    for (let j = 1; j <= i; j++) { 
        fila += "*"; 
    } 
    console.log(fila); 
} 

// Ejercicio 19: Números primos del 1 al 30 // 

for (let num = 2; num <= 30; num++) { 
    let esPrimo = true; 
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) { 
            esPrimo = false; 
            break; 
        } 
    } 
    if (esPrimo) { 
        console.log(num);  
    
    } 
} 

// Ejercicio 20: Simulador de cajero automático // 

let saldo = 1000; 
let opcion = 0;
let operaciones = [1, 2, 3,1,4]; 
// Simula selecciones del usuario
let indiceOp = 0; 
do {
    console.log("\n=== CAJERO AUTOMÁTICO ===");
    console.log("1. Consultar saldo");
    console.log("2. Retirar dinero");
    console.log("3. Depositar dinero");
    console.log("4. Salir");
    opcion = operaciones[indiceOp];
    console.log("Opción seleccionada:", opcion); 
    if (opcion === 1) { 
        console.log("Su saldo actual es: $" + saldo); 
    } else if (opcion === 2) { 
        let retiro = 200; 
        // Simula cantidad a retirar 
        if (retiro <= saldo) { 
            saldo = saldo - retiro; 
            console.log("Retiro exitoso. Nuevo saldo: $" + saldo); 
        } else { 
            console.log("Saldo insuficiente"); 
        } 
    } else if (opcion===3) { 
        let deposito=300; 
        // Simula cantidad a depositar
        saldo = saldo + deposito;
        console.log("Depósito exitoso. Nuevo saldo: $" + saldo); 
    }
    indiceOp++; 
    if (indiceOp >= operaciones.length) 
        indiceOp = operaciones.length - 1;
    } while (opcion !== 4);
console.log("¡Gracias por usar nuestro cajero!");
                    
                                                                    
                                                                

             