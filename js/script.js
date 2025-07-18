let productos = [
    {
        nombre: 'Alice In Chains',
        descripcion: 'Remera Alice In Chains con diseño exclusivo y alta calidad.',
        descripcionDetallada: 'Remera de Alice In Chains con diseño exclusivo y alta calidad. Fabricada con algodón premium para máxima comodidad y durabilidad. Diseño único que representa la esencia de la banda.',
        precio: 8500,
        imagen: 'remeras/AliceInChains/AliceInChains1.jpeg',
        imagenesAdicionales: [
            'remeras/AliceInChains/AliceInChains2.jpeg',
            'remeras/AliceInChains/AliceInChains3.jpeg'
        ],
        categoria: 'remera'
    },
    {
        nombre: 'Borderline',
        descripcion: 'Remera Borderline con estilo único y confort excepcional.',
        descripcionDetallada: 'Remera Borderline con estilo único y confort excepcional. Diseño moderno y atemporal que combina elegancia con comodidad. Perfecta para cualquier ocasión.',
        precio: 7800,
        imagen: 'remeras/Borderline/Borderline1.jpeg',
        imagenesAdicionales: [
            'remeras/Borderline/Borderline2.jpeg',
            'remeras/Borderline/Borderline3.jpeg'
        ],
        categoria: 'remera'
    },
    {
        nombre: 'Descarnado',
        descripcion: 'Remera Descarnado con diseño impactante y calidad premium.',
        descripcionDetallada: 'Remera Descarnado con diseño impactante y calidad premium. Estilo único que destaca por su originalidad y acabados de primera calidad.',
        precio: 8200,
        imagen: 'remeras/Descarnado/Descarnado1.jpeg',
        imagenesAdicionales: [
            'remeras/Descarnado/Descarnado2.jpeg',
            'remeras/Descarnado/Descarnado3.jpeg'
        ],
        categoria: 'remera'
    },
    {
        nombre: 'Distant',
        descripcion: 'Remera Distant con diseño moderno y confort superior.',
        descripcionDetallada: 'Remera Distant con diseño moderno y confort superior. Combinación perfecta de estilo y funcionalidad para el uso diario.',
        precio: 7900,
        imagen: 'remeras/Distant/Distant1.jpeg',
        imagenesAdicionales: [
            'remeras/Distant/Distant2.jpeg',
            'remeras/Distant/Distant3.jpeg',
            'remeras/Distant/Distant4.jpeg'
        ],
        categoria: 'remera'
    },
    {
        nombre: 'Korn',
        descripcion: 'Remera Korn con diseño exclusivo de la banda.',
        descripcionDetallada: 'Remera Korn con diseño exclusivo de la banda. Calidad premium y diseño único que representa la esencia de Korn.',
        precio: 8600,
        imagen: 'remeras/Korn/Korn1.jpeg',
        imagenesAdicionales: [
            'remeras/Korn/Korn2.jpeg'
        ],
        categoria: 'remera'
    },
    {
        nombre: 'Rings Of Saturn',
        descripcion: 'Remera Rings Of Saturn con estilo metalero auténtico.',
        descripcionDetallada: 'Remera Rings Of Saturn con estilo metalero auténtico. Diseño que captura la intensidad y energía de la banda.',
        precio: 8400,
        imagen: 'remeras/RingsOfSaturn/RingsOfSaturn1.jpeg',
        imagenesAdicionales: [
            'remeras/RingsOfSaturn/RingsOfSaturn2.jpeg'
        ],
        categoria: 'remera'
    },
    {
        nombre: 'The Black Dahlia Murder',
        descripcion: 'Remera The Black Dahlia Murder con diseño impactante.',
        descripcionDetallada: 'Remera The Black Dahlia Murder con diseño impactante. Estilo único que representa la intensidad de la banda.',
        precio: 8700,
        imagen: 'remeras/TheBlackDahliaMurder/TheBlackDahliaMurder1.jpeg',
        imagenesAdicionales: [
            'remeras/TheBlackDahliaMurder/TheBlackDahliaMurder2.jpeg'
        ],
        categoria: 'remera'
    },
    {
        nombre: 'Peeling Flesh',
        descripcion: 'Remera Peeling Flesh con diseño brutal y auténtico.',
        descripcionDetallada: 'Remera Peeling Flesh con diseño brutal y auténtico. Representa la esencia del death metal más extremo con gráficos impactantes y calidad premium.',
        precio: 8900,
        imagen: 'remeras/PeelingFlesh/PeelingFlesh1.jpeg',
        imagenesAdicionales: [
            'remeras/PeelingFlesh/PeelingFlesh2.jpeg',
            'remeras/PeelingFlesh/PeelingFlesh3.jpeg',
            'remeras/PeelingFlesh/PeelingFlesh4.jpeg'
        ],
        categoria: 'remera'
    },
    {
        nombre: 'Deftones Rompe Vientos',
        descripcion: 'Campera Deftones Rompe Vientos con diseño exclusivo.',
        descripcionDetallada: 'Campera Deftones Rompe Vientos con diseño exclusivo. Perfecta para el clima frío con estilo único de la banda.',
        precio: 15000,
        imagen: 'camperas/DeftonesRompeVientos/Deftones1.jpeg',
        imagenesAdicionales: [
            'camperas/DeftonesRompeVientos/Deftones2.jpeg',
            'camperas/DeftonesRompeVientos/Deftones3.jpeg'
        ],
        categoria: 'campera'
    }
];

