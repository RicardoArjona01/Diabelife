const carro = JSON.parse(localStorage.getItem('carro')) || [];

function guardarCarro() {
    localStorage.setItem('carro', JSON.stringify(carro));
}

function renderizarProductos(productosARenderizar = productos) {
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = '';
    productosARenderizar.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <img src="${producto.fotos.principal}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
            <a href="detalleProductos.html?id=${producto.id}">Detalles</a>
            <button class="btnAgregarProducto" onclick="agregarAlCarro(${producto.id})">Agregar al Carro</button>
        `;
        contenedorProductos.appendChild(productoDiv);
    });
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
    const producto = productos.find((p) => p.id === productoId);
    const productoEnCarro = carro.find((p) => p.id === productoId);
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

function filtrarProductos() {
    const terminoBusqueda = document.getElementById('buscador').value.toLowerCase();
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(terminoBusqueda));
    renderizarProductos(productosFiltrados);
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
        }, 250); 
    }
});


document.getElementById('cerrarCarro').addEventListener('click', () => {
    const carro = document.getElementById('carro');
    carro.classList.remove('open');
    setTimeout(() => {
        carro.style.display = 'none';
    }, 250); 
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
    // te manda al login papu
    window.location.href = 'login.html';
});
    // agregado de ultimo minuto, te manda a la pagina donde simulamos una compra
document.getElementById('btnRealizarCompra').addEventListener('click', () => {
    window.location.href = 'pago.html';
});

// Renderizar productos y carrito al cargar la página
renderizarProductos();
renderizarCarro();
