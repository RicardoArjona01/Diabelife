const carro = JSON.parse(localStorage.getItem('carro')) || [];

function guardarCarro() {
    localStorage.setItem('carro', JSON.stringify(carro));
}

function renderizarCarro() {
    const contenedorItemsCarro = document.getElementById('itemsCarro');
    contenedorItemsCarro.innerHTML = '';
    carro.forEach(item => {
        const itemCarroDiv = document.createElement('div');
        itemCarroDiv.classList.add('item-carro');
        itemCarroDiv.innerHTML = `
            <img src="${item.fotos.miniatura}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p>Precio: $${item.precio}</p>
            <p>Cantidad: ${item.cantidad}</p>
            <button onclick="cambiarCantidad(${item.id}, -1)">-</button>
            <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
        `;
        contenedorItemsCarro.appendChild(itemCarroDiv);
    });
    renderizarTotal();
}

function agregarAlCarro(productoId) {
    const producto = productos.find(p => p.id === productoId);
    const productoEnCarro = carro.find(p => p.id === productoId);
    if (productoEnCarro) {
        productoEnCarro.cantidad++;
    } else {
        carro.push({ ...producto, cantidad: 1 });
    }
    guardarCarro();
    renderizarCarro();
}

function renderizarTotal() {
    const total = carro.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    document.getElementById('totalCarro').innerHTML = `Total: $${total}`;
}

function cambiarCantidad(productoId, cantidad) {
    const productoEnCarro = carro.find(p => p.id === productoId);
    if (productoEnCarro) {
        productoEnCarro.cantidad += cantidad;
        if (productoEnCarro.cantidad <= 0) {
            const index = carro.indexOf(productoEnCarro);
            carro.splice(index, 1);
        }
        guardarCarro();
        renderizarCarro();
    }
}

document.getElementById('botonCarro').addEventListener('click', () => {
    const carro = document.getElementById('carro');
    if (carro.style.display === 'none' || carro.style.display === '') {
        carro.style.display = 'block';
        setTimeout(() => {
            carro.classList.add('open');
        }, 10); // retraso
    } else {
        carro.classList.remove('open');
        setTimeout(() => {
            carro.style.display = 'none';
        }, 250); // fin
    }
});

document.getElementById('cerrarCarro').addEventListener('click', () => {
    const carro = document.getElementById('carro');
    carro.classList.remove('open');
    setTimeout(() => {
        carro.style.display = 'none';
    }, 250); // fin
});

function getRandomProducts(productos, numProductos) {
    const shuffled = productos.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numProductos);
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        const producto = productos.find(p => p.id === parseInt(productId));

        if (producto) {
            const detalleProducto = document.getElementById('detalleProducto');
            detalleProducto.innerHTML = `
                <div class="detalle-producto-content">
                    <img src="${producto.fotos.principal}" alt="${producto.nombre}">
                    <div class="detalle-producto-texto">
                        <h2>${producto.nombre}</h2>
                        <p>${producto.descripcion}</p>
                        <p>Precio: $${producto.precio}</p>
                        <p>Tipo: ${producto.tipo}</p>
                        <p>Stock: ${producto.stock}</P>
                        <button class="btnAgregarProducto" onclick="agregarAlCarro(${producto.id})">Agregar al Carro</button>
                    </div>
                </div>
            `;
        } else {
            console.error(`No se encontró ningún producto con el ID ${productId}`);
        }
    } else {
        console.error('No se proporcionó ningún ID de producto en la URL');
    }

    // Renderizar productos aleatorios
    const productosRandom = getRandomProducts(productos, 3);
    const productosRandomContainer = document.createElement('div');
    productosRandomContainer.id = 'productosRandom';
    productosRandomContainer.classList.add('productos-random-container'); // Clase para estilos opcionales

    productosRandom.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto-random'); // Ajusta clase CSS
        productoDiv.innerHTML = `
            <img src="${producto.fotos.principal}" alt="${producto.nombre}" style="width: 100%; height: auto;">
            <div class="detalle-producto-texto">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
                <p>Tipo: ${producto.tipo}</p>
                <p>Stock: ${producto.stock}</p>
                <button class="btnAgregarProducto" onclick="agregarAlCarro(${producto.id})">Agregar al Carro</button>
            </div>
        `;
        productosRandomContainer.appendChild(productoDiv);
    });

    const detalleProducto = document.getElementById('detalleProducto');
    detalleProducto.insertAdjacentElement('afterend', productosRandomContainer);
});


document.getElementById('inicio').addEventListener('click', () => {
    window.location.href = 'tienda.html';
});

document.getElementById('perfil').addEventListener('click', () => {
    window.location.href = 'perfil.html';
});

document.getElementById('produ').addEventListener('click', () => {
    window.location.href = 'productos.html';
});

document.getElementById('iniciar').addEventListener('click', () => {
    window.location.href = 'login.html';
});

document.getElementById('cerrar').addEventListener('click', () => {
    window.location.href = 'logout.html';
});
document.getElementById('btnRealizarCompra').addEventListener('click', () => {
    window.location.href = 'pago.html';
});
renderizarCarro();
