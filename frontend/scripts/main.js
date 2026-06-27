// ============================================
// FUNCIONES GLOBALES - MORINGA HABANA
// ============================================

// ========== UTILIDADES ==========

function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    for (const [key, value] of params) {
        result[key] = value;
    }
    return result;
}

function formatearPrecio(precio) {
    return `$${precio.toFixed(2)} CUP`;
}

function formatearFecha(fecha) {
    return new Date(fecha).toLocaleDateString('es-CU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function generarId() {
    return Date.now() + Math.random().toString(36).substr(2, 4);
}

function truncarTexto(texto, maxLength = 100) {
    if (texto.length <= maxLength) return texto;
    return texto.substring(0, maxLength) + '...';
}

function capitalizarPalabras(texto) {
    return texto.toLowerCase()
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
}

// ========== RENDERIZADO ==========

function renderizarProductos(productos, container, options = {}) {
    if (!container) return;
    
    const { mostrarPrecio = true, mostrarBoton = true } = options;
    
    if (!productos || productos.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="icon">🔍</div>
                <h3>No hay productos disponibles</h3>
                <p>Pronto tendremos nuevos productos para ti.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = productos.map(p => `
        <div class="producto-card" data-id="${p.id}">
            <div class="producto-imagen">
                <img src="resources/img/productos/${p.imagen}" alt="${p.nombre}" loading="lazy">
                ${!p.disponible ? '<span class="badge agotado">Agotado</span>' : ''}
                ${p.destacado ? '<span class="badge destacado">⭐ Destacado</span>' : ''}
            </div>
            <div class="producto-info">
                <h3>${p.nombre}</h3>
                <div class="rating">${'⭐'.repeat(p.rating)}</div>
                ${mostrarPrecio ? `<div class="precio">${formatearPrecio(p.precio)}</div>` : ''}
                <p class="producto-descripcion">${truncarTexto(p.descripcion, 80)}</p>
                <div class="producto-acciones">
                    ${mostrarBoton ? `<a href="detalle.html?id=${p.id}" class="btn-ver">Ver detalles</a>` : ''}
                    ${p.disponible ? '<span class="disponible">✅ Disponible</span>' : '<span class="no-disponible">❌ No disponible</span>'}
                </div>
            </div>
        </div>
    `).join('');
}

function renderizarCategorias(categorias, container, categoriaActual = 'todos') {
    if (!container) return;
    
    container.innerHTML = `
        <button class="filtro-btn ${categoriaActual === 'todos' ? 'activo' : ''}" data-categoria="todos">
            Todos
        </button>
        ${categorias.map(cat => `
            <button class="filtro-btn ${categoriaActual === cat.id ? 'activo' : ''}" data-categoria="${cat.id}">
                ${cat.nombre}
            </button>
        `).join('')}
    `;
}

function renderizarPaginacion(total, paginaActual, itemsPorPagina, container) {
    if (!container) return;
    
    const totalPaginas = Math.ceil(total / itemsPorPagina);
    if (totalPaginas <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '<div class="paginacion">';
    
    // Botón anterior
    html += `
        <button class="pag-btn ${paginaActual === 1 ? 'disabled' : ''}" 
                data-pagina="${paginaActual - 1}" 
                ${paginaActual === 1 ? 'disabled' : ''}>
            ‹ Anterior
        </button>
    `;
    
    // Números de página
    for (let i = 1; i <= totalPaginas; i++) {
        html += `
            <button class="pag-btn ${i === paginaActual ? 'activo' : ''}" 
                    data-pagina="${i}">
                ${i}
            </button>
        `;
    }
    
    // Botón siguiente
    html += `
        <button class="pag-btn ${paginaActual === totalPaginas ? 'disabled' : ''}" 
                data-pagina="${paginaActual + 1}" 
                ${paginaActual === totalPaginas ? 'disabled' : ''}>
            Siguiente ›
        </button>
    `;
    
    html += '</div>';
    container.innerHTML = html;
}

// ========== NOTIFICACIONES ==========

function mostrarNotificacion(mensaje, tipo = 'info', duracion = 3000) {
    // Crear contenedor si no existe
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensaje;
    container.appendChild(toast);
    
    // Auto cerrar
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, duracion);
    
    // Cerrar al hacer clic
    toast.addEventListener('click', () => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    });
}

// ========== MENU MOBILE ==========

function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
        
        // Cerrar al hacer clic en un enlace
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
            });
        });
    }
}

// ========== NAVEGACIÓN ACTIVA ==========

function setActiveNav(page) {
    document.querySelectorAll('.nav a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
}

// ========== INICIALIZACIÓN ==========

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar menú móvil
    initMobileMenu();
    
    // Detectar página actual para resaltar en navegación
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'inicio';
    setActiveNav(currentPage);
});