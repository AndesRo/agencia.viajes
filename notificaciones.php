<?php
// Generar notificación de oferta especial
$notificaciones = [
    ["mensaje" => "¡Oferta especial! 20% de descuento en vuelos a Europa por tiempo limitado."],
    ["mensaje" => "¡Oferta especial! Descuento del 15% en todos los hoteles de 4 estrellas."],
    ["mensaje" => "¡Reserva ahora y obtén una noche gratis en tu hotel en América Latina!"]
];

header('Content-Type: application/json');
echo json_encode($notificaciones);

