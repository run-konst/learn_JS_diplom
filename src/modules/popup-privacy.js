const popupPrivacy = () => {
    const
        popup = document.querySelector('.popup-privacy'),
        links = document.querySelectorAll('.link-privacy'),
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

export default popupPrivacy;
