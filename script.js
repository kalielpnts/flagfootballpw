document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let slideAtual = 0;

    function updateSlidePosition() {
        const offset = -slideAtual * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }

    document.getElementById('trás').addEventListener('click', () => {
        slideAtual = (slideAtual === 0) ? slides.length - 1 : slideAtual - 1;
        updateSlidePosition();
    });

    document.getElementById('frente').addEventListener('click', () => {
        slideAtual = (slideAtual === slides.length - 1) ? 0 : slideAtual + 1;
        updateSlidePosition();
    });

    updateSlidePosition();
});
