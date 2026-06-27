// ============================================
// LÓGICA DE INICIO - MORINGA HABANA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== PRODUCTOS DESTACADOS ==========
    const destacadosContainer = document.getElementById('productos-destacados');
    if (destacadosContainer) {
        const destacados = obtenerProductosDestacados();
        renderizarProductos(destacados.slice(0, 4), destacadosContainer, {
            mostrarPrecio: true,
            mostrarBoton: true
        });
    }
    
    // ========== ACORDEÓN DE BENEFICIOS ==========
    initAcordeon();
    
    // ========== BOTÓN EXPLORAR ==========
    const btnExplorar = document.querySelector('.btn-explorar');
    if (btnExplorar) {
        btnExplorar.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'catalogo.html';
        });
    }
});

// ========== FUNCIÓN ACORDEÓN ==========

function initAcordeon() {
    const acordeones = document.querySelectorAll('.acordeon-item');
    
    acordeones.forEach((item, index) => {
        const header = item.querySelector('.acordeon-header');
        const content = item.querySelector('.acordeon-content');
        const icon = header.querySelector('.icono');
        
        // Abrir el primero por defecto
        if (index === 0) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            if (icon) icon.textContent = '▲';
        }
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los acordeones
            acordeones.forEach(other => {
                other.classList.remove('active');
                const otherContent = other.querySelector('.acordeon-content');
                const otherIcon = other.querySelector('.icono');
                if (otherContent) otherContent.style.maxHeight = '0';
                if (otherIcon) otherIcon.textContent = '▼';
            });
            
            // Abrir el actual si estaba cerrado
            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) icon.textContent = '▲';
            }
        });
    });
}