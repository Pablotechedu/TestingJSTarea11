"strict";

// TAREA 1
// Escribe una función greetWorld(). Tu función no debe tener parámetros y
// debe devolver la cadena 'Hello, World!'.
// Puedes usar declaración de funciones o expresión de funciones.

const greetWorld = () => {
  return "Hello, World!";
};

console.log(greetWorld());

// TAREA 2
// La edad mínima más común para votar es de 18 años. Escribe una función
// canIVote() que tome un número que represente la edad de la persona y
// devuelva el valor booleano true si tiene 18 años o más, y el
// valor booleano false si no los tiene. Muestralo en consola

// Realiza la prueba con:
// console.log(canIVote(19));

const canIVote = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

console.log(`Can I vote if I'm 17?: ${canIVote(17)}`);

// TAREA 3
// Escriba una función, agreeOrDisagree(), que tome dos cadenas y devuelva
// 'You agree!' si las dos cadenas son iguales y 'You disagree!' si las
// dos cadenas son diferentes. Muestra el resultado en consola.

// Prueba tu código con:
// console.log(agreeOrDisagree("yep", "yep"))

const agreeOrDisagree = (string1, string2) => {
  if (string1 === string2) {
    return "You agree!";
  } else {
    return "You disagree!";
  }
};

console.log(agreeOrDisagree("yep, yes", "yep"));

// TAREA 4
// Escribe una función, lifePhase(), que tome la edad(age) de una persona como
// número y devuelva en qué fase de la vida se encuentra.

// Aquí están las clasificaciones:
//  0-3 debería devolver 'baby'
//  4-12 debería devolver 'child'
// 13-19 debería devolver 'teen'
// 20-64 debería devolver 'adult'
// 65-140 debería devolver 'senior citizen'

// Si el número es menor que cero o mayor que 140, el programa
// debería devolver 'This is not a valid age'

const lifePhase = (age) => {
  if (age <= 0 || age >= 140) {
    return "This is not a valid age";
  } else if (age <= 3) {
    return "baby";
  } else if (age <= 12) {
    return "child";
  } else if (age <= 19) {
    return "teen";
  } else if (age <= 64) {
    return "adult";
  } else {
    return "senior citizen";
  }
};

console.log(lifePhase(139));

// TAREA 5
// Escribe una función, finalGrade(). Debería:

// * Toma tres argumentos de tipo número.
// * Encuentra el average de esos tres números
// * Devuelve la calificación de la letra (como una cadena)
//   average a la que corresponde.
// * Devuelve 'Ha ingresado una calificación no válida' si alguna de
//   las tres calificaciones es menor que 0 o mayor que 100.

//     0-59 debería devolver: 'F'
//     60-69 debería devolver: 'D'
//     70-79 debería devolver: 'C'
//     80-89 debería devolver: 'B'
//     90-100 debería devolver:'A'

const finalGrade = (grade1, grade2, grade3) => {
  if (
    typeof grade1 !== "number" ||
    typeof grade2 !== "number" ||
    typeof grade3 !== "number"
  ) {
    return "Ha ingresado una calificación no válida";
  }
  if (
    grade1 < 0 ||
    grade1 > 100 ||
    grade2 < 0 ||
    grade2 > 100 ||
    grade3 < 0 ||
    grade3 > 100
  ) {
    return "Ha ingresado una calificación no válida";
  }

  const average = (grade1 + grade2 + grade3) / 3;
  let finalLetterGrade;

  if (average >= 0 && average <= 59) {
    finalLetterGrade = "F";
  } else if (average >= 60 && average <= 69) {
    finalLetterGrade = "D";
  } else if (average >= 70 && average <= 79) {
    finalLetterGrade = "C";
  } else if (average >= 80 && average <= 89) {
    finalLetterGrade = "B";
  } else if (average >= 90 && average <= 100) {
    finalLetterGrade = "A";
  }

  console.log(
    `La nota final es ${finalLetterGrade} y el average es ${average}`
  );
  return finalLetterGrade;
};

console.log(finalGrade(50, 100, 100)); // Debería imprimir 'La nota final es B y el average es 83.33333333333333'
console.log(finalGrade(110, 100, 100)); // Debería imprimir 'Ha ingresado una calificación no válida'
console.log(finalGrade(100, 100, -10)); // Debería imprimir 'Ha ingresado una calificación no válida'