const seccion_productos = document.querySelector('#seccion-productos')

const modal_detalle = document.getElementById('modal-detalle-producto')
const boton_cerrar_modal_detalle = document.getElementById('boton-cerrar-modal-detalle')
const modal_titulo = document.getElementById('modal-titulo')
const modal_descripcion = document.getElementById('modal-descripcion')
const modal_precio = document.getElementById('modal-precio')

function crearProducto(producto) {
    let tarjeta = document.createElement('article')
    tarjeta.classList.add('producto')

    let imagen = document.createElement('img')
    imagen.src = `./img/${producto.imagen}`
    imagen.alt = producto.nombre

    let informacion = document.createElement('div')
    informacion.classList.add('informacion-producto')

    let titulo = document.createElement('h3')
    titulo.classList.add('titulo-producto')
    titulo.textContent = producto.nombre

    let descripcion = document.createElement('p')
    descripcion.classList.add('descripcion-producto')
    descripcion.textContent = producto.descripcion

    let categoria = document.createElement('span')
    categoria.classList.add('categoria-producto')
    categoria.textContent = producto.categoria

    let div = document.createElement('div')

    let precio = document.createElement('p')
    precio.classList.add('precio-producto')

    let strong = document.createElement('strong')
    strong.textContent = 'Precio: '

    precio.appendChild(strong)
    precio.append(`${producto.precio}`)

    // -------------------------------------------------------------------

    let botonAgregar = document.createElement('button')
    botonAgregar.classList.add('boton-carrito')
    botonAgregar.setAttribute('precio-producto', producto.precio)
    botonAgregar.setAttribute('imagen-producto', producto.imagen)
    botonAgregar.setAttribute('nombre-producto', producto.nombre)

    botonAgregar.addEventListener('click', (event) => {
        event.stopPropagation()
        agregarAlCarrito(
            parseFloat(botonAgregar.getAttribute('precio-producto')),
            botonAgregar.getAttribute('imagen-producto'),
            botonAgregar.getAttribute('nombre-producto')
        )
        modal_producto_agregado.showModal()
    })

    // -------------------------------------------------------------------

    let icono = document.createElement('i')
    icono.classList.add('bi')
    icono.classList.add('bi-cart')

    botonAgregar.appendChild(icono)

    div.appendChild(precio)
    div.appendChild(botonAgregar)

    informacion.appendChild(titulo)
    informacion.appendChild(descripcion)
    informacion.appendChild(categoria)
    informacion.appendChild(div)

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(informacion)

    seccion_productos.appendChild(tarjeta)

    // -------------------------------------------------------------------

    tarjeta.addEventListener('click', () => {
        // Configurar imagen principal
        const modalImagenPrincipal = document.getElementById('modal-imagen-principal')
        modalImagenPrincipal.src = `./img/${producto.imagen}`
        modalImagenPrincipal.alt = producto.nombre
        
        // Configurar título y descripción
        modal_titulo.textContent = producto.nombre
        modal_descripcion.textContent = producto.descripcionDetallada
        modal_precio.textContent = producto.precio

        // Limpiar y crear miniaturas
        const miniaturasContainer = document.getElementById('miniaturas-container')
        miniaturasContainer.innerHTML = ''

        // Agregar miniatura de la imagen principal
        const miniaturaPrincipal = document.createElement('div')
        miniaturaPrincipal.className = 'miniatura activa'
        const imgPrincipal = document.createElement('img')
        imgPrincipal.src = `./img/${producto.imagen}`
        imgPrincipal.alt = producto.nombre
        miniaturaPrincipal.appendChild(imgPrincipal)
        miniaturasContainer.appendChild(miniaturaPrincipal)

        // Agregar miniaturas de imágenes adicionales
        if (producto.imagenesAdicionales) {
            producto.imagenesAdicionales.forEach((imagen, index) => {
                const miniatura = document.createElement('div')
                miniatura.className = 'miniatura'
                const img = document.createElement('img')
                img.src = `./img/${imagen}`
                img.alt = `${producto.nombre} - Vista ${index + 2}`
                miniatura.appendChild(img)
                
                // Evento para cambiar imagen principal al hacer clic
                miniatura.addEventListener('click', () => {
                    modalImagenPrincipal.src = `./img/${imagen}`
                    modalImagenPrincipal.alt = `${producto.nombre} - Vista ${index + 2}`
                    
                    // Actualizar clase activa
                    document.querySelectorAll('.miniatura').forEach(m => m.classList.remove('activa'))
                    miniatura.classList.add('activa')
                })
                
                miniaturasContainer.appendChild(miniatura)
            })
        }

        // Evento para la primera miniatura (imagen principal)
        miniaturaPrincipal.addEventListener('click', () => {
            modalImagenPrincipal.src = `./img/${producto.imagen}`
            modalImagenPrincipal.alt = producto.nombre
            
            document.querySelectorAll('.miniatura').forEach(m => m.classList.remove('activa'))
            miniaturaPrincipal.classList.add('activa')
        })

        // Configurar botón de agregar al carrito
        const metodosProducto = document.getElementById('metodos-producto')
        metodosProducto.innerHTML = ''
        
        const botonAgregar = document.createElement('button')
        botonAgregar.innerHTML = '<i class="bi bi-cart-plus"></i> Agregar al Carrito'
        botonAgregar.setAttribute('precio-producto', producto.precio)
        botonAgregar.setAttribute('imagen-producto', producto.imagen)
        botonAgregar.setAttribute('nombre-producto', producto.nombre)
        
        botonAgregar.addEventListener('click', (event) => {
            event.stopPropagation()
            agregarAlCarrito(
                parseFloat(botonAgregar.getAttribute('precio-producto')),
                botonAgregar.getAttribute('imagen-producto'),
                botonAgregar.getAttribute('nombre-producto')
            )
            modal_producto_agregado.showModal()
        })
        
        metodosProducto.appendChild(botonAgregar)

        modal_detalle.showModal()
    })

    boton_cerrar_modal_detalle.addEventListener('click', () => {
        modal_detalle.close()
    })
}




