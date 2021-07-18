const documents = () => {
    const links = document.querySelectorAll('.transparency-item__img');

    const docsSlider = new Slider({
        main: '.transparency-slider-wrap',
        wrap: '.transparency-slider',
        prev: '#transparency-arrow_left',
        next: '#transparency-arrow_right',
        counterCurrent: '.popup-transparency .slider-counter-content__current',
        counterTotal: '.popup-transparency .slider-counter-content__total',
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
        counterCurrent: '.popup-transparency .slider-counter-content__current',
        counterTotal: '.popup-transparency .slider-counter-content__total',
        slidesToShow: 1,
        infinity: true
    });
    docsPopupSlider.init();

    docsPopupSlider.linkSliders(docsSlider);

    links.forEach(link => {
        link.addEventListener('click', event => {
            const pos = Array.from(links).indexOf(event.target);
            docsPopupSlider.goToPositionInfinite(pos);
            docsPopupSlider.counterCurrent.textContent = pos + 1;
        });
    });
};

export default documents;
