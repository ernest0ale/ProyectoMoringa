// ============================================
// FUNCIONES UTILITARIAS - MORINGA HABANA
// ============================================

function estaDisponible(id) {
    const producto = obtenerProductoPorId(id);
    return producto ? producto.disponible : false;
}

function obtenerPrecio(id) {
    const producto = obtenerProductoPorId(id);
    return producto ? producto.precio : 0;
}

function ordenarProductos(criterio, ascendente = true) {
    const productos = obtenerTodosLosProductos();
    const copia = [...productos];
    
    switch(criterio) {
        case 'nombre':
            copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'precio':
            copia.sort((a, b) => a.precio - b.precio);
            break;
        case 'rating':
            copia.sort((a, b) => b.rating - a.rating);
            break;
        default:
            return copia;
    }
    
    return ascendente ? copia : copia.reverse();
}

function obtenerProductosPorRangoPrecio(min, max) {
    return productos.filter(p => p.precio >= min && p.precio <= max);
}

function obtenerProductoMasCaro() {
    return productos.reduce((max, p) => p.precio > max.precio ? p : max, productos[0]);
}

function obtenerProductoMasBarato() {
    return productos.reduce((min, p) => p.precio < min.precio ? p : min, productos[0]);
}

function obtenerPromedioPrecios() {
    const total = productos.reduce((sum, p) => sum + p.precio, 0);
    return total / productos.length;
}

function obtenerCantidadPorCategoria() {
    const categorias = obtenerCategorias();
    return categorias.map(cat => ({
        categoria: cat.nombre,
        cantidad: obtenerProductosPorCategoria(cat.id).length
    }));
}

function buscarProductosPorPalabraClave(termino) {
    if (!termino) return [];
    const terminoLower = termino.toLowerCase();
    return productos.filter(p => 
        p.nombre.toLowerCase().includes(terminoLower) ||
        p.descripcion.toLowerCase().includes(terminoLower) ||
        p.composicion.some(c => c.toLowerCase().includes(terminoLower)) ||
        p.modoEmpleo.some(m => m.toLowerCase().includes(terminoLower))
    );
}

function obtenerProductosMasVendidos() {
    // Simulación de productos más vendidos (basado en destacados + disponibilidad)
    return productos
        .filter(p => p.disponible)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);
}

function obtenerProductosNuevos() {
    // Simulación: productos con mayor rating o disponibles recientemente
    return productos
        .filter(p => p.disponible && p.destacado)
        .slice(0, 4);
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        estaDisponible,
        obtenerPrecio,
        ordenarProductos,
        obtenerProductosPorRangoPrecio,
        obtenerProductoMasCaro,
        obtenerProductoMasBarato,
        obtenerPromedioPrecios,
        obtenerCantidadPorCategoria,
        buscarProductosPorPalabraClave,
        obtenerProductosMasVendidos,
        obtenerProductosNuevos
    };
}