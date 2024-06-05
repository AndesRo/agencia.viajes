document.addEventListener('DOMContentLoaded', function() {
    // Modal de Imagen
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('img01');
    const cerrarModal = document.getElementsByClassName('cerrar')[0];

    document.querySelectorAll('#galeria img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    cerrarModal.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(evento) {
        if (evento.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Manejar envío del formulario de contacto
    const formulario = document.getElementById('formulario-contacto');
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        alert('Formulario enviado');
        // Aquí puedes agregar el código adicional para manejar el envío del formulario, como enviar los datos a un servidor
    });

    // Menú hamburguesa
    const hamburguesa = document.querySelector('.hamburguesa');
    hamburguesa.addEventListener('click', function() {
        this.classList.toggle('activo');
        const menu = document.querySelector('.menu');
        menu.classList.toggle('activo');
    });
});

// Slideshow (opcional)
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
    });
    dots[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Reloj en el pie de página
function updateFechaHora() {
    const fechaHora = new Date();
    document.getElementById('fechaHora').innerText = fechaHora.toLocaleString();
}
setInterval(updateFechaHora, 1000);


