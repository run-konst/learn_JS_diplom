const popupRepair = () => {
    const
        popup = document.querySelector('.popup-repair-types'),
        links = document.querySelectorAll('.popup-repair-link'),
        closeBtns = popup.querySelectorAll('.close');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            popup.style.visibility = 'visible';
        });
    });
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            popup.removeAttribute('style');
        });
    });
};

export default popupRepair;