const portfolio = () => {
    const
        popup = document.querySelector('.popup-portfolio'),
        links = document.querySelectorAll('.portfolio-slider__slide-frame'),
        closeBtns = popup.querySelectorAll('.close'),
        textBlocks = document.querySelectorAll('.popup-portfolio-text'),
        showTextBlock = i => {
            textBlocks.forEach(item => {
                item.removeAttribute('style');
            });
            textBlocks[i].style.display = 'flex';
        };

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


};

export default portfolio;
