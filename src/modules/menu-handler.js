const menuHandler = () => {
    const menu = document.querySelector('.popup-dialog-menu');

    window.addEventListener('click', event => {
        const menuTarget = event.target.closest('.popup-dialog-menu');
        const menuBtn = event.target.closest('.menu__icon');
        const menuItem = event.target.closest('.menu-link');
        const closeBtn = event.target.closest('.close-menu');
        if (menuBtn) {
            menu.style.transform = 'translate3d(0, 0, 0)';
        } else if (!menuTarget || closeBtn || menuItem) {
            menu.removeAttribute('style');
        }
    });
};

export default menuHandler;
