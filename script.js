// retoUno

// Crea una función colorMessage() que tome 2 argumentos de cadena favoriteColor y shirtColor.

// Si el valor de favoriteColor es el mismo que el valor de shirtColor
// devuelve la cadena 'The shirt is your favorite color!'.

// En caso contrario, devuelve la cadena 'That is a nice color.'

console.log("-------inicio retoUno--------");

const colorMessage = (favoriteColor, shirtColor) => {
  if (favoriteColor === shirtColor) {
    return "The shirt is your favorite color!";
  } else {
    return "That is a nice color.";
  }
};

console.log(colorMessage("black", "blue")); // The shirt is your favorite color!
console.log(colorMessage("blue", "blue")); // The shirt is your favorite color!

console.log("-------final retoUno--------");

// retoDos

// Crea una función isEven() que tome un número como único parámetro.
// La función debe devolver un resultado true si el número es par y false si el número es impar.

console.log("-------inicio retoDos--------");

function isEven(num) {
  if (num % 2 === 0) {
    return `El numero ingresado ( ${num} ) es: ` + true;
  } else {
    return `El numero ingresado ( ${num} ) es: ` + false;
  }
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log("-------final retoDos--------");

// retoTres

// Crea una función numberDigits() que tome la variable x como su único parámetro.

// *Si la variable x está entre 0 y 9, devuelve la cadena 'One digit: N' , donde N es el valor de x. Por ejemplo, numberDigits(5) devolvería:

// 'One digit: 5'

// *Si la variable x está entre 10 y 99, devuelve la cadena 'Two digits: N' , donde N es el valor de x. Por ejemplo, numberDigits(12) se generaría:

// 'Two digits: 12'

// *Cualquier otro valor de x, incluidos los números negativos,
// devuelve la cadena 'The number is: N' ,
// donde N es el valor de x. Por ejemplo, numberDigits(-202) se generaría: 'The number is: -202'

console.log("-------inicio retoTres--------");

function numberDigits(x) {
  if (x >= 0 && x <= 9) {
    return `One digit: ${x}`;
  } else if (x >= 10 && x <= 99) {
    return `Two digits: ${x}`;
  } else {
    return `The number is: ${x}`;
  }
}
console.log(numberDigits(5)); // One digit: 5
console.log(numberDigits(12)); // Two digits: 12

console.log("-------final retoTres--------");
