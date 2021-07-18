const portfolio = () => {
    const
        mobileLinks = document.querySelectorAll('.portfolio-slider-mobile .portfolio-slider__slide-frame'),
        desktopLinks = document.querySelectorAll('.portfolio-slider .portfolio-slider__slide-frame'),
        textBlocks = document.querySelectorAll('.popup-portfolio-text'),
        showTextBlock = i => {
            textBlocks.forEach(item => {
                item.removeAttribute('style');
            });
            textBlocks[i].style.display = 'flex';
        },
        moveSlider = (event, arr, slider) => {
            const pos = Array.from(arr).indexOf(event.target);
            slider.options.position = pos;
            slider.counterCurrent.textContent = pos + 1;
            slider.scrollToPosition();
            slider.checkArrow();
            showTextBlock(pos);
        };

    const portfolioSlider = new Slider({
        main: '.portfolio-slider',
        wrap: '.portfolio-slider-wrapper',
        prev: '#portfolio-arrow_left',
        next: '#portfolio-arrow_right',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                slideToShow: 2
            },
            {
                breakpoint: 900,
                slideToShow: 1
            },
        ],
    });
    portfolioSlider.init();

    const portfolioMobileSlider = new Slider({
        main: '.portfolio-slider-mobile',
        wrap: '.portfolio-slider-mobile-wrapper',
        prev: '#portfolio-arrow-mobile_left',
        next: '#portfolio-arrow-mobile_right',
        slidesToShow: 1,
        counterCurrent: '#portfolio-counter .slider-counter-content__current',
        counterTotal: '#portfolio-counter .slider-counter-content__total',
    });
    portfolioMobileSlider.init();

    const portfolioPopupSlider = new Slider({
        main: '.popup-portfolio-slider',
        wrap: '.popup-portfolio-slider-wrapper',
        prev: '#popup_portfolio_left',
        next: '#popup_portfolio_right',
        slidesToShow: 1,
        counterCurrent: '#popup-portfolio-counter .slider-counter-content__current',
        counterTotal: '#popup-portfolio-counter .slider-counter-content__total',
    });
    portfolioPopupSlider.init();

    portfolioPopupSlider.next.addEventListener('click', () => showTextBlock(portfolioPopupSlider.options.position));
    portfolioPopupSlider.prev.addEventListener('click', () => showTextBlock(portfolioPopupSlider.options.position));

    mobileLinks.forEach(link => link.addEventListener('click', event => moveSlider(event, mobileLinks, portfolioPopupSlider)));
    desktopLinks.forEach(link => link.addEventListener('click', event => moveSlider(event, desktopLinks, portfolioPopupSlider)));
};

export default portfolio;
