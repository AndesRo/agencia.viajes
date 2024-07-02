document.addEventListener('DOMContentLoaded', function() {
    // Función para validar formularios de vuelos
    function validarFormularioVuelos(formData) {
        const salida = formData.get('salida');
        const destino = formData.get('destino');
        const fechaSalida = formData.get('fecha-salida');
        const fechaRegreso = formData.get('fecha-regreso');

        if (!salida || !destino || !fechaSalida || !fechaRegreso) {
            alert('Todos los campos son obligatorios en la búsqueda de vuelos.');
            return false;
        }

        if (new Date(fechaSalida) > new Date(fechaRegreso)) {
            alert('La fecha de salida no puede ser mayor que la fecha de regreso.');
            return false;
        }

        return true;
    }

    // Función para validar formularios de hoteles
    function validarFormularioHoteles(formData) {
        const ubicacion = formData.get('ubicacion');
        const fechaCheckin = formData.get('fecha-checkin');
        const fechaCheckout = formData.get('fecha-checkout');

        if (!ubicacion || !fechaCheckin || !fechaCheckout) {
            alert('Todos los campos son obligatorios en la búsqueda de hoteles.');
            return false;
        }

        if (new Date(fechaCheckin) > new Date(fechaCheckout)) {
            alert('La fecha de check-in no puede ser mayor que la fecha de check-out.');
            return false;
        }

        return true;
    }

    // Función para obtener y mostrar notificaciones
    function obtenerNotificaciones() {
        fetch('notificaciones.php')
            .then(response => response.json())
            .then(data => {
                const listaNotificaciones = document.getElementById('lista-notificaciones');
                const notificacionesEmergentes = document.getElementById('notificaciones-emergentes');
                listaNotificaciones.innerHTML = ''; // Limpiar lista
                notificacionesEmergentes.innerHTML = ''; // Limpiar notificaciones emergentes

                data.forEach(notificacion => {
                    // Añadir a la lista de notificaciones
                    const li = document.createElement('li');
                    li.textContent = notificacion.mensaje;
                    listaNotificaciones.appendChild(li);

                    // Mostrar la notificación emergente
                    const div = document.createElement('div');
                    div.className = 'notificacion-emergente';
                    div.textContent = notificacion.mensaje;
                    notificacionesEmergentes.appendChild(div);

                    // Animar la notificación emergente
                    setTimeout(() => {
                        div.classList.add('visible');
                    }, 100);

                    // Eliminar la notificación emergente después de un tiempo
                    setTimeout(() => {
                        div.classList.remove('visible');
                    }, 5000);
                });
            })
            .catch(error => console.error('Error al obtener notificaciones:', error));
    }

    // Mostrar notificaciones cada 5 segundos (5000 milisegundos)
    setInterval(obtenerNotificaciones, 5000);

    // Agregar evento de envío para el formulario de vuelos
    document.getElementById('buscar-vuelos').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);

        if (!validarFormularioVuelos(formData)) {
            return;
        }

        formData.append('tipo', 'vuelo');

        fetch('buscar.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            const resultados = document.getElementById('resultados');
            resultados.innerHTML = ''; // Limpiar resultados

            if (data.length > 0) {
                const vuelo = data[0]; // Mostrar solo el primer vuelo encontrado

                resultados.innerHTML = `
                    <h2>Resultado de Vuelo</h2>
                    <div>
                        <p>Número de Vuelo: ${vuelo.numero_vuelo}</p>
                        <p>Salida: ${vuelo.salida}</p>
                        <p>Destino: ${vuelo.destino}</p>
                        <p>Fecha de Salida: ${vuelo.fecha_salida}</p>
                        <p>Fecha de Regreso: ${vuelo.fecha_regreso}</p>
                        <p>Precio: $${vuelo.precio}</p>
                        <p>Disponibilidad: ${vuelo.disponibilidad}</p>
                    </div>
                `;
            } else {
                resultados.innerHTML = '<p>No se encontraron vuelos disponibles.</p>';
            }
        })
        .catch(error => console.error('Error al buscar vuelos:', error));
    });

    // Agregar evento de envío para el formulario de hoteles
    document.getElementById('buscar-hoteles').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);

        if (!validarFormularioHoteles(formData)) {
            return;
        }

        formData.append('tipo', 'hotel');

        fetch('buscar.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            const resultados = document.getElementById('resultados');
            resultados.innerHTML = ''; // Limpiar resultados

            if (data.length > 0) {
                const hotel = data[0]; // Mostrar solo el primer hotel encontrado

                resultados.innerHTML = `
                    <h2>Resultado de Hotel</h2>
                    <div>
                        <p>Nombre del Hotel: ${hotel.nombre_hotel}</p>
                        <p>Ubicación: ${hotel.ubicacion}</p>
                        <p>Fecha Disponible Desde: ${hotel.disponible_desde}</p>
                        <p>Fecha Disponible Hasta: ${hotel.disponible_hasta}</p>
                        <p>Precio por Noche: $${hotel.precio_noche}</p>
                        <p>Disponibilidad: ${hotel.disponibilidad}</p>
                    </div>
                `;
            } else {
                resultados.innerHTML = '<p>No se encontraron hoteles disponibles.</p>';
            }
        })
        .catch(error => console.error('Error al buscar hoteles:', error));
    });
});