const inputCategoria = document.getElementById('inputCategoria')

function limpiarProductos() {
    seccion_productos.replaceChildren()
}

productos.forEach(producto => {
    crearProducto(producto)
})

inputCategoria.addEventListener('input', () => {
    limpiarProductos()
    productos.forEach(producto => {
        if (inputCategoria.value === 'todos') {
            crearProducto(producto);
        } else if (producto.categoria.toLowerCase() === inputCategoria.value.toLowerCase().trim()) {
            crearProducto(producto);
        }
    })
})

const modal_producto_agregado = document.getElementById('modal-carrito')
const boton_cerrar_modal = document.getElementById('boton-cerrar-modal')

boton_cerrar_modal.addEventListener('click', () => {
    modal_producto_agregado.close()
})

let contador = 0
const contadorDeProductos = document.getElementById('contadorDeProductos')
let montoTotal = 0.0
const contadorMontoTotal = document.getElementById('contadorMontoTotal')

const modal_carrito = document.getElementById('modal-carrito-productos')
const contenedor_productos_agregados = document.getElementById('contenedor-productos-agregados')

// Referencias al modal de checkout
const modal_checkout = document.getElementById('modal-checkout')
const boton_cerrar_checkout = document.getElementById('boton-cerrar-checkout')
const boton_cancelar_checkout = document.getElementById('boton-cancelar-checkout')
const formulario_checkout = document.getElementById('formulario-checkout')

