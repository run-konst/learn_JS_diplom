const popup = () => {
    const popupHandler = (popupSelector, linksSelector, dialogSelector = '.popup-dialog') => {
        const
            popup = document.querySelector(popupSelector),
            links = document.querySelectorAll(linksSelector);

        links.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                popup.style.visibility = 'visible';
            });
        });
        popup.addEventListener('click', event => {
            const close = event.target.closest('.close');
            const dialog = event.target.closest(dialogSelector);
            if (close) {
                popup.removeAttribute('style');
            }
            if (dialog) {
                return;
            }
            if (!close && !dialog) {
                popup.removeAttribute('style');
            }
        });

    };

    popupHandler('.popup-privacy', '.link-privacy');
    popupHandler('.popup-consultation', '.btn-consult', '.feedback-wrap');
    popupHandler('.popup-repair-types', '.popup-repair-link');
    popupHandler('.popup-portfolio', '.portfolio-slider__slide-frame');
    popupHandler('.popup-transparency', '.transparency-item__img', '.popup-dialog-transparency');
};

export default popup;
