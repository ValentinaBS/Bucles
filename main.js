// 1
let numeroIngresado = Number(prompt("Ingrese un número"))

for (let i = 1; i < 10; i++) {
    console.log(numeroIngresado * i)
}

// 2
let numeroParaAcumular
let numerosAcumulados = 0
let numeroFinal

do {
    numeroParaAcumular = Number(prompt("Ingrese un número a acumular"))
    numerosAcumulados += numeroParaAcumular
    console.log(numerosAcumulados)
    if(numeroParaAcumular === 0)  {
        numeroFinal = numerosAcumulados
    }
} while (numeroParaAcumular !== 0);

// 3
function adivinarNumero() {
    if(numeroFinal <= 100 && numeroFinal >= 1) {
        let numeroIntentado = Number(prompt("Ingrese un número para adivinar el número final"))
        let intentos = 1;
        while (numeroIntentado !== numeroFinal) {
            intentos++;
            if(numeroIntentado > numeroFinal) {
                numeroIntentado = Number(prompt("Su número es mayor, intente de nuevo"))
            } else if(numeroIntentado < numeroFinal) {
                numeroIntentado = Number(prompt("Su número es menor, intente de nuevo"))
            }
        }
        console.log(`Felicidades, has ganado en ${intentos} intentos`)
    }
}
//adivinarNumero()

// 4
let numeroConDivisores = Number(prompt("Ingrese un número para ver sus divisores"))

function mostrarDivisores(num) {
    let divisores = [];
    let finRepeticion = Math.floor(Math.sqrt(num)) // evita que se repita de atrás para adelante la lista de divisores

    for(let i = 0; i <= finRepeticion; i++) {
        if(num % i === 0) {
            divisores.push(i);
            if(i*i !== num) {
                divisores.push(num / i)
            }
        }
    }
    console.log(divisores)
}
mostrarDivisores(numeroConDivisores)

// 5
let elementos = ["Silla", "Cuchara", "Sol", "Mar", "León", "Lima", 5, 3, 1, 6]

for(let i = 0; i < elementos.length; i++) {
    console.log("El elemento actual es: "+ elementos[i])
}

// 6
let numeros = [2, 4, 7, 9, 12, 3, 11, 18, 5, 10]

function numerosDobles(listaNumeros) {
    for(let numero of listaNumeros) {
        console.log(numero * 2)
    }
}

//numerosDobles(numeros)

// 7
let grupoFamiliar = [
    {
        nombre: "Juan",
        familiar: "abuelo",
        edad: 70,
        nombreMascota: "Pepa"
    },
    {
        nombre: "Marta",
        familiar: "abuela",
        edad: 65,
        nombreMascota: "Pepa"
    },
    {
        nombre: "Carla",
        familiar: "madre",
        edad: 40,
        nombreMascota: "Lora"
    },
    {
        nombre: "Lara",
        familiar: "hija",
        edad: 16,
        nombreMascota: "Lora"
    },
    {
        nombre: "Tomás",
        familiar: "hijo",
        edad: 18,
        nombreMascota: "Lora"
    },
]

for (let familiar of grupoFamiliar) {
    console.log(`Mi nombre es ${familiar.nombre}, tengo ${familiar.edad}, mi rol en la familia es de ${familiar.familiar} y mi mascota se llama ${familiar.nombreMascota}`)
}

// 9
let numerosParesImpares = [2, 4, 7, 9, 12, 3, 11, 18, 5, 10];

for(let i = 0; i < numerosParesImpares.length; i++) {
    if(numerosParesImpares[i] % 2 !== 0) {
        console.log(numerosParesImpares[i])
    }
}

// 10
let numerosIngresados = Number(prompt("Ingrese un número"))
let listaNumeros = []
let sumaPares = 0
let sumaImpares = 0

while (numerosIngresados !== 0) {
    listaNumeros.push(numerosIngresados)
    numerosIngresados = Number(prompt("Ingrese un número"))
}

for(let i = 0; i < listaNumeros.length; i++) {
    if(listaNumeros[i] % 2 === 0) {
        sumaPares += listaNumeros[i]
    } else {
        sumaImpares += listaNumeros[i]
    }
}
console.log(sumaPares)
console.log(sumaImpares)

// 11
let numerosAleatorios = [-8, 4, 7, 9, 0, 3, 11, 39, 5, 10];
let numeroMasGrande = 0

for(let i = 0; i < numerosAleatorios.length; i++) {
    if(numerosAleatorios[i] > numeroMasGrande) {
        numeroMasGrande = numerosAleatorios[i]
    }
}
console.log(numeroMasGrande)