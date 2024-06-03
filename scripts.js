document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('img01');
    const closeModal = document.getElementsByClassName('close')[0];

    document.querySelectorAll('#galeria img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    const form = document.getElementById('formulario-contacto');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado');
        // Aquí puedes agregar el código adicional para manejar el envío del formulario, como enviar los datos a un servidor
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburguesa = document.querySelector('.hamburguesa');
    hamburguesa.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