// TAREA 6
// Escribe una función reportingForDuty(), que tenga dos parámetros string,
// rank y lastname, y retorne una string en el siguiente formato:
// 'rank lastName reporting for duty'

// reportingForDuty('Private', 'Fido')
// // Debería retornar 'Private Fido reporting for duty!'

const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`;
};

console.log(reportingForDuty("Private", "Fido"));

// TAREA 7
// Arregla el código
// Te presento una función rollTheDice(), la cual supuestamente
// simula el lanzamiento de dos dados y el total de los dados.
// La función casi funciona, pero hay algunos errores.
// ¿Puedes arreglar el código, por favor?

// const rollTheDice = () => {
//   // Math.random() nos da un numero random desde 0 pero no incluye el 1
//   //Multiplicamos ese número por 6 para tener un número entre 0 y 6 pero no logramos
//   //incluir el 6
//   // para lograrlo hemos intentado lo siguiente sumamos 1
//     let die1 = Math.random() * 6 + 1
//     let die2 = Math.random() * 6 + 1
//     return die1 + die2
// }

const rollTheDice = () => {
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  console.log(
    `Die 1: ${die1} y Die 2: ${die2} y la suma de ambos es: ${die1 + die2}`
  );
};
rollTheDice();

// TAREA 8
// Aunque la masa de un objeto permanece constante en todo el universo,
// el peso está determinado por la fuerza de gravedad que ejerce sobre él.
// Como cada planeta tiene una gravedad diferente, el mismo objeto pesaría
// cantidades distintas en cada uno de esos planetas.

// Escribe una función, calculateWeight(). Debería:
// * Tener dos parámetros: earthWeight y planet
// * Espera que earthWeight sea un número
// * Espera que planet sea una string
// * devuelve un número que representa el peso de la Tierra equivalente al planet
//   ingresado.

// Manejar los siguientes casos:
// 'Mercury' peso = earthWeight * 0.378
// 'Venus' peso = earthWeight * 0.907
// 'Mars' peso = earthWeight * 0.377
// 'Jupiter' peso = earthWeight * 2.36
// 'Saturn' peso = earthWeight * 0.916
// Para todas las demás entradas,
// devuelva 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'

// Pruebalo con:
// console.log(calculateWeight(100, 'Jupiter')) // Should print 236

const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
    case "Mercury": {
      return earthWeight * 0.378;
    }
    case "Venus": {
      return earthWeight * 0.907;
    }
    case "Mars": {
      return earthWeight * 0.377;
    }
    case "Jupiter": {
      return earthWeight * 2.36;
    }
    case "Saturn": {
      return earthWeight * 0.916;
    }
    default: {
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
    }
  }
};
console.log(calculateWeight(100, "Jupiter")); // Should print 236

// TAREA 9
// Puede resultar difícil hacer un seguimiento de lo que es verdadero o
// falso en JavaScript.
// Escriba una función, truthyOrFalsy(), que acepte cualquier valor y
// devuelva true si ese valor es verdadero y false si ese valor es falso.
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

const truthyOrFalsy = (value) => {
  if (value) {
    return true;
  }
  return false;
};
console.log(truthyOrFalsy("")); // false
console.log(truthyOrFalsy("hello")); // true
console.log(truthyOrFalsy(false)); // false
console.log(truthyOrFalsy(1)); // true

// TAREA 10
// Las personas tienen muchos amigos, pero a veces creen tener más,
// se ha realizado un estudio y se ha determinado que la cantidad
// de amigos imaginarios de una persona es igual a la cantidad
// de amigos por 0.25 es decir un 25% de sus amigos o 1/4 de ellos.

// Escribe una función, numImaginaryFriends() que tome el número
// de amigos de una persona y devuelva el número de amigos
// imaginarios que tiene esa persona.
// Debido a que los amigos solo pueden venir en números enteros,
// deberías redondear el resultado al entero más cercano antes de
// retornarlo.
// La función Math.ceil() te resultará útil.

// Utiliza las siguientes líneas de código para realizar la prueba
// console.log(numImaginaryFriends(20)) // Debe imprimir 5
// console.log(numImaginaryFriends(10)) // debe imprimir 3

// TAREA 11
// Escribe una función, sillySentence(), que contenga 3 parámetros de
// cadena y devuelva la siguiente oración tonta con los espacios
// en blanco completados por los argumentos pasados a la función

//     I am so (adjetive) because I (verb) coding! Time to write
//               some more awesome (noun)!

// La llamada a sillySentence('excited', 'love', 'functions')
// debería retornar 'I am so excited because I love coding! Time
// to write some more awesome functions!'

// Utiliza la siguiente línea de código para realizar la prueba
// console.log(sillySentence('excited', 'love', 'functions'))

// TAREA 12
// Escribe una función, howOld(), que tome dos parámetros numéricos,
// age y year, y devuelva cuántos años tendría una persona con esa
// edad en ese año.

// Debe tratar tres casos diferentes:

// *Si el year está en el futuro, debe devolver:
//  'Tu tendrás [age calculada] en el año [year].'

// *Si el year es anterior al nacimiento, debe devolver una cadena con el
//  siguiente formato:
//  'El año [year] fue [numero de años calculados] años antes de nacer'

//  *Si el year es en el pasado pero no anterior al año de nacimiento de
//  la persona, debe devolver:
//   'Tu tenías [age calculada] en el año [year del pasado]'

//   Utiliza en tu función:
//      let dateToday = new Date();
//      let thisYear = dateToday.getFullYear();

// TAREA 13
// Arregla el código roto:

// Dado el porcentaje de ADN compartido entre dos personas, se puede calcular
// su probable relación familiar.

// Escribimos una función, whatRelation(), que tiene un parámetro numérico,
// percentSharedDNA, y devuelve la relación probable.
// Esperamos que el número que se ingrese sea siempre un entero entre 0 y 100, pero por alguna razón no funciona.

// Así es como se supone que debe calcularse la relación:

// 100 deberían regresar 'You are likely identical twins.'
// 35-99 debería regresar 'You are likely parent and child or full siblings.'
// 14-34 debería regresar 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
// 6-13 debería regresar 'You are likely 1st cousins.'
// 3-5 deberían regresar 'You are likely 2nd cousins.'
// 1-2 debería regresar 'You are likely 3rd cousins.'
// 0 debería regresar 'You are likely not related.'

// ¡Lamentablemente no está funcionando como queremos!

// whatRelation(34)
// // Should return 'You are likely grandparent and grandchild,
// // aunt/uncle and niece/nephew, or half siblings.'
// // But instead it's returning 'You are likely 1st cousins.'

// whatRelation(3)
// // Should return 'You are likely 2nd cousins.'
// // But instead it's returning 'You are likely grandparent and grandchild,
// // aunt/uncle and niece/nephew, or half siblings.'

// El código que está roto es el siguiente:

//   const whatRelation = percentSharedDNA => {
//     if (percentSharedDNA === 100) {
//         return 'You are likely identical twins.'
//     }
//     if (percentSharedDNA > 34) {
//         return 'You are likely parent and child or full siblings.'
//     }
//     if (percentSharedDNA < 13) {
//         return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
//     }
//     if (percentSharedDNA > 5) {
//         return 'You are likely 1st cousins.'
//     }
//     if (percentSharedDNA > 2) {
//         return 'You are likely 2nd cousins.'
//     }
//     if (percentSharedDNA > 0) {
//         return 'You are likely 3rd cousins'
//     }
//     return 'You are likely not related.'
// }

// console.log(whatRelation(34))
// // Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

// console.log(whatRelation(3))
// // Should print 'You are likely 2nd cousins.'

// ¿Puedes arreglarlo?

// TAREA 14
// Calculadora de propinas tipCalculator()
// Cree una función, tipCalculator(), que tenga dos parámetros, una cadena que represente quality el servicio recibido y un número que represente el total costo.

// Devuelve la propina, como un número, en función de lo siguiente:
// 'malo' debe devolver una propina del 5%
// 'ok' debe devolver una propina del 15%
// 'bueno' debe devolver una propina del 20%
// 'excelente' debe devolver una propina del 30%
// todas las demás entradas deben tener como valor predeterminado el 18%.

// tipCalculator('good', 100) // Should return 20

// TAREA 15
// Escriba una función, toEmoticon(), que tome una cadena y devuelva el emoticón correspondiente como cadena. Utilice un modificador/caso y cubra estos casos:

// 'shrug' debería regresar '|_{"}_|'
// 'smiley face' debería regresar ':)'
// 'frowny face' debería regresar ':('
// 'winky face' debería regresar ';)'
// 'heart' debería regresar '<3'
// cualquier otra entrada debería regresar '|_(* ~ *)_|' */
