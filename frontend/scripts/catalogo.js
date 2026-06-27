// ============================================
// LÓGICA DE CATÁLOGO - MORINGA HABANA
// ============================================

let categoriaActual = 'todos';
let terminoBusqueda = '';

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('productos-container');
    const filtrosContainer = document.getElementById('filtros-container');
    const searchInput = document.getElementById('search-input');
    const contador = document.getElementById('contador-productos');
    
    // Cargar categorías
    const categorias = obtenerCategorias();
    if (filtrosContainer) {
        renderizarCategorias(categorias, filtrosContainer, 'todos');
    }
    
    // Renderizar productos iniciales
    renderizarCatalogo();
    
    // ========== EVENTOS ==========
    
    // Filtros por categoría
    if (filtrosContainer) {
        filtrosContainer.addEventListener('click', function(e) {
            const btn = e.target.closest('.filtro-btn');
            if (!btn) return;
            
            categoriaActual = btn.dataset.categoria;
            
            // Actualizar estado visual
            this.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            
            renderizarCatalogo();
        });
    }
    
    // Búsqueda
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            terminoBusqueda = this.value.trim().toLowerCase();
            renderizarCatalogo();
        });
    }
    
    // Ordenar
    const ordenarSelect = document.getElementById('ordenar');
    if (ordenarSelect) {
        ordenarSelect.addEventListener('change', function() {
            renderizarCatalogo();
        });
    }
    
    // ========== FUNCIÓN RENDERIZAR CATÁLOGO ==========
    
    function renderizarCatalogo() {
        // Obtener productos según filtros
        let productos = obtenerTodosLosProductos();
        
        // Filtrar por categoría
        if (categoriaActual !== 'todos') {
            productos = productos.filter(p => p.categoria === categoriaActual);
        }
        
        // Filtrar por búsqueda
        if (terminoBusqueda) {
            productos = productos.filter(p => 
                p.nombre.toLowerCase().includes(terminoBusqueda) ||
                p.descripcion.toLowerCase().includes(terminoBusqueda) ||
                p.categoria.toLowerCase().includes(terminoBusqueda)
            );
        }
        
        // Ordenar
        const orden = ordenarSelect ? ordenarSelect.value : 'default';
        switch(orden) {
            case 'precio-asc':
                productos.sort((a, b) => a.precio - b.precio);
                break;
            case 'precio-desc':
                productos.sort((a, b) => b.precio - a.precio);
                break;
            case 'nombre':
                productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
                break;
            case 'rating':
                productos.sort((a, b) => b.rating - a.rating);
                break;
            default:
                // Mantener orden original
                break;
        }
        
        // Actualizar contador
        if (contador) {
            contador.textContent = `${productos.length} producto${productos.length !== 1 ? 's' : ''}`;
        }
        
        // Renderizar
        renderizarProductos(productos, container, {
            mostrarPrecio: true,
            mostrarBoton: true
        });
    }
});