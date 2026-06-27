// ============================================
// LÓGICA DE CONTACTO - MORINGA HABANA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Configurar mapa
    inicializarMapa();
    
    // Configurar formulario
    configurarFormulario();
});

// ========== MAPA ==========

function inicializarMapa() {
    const mapContainer = document.getElementById('mapa-container');
    if (!mapContainer) return;
    
    // Coordenadas de la sede (ejemplo: La Habana)
    const lat = 23.1136;
    const lng = -82.3666;
    
    try {
        const map = L.map('mapa-container').setView([lat, lng], 15);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);
        
        // Marcador de la sede
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`
            <b>🌿 Moringa Habana</b><br>
            Calle 123 #456 entre A y B<br>
            La Habana, Cuba<br>
            <br>
            🕐 Lunes a Viernes: 9:00 AM - 6:00 PM
        `);
        marker.openPopup();
        
        // Ajustar tamaño al cargar
        setTimeout(() => map.invalidateSize(), 100);
        
    } catch (error) {
        console.error('Error al cargar el mapa:', error);
        mapContainer.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;height:100%;background:#f5f5f5;color:#666;flex-direction:column;gap:8px;">
                <span style="font-size:2rem;">🗺️</span>
                <p>No se pudo cargar el mapa</p>
                <p style="font-size:0.85rem;">Calle 123 #456 entre A y B, La Habana, Cuba</p>
            </div>
        `;
    }
}

// ========== FORMULARIO ==========

function configurarFormulario() {
    const form = document.getElementById('form-contacto');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validaciones
        if (!nombre || !email || !mensaje) {
            mostrarNotificacion('Por favor, completa todos los campos obligatorios', 'error');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            mostrarNotificacion('Por favor, introduce un correo electrónico válido', 'error');
            return;
        }
        
        if (mensaje.length < 10) {
            mostrarNotificacion('El mensaje debe tener al menos 10 caracteres', 'error');
            return;
        }
        
        // Guardar mensaje
        const resultado = guardarMensaje(nombre, email, telefono, mensaje);
        
        if (resultado.exito) {
            mostrarNotificacion(resultado.mensaje, 'success');
            form.reset();
            
            // Enviar a WhatsApp (opcional)
            const mensajeWhatsApp = encodeURIComponent(
                `Hola, soy ${nombre}. Me comunico desde la página web.\n\n` +
                `Mensaje: ${mensaje}`
            );
            // Si tienen WhatsApp, se puede redirigir
            // window.open(`https://wa.me/535XXXXXXXX?text=${mensajeWhatsApp}`);
            
        } else {
            mostrarNotificacion(resultado.error || 'Error al enviar el mensaje', 'error');
        }
    });
}

// ========== REDES SOCIALES (enlaces) ==========

document.addEventListener('DOMContentLoaded', function() {
    // Configurar enlaces de redes sociales
    const redes = {
        whatsapp: 'https://wa.me/535XXXXXXXX',
        telegram: 'https://t.me/moringahabana',
        instagram: 'https://instagram.com/moringahabana',
        canal: 'https://chat.whatsapp.com/XXXXXXXX'
    };
    
    document.querySelectorAll('[data-red-social]').forEach(el => {
        const red = el.dataset.redSocial;
        if (redes[red]) {
            el.href = redes[red];
            el.target = '_blank';
            el.rel = 'noopener noreferrer';
        }
    });
});