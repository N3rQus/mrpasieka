function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight * 0.92) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('DOMContentLoaded', revealOnScroll);
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);

const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
