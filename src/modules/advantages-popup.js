const advantagesPopup = () => {
    const
        icons = document.querySelectorAll('.mobile-hide .formula-item__icon'),
        checkPosition = icon => {
            const popup = icon.querySelector('.formula-item-popup');
            const popupRect = popup.getBoundingClientRect();
            if (popupRect.y < 0) {
                icon.classList.add('rotate-item');
            }
        },
        changeSlide = num => {
            const slides = document.querySelectorAll('.formula-slider__slide');
            const icons = document.querySelectorAll('.formula-slider__slide .formula-item__icon');
            slides.forEach(slide => slide.style.opacity = '0.4');
            slides[num].style.opacity = '1';
            icons.forEach(icon => icon.classList.remove('active-item'));
            icons[num].classList.add('active-item');
        };

    icons.forEach(icon => icon.addEventListener('mouseenter', () => {
        icon.classList.add('active-item');
        checkPosition(icon);
    }));
    icons.forEach(icon => icon.addEventListener('mouseleave', () => {
        icon.classList.remove('active-item');
        icon.classList.remove('rotate-item');
    }));

    const sliderAdv = new Slider({
        main: '.formula-slider-wrap',
        wrap: '.formula-slider',
        prev: '#formula-arrow_left',
        next: '#formula-arrow_right',
        slidesToShow: 3,
        initWidth: 1024,
        infinity: true,
        responsive: [
            {
                breakpoint: 1024,
                slideToShow: 3
            },
            {
                breakpoint: 576,
                slideToShow: 1
            },
        ],
    });
    sliderAdv.init();
    sliderAdv.prev.addEventListener('click', () => {
        if (window.innerWidth > 576) {
            changeSlide(1);
        } else {
            changeSlide(0);
        }
    });
    sliderAdv.next.addEventListener('click', () => {
        if (window.innerWidth > 576) {
            changeSlide(2);
        } else {
            changeSlide(1);
        }
    });
    if (window.innerWidth > 576) {
        changeSlide(1);
    } else {
        changeSlide(0);
    }
};

export default advantagesPopup;
