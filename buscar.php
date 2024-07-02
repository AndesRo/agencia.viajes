<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $tipo = $_POST['tipo'];
    $response = [];

    if ($tipo === 'vuelo') {
        $response[] = [
            'numero_vuelo' => 'LA123',
            'salida' => $_POST['salida'],
            'destino' => $_POST['destino'],
            'fecha_salida' => $_POST['fecha-salida'],
            'fecha_regreso' => $_POST['fecha-regreso'],
            'precio' => 450,
            'disponibilidad' => 'Disponible'
        ];
    } elseif ($tipo === 'hotel') {
        $response[] = [
            'nombre_hotel' => 'Hotel Ficticio',
            'ubicacion' => $_POST['ubicacion'],
            'disponible_desde' => $_POST['fecha-checkin'],
            'disponible_hasta' => $_POST['fecha-checkout'],
            'precio_por_noche' => 120,
            'disponibilidad' => 'Disponible'
        ];
    }

    echo json_encode($response);
}
?>
