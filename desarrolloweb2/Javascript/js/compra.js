//Compras a un supermercado
/*
let carrito=[ "leche",1,"carne",2,"papa",3,"fideos",1];
console.log("Item:"+carrito[0]);
console.log("Cantidad:"+carrito[1]);
console.log("Item:"+carrito[2]);
console.log("Cantidad:"+carrito[3]);
console.log("Item:"+carrito[4]);
console.log("Cantidad:"+carrito[5]);
console.log("Item:"+carrito[6]);
console.log("Cantidad:"+carrito[7]);
console.log("IMPRESION COMPLETA");
console.log(carrito);
// Añadir un nuevo item y cantidad al array carrito
carrito.push("arroz", 5);
console.log(carrito);
*/

let item = {nombre: 'Leche', cantidad: 1, precio: 2}; // Precio de la leche es $2.5
console.log("Item: " + item.nombre);
console.log("Cantidad: " + item.cantidad);
console.log("Precio: bs + item.precio");

let carrito = [
    {nombre: 'Leche', cantidad: 1, precio: 2},
    {nombre: 'carne', cantidad: 2, precio: 8},
    {nombre: 'fideo', cantidad: 3, precio: 1},
    {nombre: 'papa', cantidad: 2, precio: 8}
];

console.log("Carrito de compras:");
carrito.forEach(item => {
    console.log("Nombre: " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
    console.log("Precio: bs" + item.precio);
    console.log("Total: bs" + (item.cantidad * item.precio));
    console.log("-----------------------------");
});

// Agregar un nuevo registro al carrito
let nuevoProducto = {nombre: 'Papaya', cantidad: 7, precio: 1};
carrito.push(nuevoProducto);

console.log("Carrito actualizado:");
carrito.forEach(item => {
    console.log("Nombre: " + item.nombre);
    console.log("Cantidad: " + item.cantidad);
    console.log("Precio: bs" + item.precio);
    console.log("Total: bs" + (item.cantidad * item.precio));
    console.log("-----------------------------");
});


