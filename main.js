window.onload = () => {
    const button = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
};