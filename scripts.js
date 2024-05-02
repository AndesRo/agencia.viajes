<script>
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        var usuario = document.getElementById('usuario').value;
        var contrasena = document.getElementById('contrasena').value;

        // Aquí podrías realizar la autenticación del usuario, por ejemplo, mediante una llamada AJAX a un servidor o comprobando en el lado del cliente

        // Por simplicidad, aquí simplemente compararemos el usuario y la contraseña ingresados con valores fijos
        if (usuario === 'usuario' && contrasena === 'contrasena') {
            alert('Inicio de sesión exitoso');
            // Aquí podrías redirigir al usuario a otra página o realizar alguna otra acción después del inicio de sesión exitoso
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
</script>
