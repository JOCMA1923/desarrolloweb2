/*
Descripcion: variables
Desarrollador: Jose Carlos Munoz Alberti
Fecha: 2024/04/16
Cambios: Ninguno
*/ 

// Definición de las variables
let var1 = 15.25;
let var2 = 0;
let var3 = true;
let var4 = "100";
let varx;

// Intento de asignar el valor de var1 a varx
varx = var1+var3; // Suma con el booleano
console.log("Para la variable var1 = " + varx + " con el tipo de dato = " + typeof varx);

varx = var1+var2; // Dentro implicitas
console.log("Para la variable var1 = " + varx + " con el tipo de dato = " + typeof varx);

var1 = var2+var3; // Dentro implicitas
console.log("Para la variable var1 = " + var1 + " con el tipo de dato = " + typeof var1);

varx = Number(var1)+var4; // Dentro explicita
console.log("Para la variable var1 = " + varx + " con el tipo de dato = " + typeof varx);

varx = var1 + var2 // Convercion explicita entre int e int
console.log("Para la variable varx = " + varx + " con el tipo de dato = " + typeof varx);

let vary;
vary = Boolean(var2) + var3; // Convercion explicita entre int y boolean
console.log("Para la variable vary = " + vary + " con el tipo de dato = " + typeof vary);

varx = var1 + parseInt(var4); // Convercion explicita entre int y un string convertido a entero
console.log("Para la variable varx = " + varx + " con el tipo de dato = " + typeof varx);