// ============================================
// LÓGICA DE DETALLE - MORINGA HABANA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const params = getUrlParams();
    const id = params.id ? parseInt(params.id) : null;
    
    if (!id) {
        mostrarNotificacion('Producto no especificado', 'error');
        setTimeout(() => window.location.href = 'catalogo.html', 2000);
        return;
    }
    
    const producto = obtenerProductoPorId(id);
    if (!producto) {
        mostrarNotificacion('Producto no encontrado', 'error');
        setTimeout(() => window.location.href = 'catalogo.html', 2000);
        return;
    }
    
    renderizarDetalle(producto);
    renderizarProductosRelacionados(id);
    
    // Actualizar título de la página
    document.title = `${producto.nombre} - Moringa Habana`;
});

function renderizarDetalle(producto) {
    // Imagen
    const imgContainer = document.getElementById('producto-imagen');
    if (imgContainer) {
        imgContainer.innerHTML = `
            <img src="resources/img/productos/${producto.imagen}" alt="${producto.nombre}">
            <span class="badge ${producto.disponible ? 'disponible' : 'agotado'}">
                ${producto.disponible ? '✅ Disponible' : '❌ Agotado'}
            </span>
        `;
    }
    
    // Información principal
    document.getElementById('producto-nombre').textContent = producto.nombre;
    
    const estadoEl = document.getElementById('producto-estado');
    if (estadoEl) {
        estadoEl.textContent = producto.disponible ? '✅ Disponible en sede' : '❌ Temporalmente agotado';
        estadoEl.className = `estado ${producto.disponible ? 'disponible' : 'no-disponible'}`;
    }
    
    document.getElementById('producto-precio').textContent = formatearPrecio(producto.precio);
    document.getElementById('producto-descripcion').textContent = producto.descripcion;
    document.getElementById('producto-rating').textContent = '⭐'.repeat(producto.rating);
    document.getElementById('producto-presentacion').textContent = `📦 Presentación: ${producto.presentacion}`;
    
    // Composición
    const composicionList = document.getElementById('producto-composicion');
    if (composicionList) {
        composicionList.innerHTML = producto.composicion.map(item => `<li>${item}</li>`).join('');
    }
    
    // Modo de empleo
    const empleoList = document.getElementById('producto-empleo');
    if (empleoList) {
        empleoList.innerHTML = producto.modoEmpleo.map(item => {
            if (item.startsWith('⚠️')) {
                return `<li class="aviso">${item}</li>`;
            }
            return `<li>${item}</li>`;
        }).join('');
    }
}

function renderizarProductosRelacionados(id) {
    const relacionados = obtenerProductosRelacionados(id);
    const container = document.getElementById('productos-relacionados');
    
    if (!container) return;
    
    if (relacionados.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No hay productos relacionados</p>
            </div>
        `;
        return;
    }
    
    renderizarProductos(relacionados, container, {
        mostrarPrecio: true,
        mostrarBoton: true
    });
}