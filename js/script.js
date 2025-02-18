function mostrarMapa(lat, lng) {
    const mapa = document.getElementById('mapa');
    const url = `https://www.google.com/maps?q=${lat},${lng}&z=20&output=embed`;

    mapa.src = url;

    document.getElementById('mapa-container').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


document.querySelector('.logo').addEventListener('click', function() {
    document.querySelector('.easter-egg').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.easter-egg').style.display = 'none';
    }, 3000);
});
