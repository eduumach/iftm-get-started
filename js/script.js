document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const easterEgg = document.querySelector('.easter-egg');

    logo.addEventListener('click', () => {
        easterEgg.style.display = 'block';
        setTimeout(() => {
            easterEgg.style.display = 'none';
        }, 3000);
    });
});
