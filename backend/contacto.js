// ============================================
// GESTIÓN DE CONTACTO - MORINGA HABANA
// ============================================

// Constantes
const STORAGE_KEY = 'moringa_mensajes';

// Obtener todos los mensajes
function obtenerMensajes() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error al obtener mensajes:', error);
        return [];
    }
}

// Guardar un nuevo mensaje
function guardarMensaje(nombre, email, telefono, mensaje) {
    const mensajes = obtenerMensajes();
    
    // Validar datos
    if (!nombre || !email || !mensaje) {
        return { exito: false, error: 'Todos los campos son obligatorios' };
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        return { exito: false, error: 'Correo electrónico no válido' };
    }
    
    const nuevoMensaje = {
        id: Date.now(),
        nombre: nombre.trim(),
        email: email.trim(),
        telefono: telefono ? telefono.trim() : '',
        mensaje: mensaje.trim(),
        fecha: new Date().toLocaleString('es-CU'),
        timestamp: new Date().toISOString(),
        leido: false,
        respondido: false
    };
    
    mensajes.push(nuevoMensaje);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mensajes));
    
    return { 
        exito: true, 
        mensaje: 'Mensaje enviado con éxito. Nos pondremos en contacto pronto.',
        data: nuevoMensaje
    };
}

// Marcar mensaje como leído
function marcarComoLeido(id) {
    const mensajes = obtenerMensajes();
    const index = mensajes.findIndex(m => m.id === id);
    if (index !== -1) {
        mensajes[index].leido = true;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mensajes));
        return true;
    }
    return false;
}

// Marcar mensaje como respondido
function marcarComoRespondido(id) {
    const mensajes = obtenerMensajes();
    const index = mensajes.findIndex(m => m.id === id);
    if (index !== -1) {
        mensajes[index].respondido = true;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mensajes));
        return true;
    }
    return false;
}

// Eliminar un mensaje
function eliminarMensaje(id) {
    let mensajes = obtenerMensajes();
    const existe = mensajes.some(m => m.id === id);
    if (!existe) return false;
    
    mensajes = mensajes.filter(m => m.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mensajes));
    return true;
}

// Eliminar todos los mensajes
function eliminarTodosLosMensajes() {
    localStorage.removeItem(STORAGE_KEY);
    return true;
}

// Obtener estadísticas de mensajes
function obtenerEstadisticasMensajes() {
    const mensajes = obtenerMensajes();
    const total = mensajes.length;
    const leidos = mensajes.filter(m => m.leido).length;
    const noLeidos = total - leidos;
    const respondidos = mensajes.filter(m => m.respondido).length;
    
    return {
        total,
        leidos,
        noLeidos,
        respondidos,
        porResponder: total - respondidos
    };
}

// Obtener mensajes no leídos
function obtenerMensajesNoLeidos() {
    return obtenerMensajes().filter(m => !m.leido);
}

// Obtener mensajes recientes (últimos N)
function obtenerMensajesRecientes(cantidad = 10) {
    const mensajes = obtenerMensajes();
    return mensajes
        .sort((a, b) => b.id - a.id)
        .slice(0, cantidad);
}

// Buscar mensajes por nombre o email
function buscarMensajes(termino) {
    if (!termino) return obtenerMensajes();
    const terminoLower = termino.toLowerCase();
    return obtenerMensajes().filter(m =>
        m.nombre.toLowerCase().includes(terminoLower) ||
        m.email.toLowerCase().includes(terminoLower) ||
        m.mensaje.toLowerCase().includes(terminoLower)
    );
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        obtenerMensajes,
        guardarMensaje,
        marcarComoLeido,
        marcarComoRespondido,
        eliminarMensaje,
        eliminarTodosLosMensajes,
        obtenerEstadisticasMensajes,
        obtenerMensajesNoLeidos,
        obtenerMensajesRecientes,
        buscarMensajes
    };
}