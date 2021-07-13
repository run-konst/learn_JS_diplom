const popupConsult = () => {
    const
        popup = document.querySelector('.popup-consultation'),
        links = document.querySelectorAll('.btn-consult'),
        closeBtn = popup.querySelector('.close');

    links.forEach(link => {
        link.addEventListener('click', () => {
            popup.style.visibility = 'visible';
        });
    });
    closeBtn.addEventListener('click', () => {
        popup.removeAttribute('style');
    });
};

export default popupConsult;
