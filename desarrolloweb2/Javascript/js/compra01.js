
let carrito = [
    {nombre: 'Leche', cantidad: 1, precio: 2},
    {nombre: 'carne', cantidad: 2, precio: 8},
    {nombre: 'fideo', cantidad: 3, precio: 3},
    {nombre: 'papa', cantidad: 2, precio: 4}
];

console.log("Carrito de compras:");
carrito.forEach(producto => { // Cambio de nombre de la variable 'item' a 'producto'
    console.log("Nombre: " + producto.nombre);
    console.log("Cantidad: " + producto.cantidad);
    console.log("Precio: Bs " + producto.precio);
    console.log("Total: Bs " + (producto.cantidad * producto.precio));
    console.log("-----------------------------");
});

// Agregar un nuevo registro al carrito
let nuevoProducto = {nombre: 'Papaya', cantidad: 7, precio: 6};
carrito.push(nuevoProducto);

console.log("Carrito actualizado:");
carrito.forEach(producto => { // Cambio de nombre de la variable 'item' a 'producto'
    console.log("Nombre: " + producto.nombre);
    console.log("Cantidad: " + producto.cantidad);
    console.log("Precio: Bs " + producto.precio);
    console.log("Total: Bs " + (producto.cantidad * producto.precio));
    console.log("-----------------------------");
});

