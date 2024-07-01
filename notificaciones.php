<?php
$conexion = new mysqli('localhost:3306', 'root', '', 'agencia de viajes');

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

$resultado = $conexion->query("SELECT * FROM paquetes WHERE oferta=1");

$notificaciones = [];

while ($fila = $resultado->fetch_assoc()) {
    $notificaciones[] = ['mensaje' => '¡Oferta Especial en ' . $fila['nombre_paquete'] . '! Solo $' . $fila['precio']];
}

echo json_encode($notificaciones);

$conexion->close();
