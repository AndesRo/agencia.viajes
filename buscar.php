<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    header('Content-Type: application/json');

    $tipo = $_POST['tipo'];

    // Función para validar la fecha en formato 'Y-m-d'
    function validarFecha($fecha) {
        $d = DateTime::createFromFormat('Y-m-d', $fecha);
        return $d && $d->format('Y-m-d') === $fecha;
    }

    // Función para generar datos ficticios de vuelos
    function obtenerVuelos($fecha_salida, $fecha_regreso) {
        $vuelos = [];

        // Ejemplo de datos de vuelos ficticios
        $vuelos[] = [
            'numero_vuelo' => 'LA123',
            'salida' => 'Santiago',
            'destino' => 'Buenos Aires',
            'fecha_salida' => $fecha_salida,
            'fecha_regreso' => $fecha_regreso,
            'precio' => 300,
            'disponibilidad' => 'Disponible'
        ];

        // Puedes agregar más vuelos según la lógica deseada

        return $vuelos;
    }

    // Función para generar datos ficticios de hoteles
    function obtenerHoteles($fecha_checkin, $fecha_checkout) {
        $hoteles = [];

        // Ejemplo de datos de hoteles ficticios
        $hoteles[] = [
            'nombre_hotel' => 'Hotel Santiago',
            'ubicacion' => 'Santiago Centro',
            'disponible_desde' => $fecha_checkin,
            'disponible_hasta' => $fecha_checkout,
            'precio_por_noche' => 100,
            'disponibilidad' => 'Disponible'
        ];

        // Puedes agregar más hoteles según la lógica deseada

        return $hoteles;
    }

    // Obtener parámetros según el tipo de búsqueda
    if ($tipo == 'vuelo') {
        $fecha_salida = $_POST['fecha-salida'] ?? '';
        $fecha_regreso = $_POST['fecha-regreso'] ?? '';

        if (!validarFecha($fecha_salida) || !validarFecha($fecha_regreso)) {
            echo json_encode(['error' => 'Las fechas deben ser válidas.']);
            exit;
        }

        // Obtener y retornar datos de vuelos según las fechas seleccionadas
        $resultado = obtenerVuelos($fecha_salida, $fecha_regreso);
        echo json_encode($resultado);
    } else if ($tipo == 'hotel') {
        $fecha_checkin = $_POST['fecha-checkin'] ?? '';
        $fecha_checkout = $_POST['fecha-checkout'] ?? '';

        if (!validarFecha($fecha_checkin) || !validarFecha($fecha_checkout)) {
            echo json_encode(['error' => 'Las fechas deben ser válidas.']);
            exit;
        }

        // Obtener y retornar datos de hoteles según las fechas seleccionadas
        $resultado = obtenerHoteles($fecha_checkin, $fecha_checkout);
        echo json_encode($resultado);
    } else {
        echo json_encode(['error' => 'Tipo de búsqueda no válido.']);
    }
} else {
    http_response_code(405); // Método no permitido
    echo json_encode(['error' => 'Método no permitido']);
}

