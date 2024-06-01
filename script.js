const gallery = document.querySelectorAll('.image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

gallery.forEach(image => {
    image.addEventListener('click', () => {
        const imgSrc = image.querySelector('img').getAttribute('src');
        lightboxImg.setAttribute('src', imgSrc);
        lightbox.style.display = 'block';
    });
});

function closeLightbox() {
    lightbox.style.display = 'none';
}