// Referencias al modal de confirmación
const modal_confirmacion = document.getElementById('modal-confirmacion')
const boton_cerrar_confirmacion = document.getElementById('boton-cerrar-confirmacion')


const boton_modal_detalle_producto = document.getElementById('boton-modal-detalle-producto')

boton_modal_detalle_producto.addEventListener('click', () => {
    modal_carrito.showModal()
})

// Array para almacenar los productos en el carrito
let productosEnCarrito = [];

function agregarAlCarrito(precio, imagen, nombre) {
    contador++;
    contadorDeProductos.textContent = contador;

    montoTotal += precio
    contadorMontoTotal.textContent = `$ ${montoTotal}`

    // Buscar si el producto ya existe en el carrito
    const productoExistente = productosEnCarrito.find(producto => producto.nombre === nombre);

    if (productoExistente) {
        // Si el producto ya existe, incrementar la cantidad
        productoExistente.cantidad++;
        productoExistente.precioTotal += precio;

        // Actualizar el elemento en el DOM
        const contenedorExistente = document.querySelector(`[data-producto="${nombre}"]`);
        const cantidadElement = contenedorExistente.querySelector('.cantidad-producto');
        const precioElement = contenedorExistente.querySelector('.precio-total');

        cantidadElement.textContent = productoExistente.cantidad;
        precioElement.textContent = `$${productoExistente.precioTotal}`;
    } else {
        // Si es un producto nuevo, agregarlo al array y crear el elemento
        const nuevoProducto = {
            nombre: nombre,
            imagen: imagen,
            precio: precio,
            cantidad: 1,
            precioTotal: precio
        };
        productosEnCarrito.push(nuevoProducto);

        const contenedor_carrito = document.createElement('div')
        contenedor_carrito.classList.add('d-flex')
        contenedor_carrito.setAttribute('data-producto', nombre)

        const carrito_imagen = document.createElement('img')
        carrito_imagen.src = `./img/${imagen}`
        carrito_imagen.alt = nombre

        const carrito_nombre = document.createElement('p')
        carrito_nombre.textContent = nombre

        const carrito_cantidad = document.createElement('span')
        carrito_cantidad.classList.add('cantidad-producto')
        carrito_cantidad.textContent = '1'

        const carrito_precio = document.createElement('p')
        carrito_precio.classList.add('precio-total')
        carrito_precio.textContent = `$${precio}`

        const boton_eliminar_producto = document.createElement('i')
        boton_eliminar_producto.classList.add('bi')
        boton_eliminar_producto.classList.add('bi-x-lg')

        boton_eliminar_producto.addEventListener('click', () => {
            const producto = productosEnCarrito.find(p => p.nombre === nombre);
            if (producto) {
                contador -= producto.cantidad;
                contadorDeProductos.textContent = contador;
                montoTotal -= producto.precioTotal;
                contadorMontoTotal.textContent = `$ ${montoTotal}`;

                // Remover del array
                const index = productosEnCarrito.findIndex(p => p.nombre === nombre);
                productosEnCarrito.splice(index, 1);

                contenedor_carrito.remove();

                                        // Remover botón de checkout si el carrito está vacío
                        if (productosEnCarrito.length === 0) {
                            const botonCheckout = document.getElementById('boton-checkout');
                            if (botonCheckout) {
                                botonCheckout.remove();
                            }
                        } else {
                            // Mover el botón al final si quedan productos
                            const botonCheckout = document.getElementById('boton-checkout');
                            if (botonCheckout) {
                                contenedor_productos_agregados.appendChild(botonCheckout);
                            }
                        }
            }
        })

        contenedor_carrito.appendChild(carrito_imagen)
        contenedor_carrito.appendChild(carrito_nombre)
        contenedor_carrito.appendChild(carrito_cantidad)
        contenedor_carrito.appendChild(carrito_precio)
        contenedor_carrito.appendChild(boton_eliminar_producto)

        contenedor_productos_agregados.appendChild(contenedor_carrito)
    }

            // Agregar botón de checkout si no existe
        const botonCheckoutExistente = document.getElementById('boton-checkout');
        if (!botonCheckoutExistente) {
            const botonCheckout = document.createElement('button');
            botonCheckout.id = 'boton-checkout';
            botonCheckout.classList.add('boton-checkout');
            botonCheckout.textContent = 'Finalizar Compra';
            botonCheckout.addEventListener('click', () => {
                modal_carrito.close();
                modal_checkout.showModal();
            });
            contenedor_productos_agregados.appendChild(botonCheckout);
        } else {
            // Mover el botón al final si ya existe
            contenedor_productos_agregados.appendChild(botonCheckoutExistente);
        }

    modal_producto_agregado.showModal();
}

