// ============================================
// BASE DE DATOS DE PRODUCTOS - MORINGA HABANA
// ============================================

const productos = [
    // ========== POLVO DE MORINGA ==========
    {
        id: 1,
        nombre: "Polvo de Moringa",
        categoria: "polvo",
        imagen: "polvo.jpg",
        precio: 250.00,
        disponible: true,
        destacado: true,
        rating: 5,
        descripcion: "El superalimento más nutritivo de la naturaleza. Contiene todos los aminoácidos esenciales, ideal para agregar a tus comidas diarias.",
        composicion: [
            "46 antioxidantes naturales",
            "36 componentes antiinflamatorios",
            "Más de 90 micronutrientes",
            "Vitaminas: A, B1, B2, B3, B6, C, E",
            "Minerales: Calcio, Potasio, Magnesio, Zinc",
            "Proteínas de alta calidad"
        ],
        modoEmpleo: [
            "Agregar a batidos, jugos, miel o a tu bebida favorita",
            "Agregar a frijoles, sopas, salsas",
            "Agregar a ensaladas, arroces, pastas, carnes",
            "Usarlos en repostería",
            "No altera el sabor ni la textura de las recetas"
        ],
        presentacion: "Frasco de 200g"
    },

    // ========== CÁPSULAS DE MORINGA ==========
    {
        id: 2,
        nombre: "Cápsulas de Moringa",
        categoria: "capsulas",
        imagen: "capsulas.jpg",
        precio: 350.00,
        disponible: true,
        destacado: true,
        rating: 5,
        descripcion: "Suplemento nutricional en cápsulas para consumo diario. Fácil de tomar y perfecto para mantener tu salud en óptimas condiciones.",
        composicion: [
            "Polvo de hojas de moringa 100% natural",
            "Cápsula vegetal (sin gelatina)",
            "Sin conservantes ni aditivos",
            "Sin gluten"
        ],
        modoEmpleo: [
            "Adultos y niños mayores de 5 años",
            "6 Cápsulas diarias:",
            "• 2 en el desayuno",
            "• 2 en el almuerzo",
            "• 2 en la cena",
            "Tomar con abundante agua"
        ],
        presentacion: "Frasco de 90 cápsulas (15 días)"
    },

    // ========== SEMILLAS DE MORINGA ==========
    {
        id: 3,
        nombre: "Semillas de Moringa",
        categoria: "semillas",
        imagen: "semillas.jpg",
        precio: 180.00,
        disponible: false, // Agotado temporalmente
        destacado: false,
        rating: 4,
        descripcion: "Semillas con alto contenido nutricional y propiedades medicinales. Ideales para consumir directamente o para purificar agua.",
        composicion: [
            "35-40% de aceite comestible de alta calidad",
            "Vitaminas y minerales indispensables",
            "Propiedades antibacterianas",
            "Capacidad de purificar agua contaminada"
        ],
        modoEmpleo: [
            "Retirar la cáscara externa que las cubre",
            "Tomar hasta 5 semillas diarias con un vaso grande de agua",
            "Pueden ser masticadas o ligeramente machacadas",
            "⚠️ ADVERTENCIA: No exceder la cantidad recomendada porque puede tener efecto laxante"
        ],
        presentacion: "Bolsa de 100g"
    },

    // ========== TÉ DE MORINGA ==========
    {
        id: 4,
        nombre: "Té de Moringa",
        categoria: "te",
        imagen: "te.jpg",
        precio: 150.00,
        disponible: true,
        destacado: true,
        rating: 4,
        descripcion: "Infusión de hojas secas de moringa, 100% libre de cafeína. Perfecto para disfrutar en cualquier momento del día.",
        composicion: [
            "Hojas secas de moringa 100% natural",
            "Libre de cafeína",
            "Sin azúcar añadido",
            "Alto contenido en antioxidantes"
        ],
        modoEmpleo: [
            "Poner a hervir un litro de agua",
            "Apagar el fuego",
            "Añadir una cucharada de hojas secas de moringa (10g)",
            "Tapar y dejar reposar 5-7 minutos",
            "Colar y consumir",
            "Se puede endulzar con miel al gusto"
        ],
        presentacion: "Bolsa de 100g (10 infusiones)"
    },

    // ========== ACEITE DE MORINGA ==========
    {
        id: 5,
        nombre: "Aceite de Moringa",
        categoria: "aceite",
        imagen: "aceite.jpg",
        precio: 280.00,
        disponible: true,
        destacado: false,
        rating: 5,
        descripcion: "Aceite vegetal comestible y cosmético extraído de las semillas de moringa. Rico en omega-9 y vitamina E.",
        composicion: [
            "Rico en Omega-9 (ácido oleico)",
            "Alto contenido en Vitamina E (tocoferoles)",
            "Propiedades antioxidantes",
            "Ácidos grasos esenciales"
        ],
        modoEmpleo: [
            "🍳 Uso alimenticio:",
            "• Para cocinar a fuego medio",
            "• Como aderezo en ensaladas",
            "• Ideal para salteados",
            "",
            "💆 Uso cosmético:",
            "• Hidratación profunda de piel",
            "• Tratamiento capilar",
            "• Masajes corporales",
            "• Tratamiento para la piel (quemaduras, cicatrices)"
        ],
        presentacion: "Frasco de 250ml"
    },

    // ========== BARRAS ENERGÉTICAS ==========
    {
        id: 6,
        nombre: "Barra Energética de Moringa",
        categoria: "alimentos",
        imagen: "barras.jpg",
        precio: 40.00,
        disponible: true,
        destacado: true,
        rating: 5,
        descripcion: "Deliciosa barra energética con moringa y frutos secos. El snack perfecto para recargar energías en cualquier momento.",
        composicion: [
            "Polvo de moringa",
            "Frutos secos (almendras, nueces)",
            "Miel natural",
            "Avena",
            "Semillas de chía",
            "Sin azúcar refinada"
        ],
        modoEmpleo: [
            "Consumir como snack entre comidas",
            "Ideal para antes o después del ejercicio",
            "Perfecto para llevar en la mochila o cartera",
            "Se conserva a temperatura ambiente"
        ],
        presentacion: "Barra de 45g"
    },

    // ========== GALLETAS DE ARROZ ==========
    {
        id: 7,
        nombre: "Galletas de Arroz con Moringa",
        categoria: "alimentos",
        imagen: "galletas.jpg",
        precio: 120.00,
        disponible: true,
        destacado: false,
        rating: 4,
        descripcion: "Galletas de arroz crujientes enriquecidas con polvo de moringa. Una opción saludable y deliciosa para cualquier hora.",
        composicion: [
            "Harina de arroz",
            "Polvo de moringa",
            "Aceite de oliva",
            "Sal marina",
            "Sin gluten",
            "Sin conservantes"
        ],
        modoEmpleo: [
            "Consumir directamente como snack",
            "Acompañar con queso, aguacate o hummus",
            "Perfectas para picar entre comidas",
            "Se conservan en lugar fresco y seco"
        ],
        presentacion: "Paquete de 200g (12 galletas)"
    },

    // ========== JABÓN DE MORINGA ==========
    {
        id: 8,
        nombre: "Jabón Artesanal de Moringa",
        categoria: "cosmeticos",
        imagen: "jabon.jpg",
        precio: 95.00,
        disponible: true,
        destacado: false,
        rating: 5,
        descripcion: "Jabón artesanal elaborado con aceite de moringa y ingredientes naturales. Nutre, hidrata y protege tu piel.",
        composicion: [
            "Aceite de moringa",
            "Aceite de coco",
            "Aceite de oliva",
            "Leche de cabra",
            "Arcilla blanca",
            "Aceites esenciales naturales"
        ],
        modoEmpleo: [
            "Uso diario para lavado de manos y cuerpo",
            "Aplicar sobre la piel húmeda",
            "Enjuagar con abundante agua",
            "Ideal para pieles secas y sensibles",
            "Libre de químicos agresivos"
        ],
        presentacion: "Barra de 100g"
    },

    // ========== CREMA HIDRATANTE ==========
    {
        id: 9,
        nombre: "Crema Hidratante de Moringa",
        categoria: "cosmeticos",
        imagen: "crema.jpg",
        precio: 160.00,
        disponible: true,
        destacado: true,
        rating: 5,
        descripcion: "Crema hidratante con aceite de moringa, aloe vera y vitamina E. Nutre profundamente y combate los signos de envejecimiento.",
        composicion: [
            "Aceite de moringa (alto en omega-9)",
            "Aloe vera",
            "Vitamina E",
            "Aceite de jojoba",
            "Manteca de karité",
            "Agua de rosas"
        ],
        modoEmpleo: [
            "Aplicar sobre la piel limpia y seca",
            "Masajear suavemente hasta absorción",
            "Usar diariamente, mañana y noche",
            "Ideal para rostro y cuerpo",
            "Protege contra el envejecimiento prematuro"
        ],
        presentacion: "Frasco de 100ml"
    }
];

