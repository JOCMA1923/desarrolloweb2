/*
Descripcion: Ejemplo de array mas complejo-ordenado
Desarrollador: Jose Carlos Munoz Alberti
Fecha: 2024/04/17
Cambios: Ninguno
*/ 
// Array de carrito

let carrito = [
    {nombre: 'Leche', cantidad: 4, precio: 2},
    {nombre: 'carne', cantidad: 12, precio: 8},
    {nombre: 'fideo', cantidad: 7, precio: 3},
    {nombre: 'papa', cantidad: 5, precio: 4}
];
item={nombre:'arroz',cantidad:2,precio:30.5};
carrito.push(item);

/*let numeros=[4,2,6,4,2];
numeros.sort((a,b)=>a-b);
console.log(numeros);*/
console.log("CARRITO ORDENADO POR PRECIO");
let carritordenadoPorPrecio = carrito.slice().sort((a,b)=> a.precio - b.precio);
console.log(carritordenadoPorPrecio);
console.log("CARRITO ORDENADO POR PRECIO");
let carritordenadoPorNombre = carrito.slice().sort((a,b)=> a.nombre.localeCompare(b.nombre))
console.log(carritordenadoPorNombre);