const boton_cerrar_modal_carrito_productos = document.getElementById('boton-cerrar-modal-carrito-productos')
boton_cerrar_modal_carrito_productos.addEventListener('click', () => {
    modal_carrito.close()
})

const boton_limpiar_carrito_productos = document.getElementById('boton-limpiar-carrito-productos')
boton_limpiar_carrito_productos.addEventListener('click', () => {
    contador = 0
    contadorDeProductos.textContent = contador;

    montoTotal = 0
    contadorMontoTotal.textContent = `$ ${montoTotal}`

    // Limpiar el array de productos
    productosEnCarrito = [];

    contenedor_productos_agregados.replaceChildren()
})

// Event listeners para el modal de checkout
boton_cerrar_checkout.addEventListener('click', () => {
    modal_checkout.close();
});

boton_cancelar_checkout.addEventListener('click', () => {
    modal_checkout.close();
    modal_carrito.showModal();
});

        // Funciones de validación
        function validarCampo(campo) {
            const valor = campo.value.trim();
            let esValido = true;

            // Validar que no esté vacío
            if (valor === '') {
                esValido = false;
            }

            // Aplicar o remover clases de error/valido
            if (esValido) {
                campo.classList.remove('error');
                campo.classList.add('valido');
            } else {
                campo.classList.remove('valido');
                campo.classList.add('error');
            }

            return esValido;
        }

        // Event listeners para validación en tiempo real
        const camposFormulario = formulario_checkout.querySelectorAll('input, select, textarea');
        camposFormulario.forEach(campo => {
            campo.addEventListener('blur', () => {
                validarCampo(campo);
            });

            campo.addEventListener('input', () => {
                if (campo.classList.contains('error')) {
                    validarCampo(campo);
                }
            });
        });

// --- MODAL DE CHECKOUT Y CONFIRMACIÓN ---
formulario_checkout.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validar todos los campos
    let formularioValido = true;
    const camposFormulario = formulario_checkout.querySelectorAll('input, select, textarea');
    camposFormulario.forEach(campo => {
        if (!validarCampo(campo)) {
            formularioValido = false;
        }
    });
    if (!formularioValido) {
        alert('Por favor, completa correctamente todos los campos obligatorios.');
        return;
    }
    // Obtener datos del formulario
    const formData = new FormData(formulario_checkout);
    const datosCliente = {
        nombre: formData.get('nombre'),
        telefono: formData.get('telefono'),
        email: formData.get('email'),
        direccion: formData.get('direccion'),
        fechaEntrega: formData.get('fecha-entrega'),
        metodoPago: formData.get('metodo-pago')
    };
    // Aquí puedes procesar la orden
    console.log('Datos del cliente:', datosCliente);
    console.log('Productos en carrito:', productosEnCarrito);
    console.log('Total a pagar:', montoTotal);
    // Cerrar modal de checkout y mostrar confirmación
    try {
        if (typeof modal_confirmacion.close === 'function') {
            modal_confirmacion.close();
        }
        modal_checkout.close();
        setTimeout(() => {
            modal_confirmacion.showModal();
        }, 200);
    } catch (e) {
        alert('Ocurrió un error al mostrar el mensaje de compra exitosa.');
        console.error(e);
    }
    // Limpiar carrito
    contador = 0;
    contadorDeProductos.textContent = contador;
    montoTotal = 0;
    contadorMontoTotal.textContent = `$ ${montoTotal}`;
    productosEnCarrito = [];
    contenedor_productos_agregados.replaceChildren();
});

