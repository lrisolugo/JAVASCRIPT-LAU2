// script.js


let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    };

    const productoExistente = carrito.find(item => item.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {

        producto.cantidad = 1;
        carrito.push(producto);
    }
    guardarCarritoEnLocalStorage();

    mostrarCarrito();
}

function mostrarCarrito() {

    const carritoElemento = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');

    carritoElemento.innerHTML = '';

    
    let total = 0;
    carrito.forEach(producto => {
     
        const productoElemento = document.createElement('li');
        productoElemento.textContent = `${producto.nombre} x${producto.cantidad} - $${producto.precio * producto.cantidad}`;
        carritoElemento.appendChild(productoElemento);

        total += producto.precio * producto.cantidad;
    });

    totalSpan.textContent = total.toFixed(2);
}


function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


function finalizarCompra() {

    carrito = [];
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
}


function finalizarCompra() {
 
    carrito = [];
    mostrarCarrito();
    guardarCarritoEnLocalStorage();


    window.location.href = 'pagina-agradecimiento.html';
}

document.getElementById('finalizarCompraBtn').addEventListener('click', finalizarCompra);




