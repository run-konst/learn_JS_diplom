const documents = () => {
    const
        popup = document.querySelector('.popup-transparency'),
        links = document.querySelectorAll('.transparency-item__img'),
        closeBtns = popup.querySelectorAll('.close');

    links.forEach(link => {
        link.addEventListener('click', () => {
            popup.style.visibility = 'visible';
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            popup.removeAttribute('style');
        });
    });

    const docsSlider = new Slider({
        main: '.transparency-slider-wrap',
        wrap: '.transparency-slider',
        prev: '#transparency-arrow_left',
        next: '#transparency-arrow_right',
        slidesToShow: 1,
        initWidth: 1090,
        infinity: true
    });
    docsSlider.init();

    const docsPopupSlider = new Slider({
        main: '.popup-transparency-slider-wrap',
        wrap: '.popup-transparency-slider',
        prev: '#transparency_left',
        next: '#transparency_right',
        counterCurrent: '.slider-counter-content__current',
        counterTotal: '.slider-counter-content__total',
        slidesToShow: 1,
        infinity: true
    });
    docsPopupSlider.init();

    docsSlider.prev.addEventListener('click', () => {
        docsPopupSlider.options.position = docsSlider.options.position;
        docsPopupSlider.scrollToPosition();
    });
    docsSlider.next.addEventListener('click', () => {
        docsPopupSlider.options.position = docsSlider.options.position;
        docsPopupSlider.scrollToPosition();
    });
};

export default documents;