// Event listener para cerrar el modal de confirmación
boton_cerrar_confirmacion.addEventListener('click', () => {
    modal_confirmacion.close();
});


const banner_flotante = document.getElementById('banner-flotante')
const boton_cerrar_banner = document.getElementById('boton-cerrar-banner')
const categoria_destacada = document.getElementById('categoria-destacada')
const imagen_producto_oferta = document.getElementById('imagen-producto-oferta')
const nombre_producto_oferta = document.getElementById('nombre-producto-oferta')
const descripcion_producto_oferta = document.getElementById('descripcion-producto-oferta')
const precio_anterior = document.getElementById('precio-anterior')
const precio_actual = document.getElementById('precio-actual')
const boton_agregar_oferta = document.getElementById('boton-agregar-oferta')
const progreso_fill = document.getElementById('progreso-fill')

// Función para obtener un producto aleatorio de una categoría
function obtenerProductoOferta(categoria) {
    const productosCategoria = productos.filter(producto => 
        producto.categoria.toLowerCase() === categoria.toLowerCase()
    );
    

    // Si los productos filtrados no están vacíos, se obtiene un producto aleatorio
    if (productosCategoria.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * productosCategoria.length);
        return productosCategoria[indiceAleatorio];
    }
    return null;
}

// --- BANNER FLOTANTE DE OFERTAS ---
let ultimoProductoOferta = null;
function mostrarOferta(categoria) {
    const productoOferta = obtenerProductoOferta(categoria);
    if (!productoOferta) return;
    // Evitar listeners duplicados
    const nuevoBoton = boton_agregar_oferta.cloneNode(true);
    boton_agregar_oferta.parentNode.replaceChild(nuevoBoton, boton_agregar_oferta);
    // Calcular precio con descuento (20% de descuento)
    const descuento = 0.2;
    const precioConDescuento = Math.round(productoOferta.precio * (1 - descuento));
    // Actualizar contenido del banner
    categoria_destacada.textContent = categoria.toUpperCase();
    imagen_producto_oferta.src = `./img/${productoOferta.imagen}`;
    imagen_producto_oferta.alt = productoOferta.nombre;
    nombre_producto_oferta.textContent = productoOferta.nombre;
    descripcion_producto_oferta.textContent = productoOferta.descripcion;
    precio_anterior.textContent = `$${productoOferta.precio}`;
    precio_actual.textContent = `$${precioConDescuento}`;
    // Configurar botón de agregar al carrito
    nuevoBoton.addEventListener('click', () => {
        agregarAlCarrito(precioConDescuento, productoOferta.imagen, productoOferta.nombre);
        banner_flotante.close();
        modal_producto_agregado.showModal();
    });
    // Mostrar banner
    banner_flotante.showModal();
    // Iniciar animación de la barra de progreso
    iniciarBarraProgreso();
    // Cerrar automáticamente después de 10 segundos
    setTimeout(() => {
        banner_flotante.close();
    }, 10000);
}
// Event listener para cambio de categoría
inputCategoria.addEventListener('change', () => {
    const categoriaSeleccionada = inputCategoria.value;
    if (categoriaSeleccionada !== 'todos') {
        mostrarOferta(categoriaSeleccionada);
    }
});

// Función para animar la barra de progreso
function iniciarBarraProgreso() {
    const duracion = 10000; // 10 segundos
    const intervalo = 100; // Actualizar cada 100ms
    const pasos = duracion / intervalo;
    const decremento = 100 / pasos;
    
    let progreso = 100;
    
    const animacion = setInterval(() => {
        progreso -= decremento;
        progreso_fill.style.width = progreso + '%';
        
        if (progreso <= 0) {
            clearInterval(animacion);
        }
    }, intervalo);
}

// Event listener para cerrar banner manualmente
boton_cerrar_banner.addEventListener('click', () => {
    banner_flotante.close();
});