// ============================================
// FUNCIONES CRUD (CREATE, READ, UPDATE, DELETE)
// ============================================

function obtenerTodosLosProductos() {
    return productos;
}

function obtenerProductoPorId(id) {
    return productos.find(p => p.id === id);
}

function obtenerProductosPorCategoria(categoria) {
    return productos.filter(p => p.categoria === categoria);
}

function obtenerProductosDestacados() {
    return productos.filter(p => p.destacado);
}

function obtenerProductosDisponibles() {
    return productos.filter(p => p.disponible);
}

function obtenerCategorias() {
    const categorias = [...new Set(productos.map(p => p.categoria))];
    const mapaCategorias = {
        'polvo': 'Polvo',
        'capsulas': 'Cápsulas',
        'semillas': 'Semillas',
        'te': 'Té',
        'aceite': 'Aceite',
        'alimentos': 'Alimentos',
        'cosmeticos': 'Cosméticos'
    };
    return categorias.map(cat => ({
        id: cat,
        nombre: mapaCategorias[cat] || cat.charAt(0).toUpperCase() + cat.slice(1)
    }));
}

function obtenerProductosRelacionados(id) {
    const producto = obtenerProductoPorId(id);
    if (!producto) return [];
    return obtenerProductosPorCategoria(producto.categoria)
        .filter(p => p.id !== id)
        .slice(0, 4);
}

function filtrarProductos(termino) {
    if (!termino) return obtenerTodosLosProductos();
    const terminoLower = termino.toLowerCase();
    return productos.filter(p => 
        p.nombre.toLowerCase().includes(terminoLower) ||
        p.categoria.toLowerCase().includes(terminoLower) ||
        p.descripcion.toLowerCase().includes(terminoLower)
    );
}

// Formatear precio en CUP
function formatearPrecio(precio) {
    return `$${precio.toFixed(2)} CUP`;
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        productos,
        obtenerTodosLosProductos,
        obtenerProductoPorId,
        obtenerProductosPorCategoria,
        obtenerProductosDestacados,
        obtenerProductosDisponibles,
        obtenerCategorias,
        obtenerProductosRelacionados,
        filtrarProductos,
        formatearPrecio
    };
}