// Transiciones Suaves al Cambiar entre Secciones
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efectos de Desplazamiento al Cargar Elementos en la Página
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

// Animaciones al Cargar Elementos en la Página
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slide-in-left');
    sliders.forEach(slider => {
        slider.classList.add('visible');
    });
});
// Configuración personalizada para Lightbox (opcional)
lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true,
    'albumLabel': "Imagen %1 de %2"
  });
  
  