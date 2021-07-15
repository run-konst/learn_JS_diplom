class Slider {
    constructor({
        main,
        wrap,
        prev,
        next,
        pagination,
        counterCurrent,
        counterTotal,
        infinity = false,
        direction = 'horizontal',
        position = 0,
        slidesToShow = 4,
        initWidth = window.screen.availWidth,
        responsive = []
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.pagination = document.querySelectorAll(pagination);
        this.counterCurrent = document.querySelector(counterCurrent);
        this.counterTotal = document.querySelector(counterTotal);
        this.slidesToShow = slidesToShow;
        this.responsive = responsive;
        this.initWidth = initWidth;
        this.options = {
            direction,
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow)
        };

    }

    init() {
        this.addStyle();
        if (this.pagination) {
            this.controlPagination();
        }
        if (this.prev && this.next) {
            this.controlSlider();
        }
        if (this.responsive) {
            this.responseInit();
        }
        if (this.options.direction === 'vertical') {
            this.wrap.style.flexDirection = 'column';
            this.wrap.style.height = '100%';
        }
        if (window.innerWidth > this.initWidth) {
            this.die();
            return;
        }
        this.initCheck();
    }

    initCheck() {
        const windowWidth = window.innerWidth;
        if (windowWidth <= this.initWidth && this.main.classList.contains('glo-slider')) {
            return;
        }
        if (windowWidth > this.initWidth && !this.main.classList.contains('glo-slider')) {
            return;
        }
        if (windowWidth > this.initWidth && this.main.classList.contains('glo-slider')) {
            this.die();
            return;
        }
        if (windowWidth <= this.initWidth && !this.main.classList.contains('glo-slider')) {
            this.start();
            return;
        }
    }

    start() {
        this.addGloClass();
        this.showArrow();
        this.setSlideWidth();
        this.scrollToPosition();
        this.initCounter();
    }

    die() {
        this.removeGloClass();
        this.returnSlider();
        this.hideArrow();
        this.resetSlideWidth();
    }

    translate() {
        if (this.options.direction === 'vertical') {
            return 'translateY';
        } else {
            return 'translateX';
        }
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        this.wrap.style.transition = `transform 0.5s`;
        for (const slide of this.slides) {
            slide.classList.add('glo-slider__item');
        }
        this.main.classList.add('glo-slider');
    }
    removeGloClass() {
        this.main.classList.remove('glo-slider');
        this.wrap.classList.remove('glo-slider__wrap');
        for (const slide of this.slides) {
            slide.classList.remove('glo-slider__item');
        }
        this.main.classList.remove('glo-slider');
    }
    addStyle() {
        let style = document.getElementById('sliderCarousel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        style.textContent = `
            .glo-slider {
                overflow: hidden !important;
            }
            
            .glo-slider__wrap {
                display: flex !important;
                flex-wrap: nowrap !important;
                will-change: transform !important;
            }
            
            .glo-slider__item {
                margin: auto 0 !important;
            }
            
            .glo-slider__prev, .glo-slider__next {
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
            }
            
            .glo-slider__prev:hover, .glo-slider__next:hover {
                background: transparent;
            }
            
            .glo-slider__prev:focus, .glo-slider__next:focus {
                outline: none;
            }
            
            .glo-slider__prev {
                border-right-color: #19b5fe;
            }
            
            .glo-slider__next {
                border-left-color: #19b5fe;
            }
        `;
        document.head.append(style);
    }

    setSlideWidth() {
        for (const slide of this.slides) {
            slide.style.flex = `0 0 ${this.options.widthSlide}%`;
        }
    }

    resetSlideWidth() {
        for (const slide of this.slides) {
            slide.removeAttribute('style');
        }
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlide.bind(this));
        this.next.addEventListener('click', this.nextSlide.bind(this));
    }

    controlPagination() {
        this.pagination.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                this.options.position = i;
                this.scrollToPosition();
            });
        });
    }

    scrollToPosition() {
        this.wrap.style.transform = `${this.translate()}(-${this.options.position * this.options.widthSlide}%)`;
    }

    prevSlide() {
        --this.options.position;
        if (!this.options.infinity) {
            this.scrollToPosition();
            if (this.options.position <= 0) {
                this.prev.style.display = 'none';
            }
            this.next.removeAttribute('style');
        } else {
            this.wrap.prepend(this.slides[this.slides.length - 1]);
            this.wrap.style.transition = `transform 0s`;
            this.wrap.style.transform = `${this.translate()}(-${this.options.widthSlide}%)`;
            setTimeout(() => {
                this.wrap.style.transition = `transform 0.5s`;
                this.wrap.style.transform = `${this.translate()}(0)`;
            }, 0);
            if (this.options.position < 0) {
                this.options.position = this.slides.length - 1;
            }
        }
        this.initCounter();
    }

    nextSlide() {
        ++this.options.position;
        if (!this.options.infinity) {
            this.scrollToPosition();
            if (this.options.position >= this.slides.length - this.slidesToShow) {
                this.next.style.display = 'none';
            }
            this.prev.removeAttribute('style');
        } else {
            this.wrap.style.transition = `transform 0.5s`;
            this.wrap.style.transform = `${this.translate()}(-${this.options.widthSlide}%)`;
            setTimeout(() => {
                this.wrap.append(this.slides[0]);
                this.wrap.style.transition = `transform 0s`;
                this.wrap.style.transform = `${this.translate()}(0)`;
            }, 500);
            if (this.options.position >= this.slides.length) {
                this.options.position = 0;
            }
        }
        this.initCounter();
    }

    returnSlider() {
        this.options.position = 0;
        this.wrap.removeAttribute('style');
    }

    initCounter() {
        if (!this.counterCurrent || !this.counterTotal) {
            return;
        }
        this.counterCurrent.textContent = this.options.position + 1;
        this.counterTotal.textContent = this.slides.length;
    }

    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');
        this.prev.classList.add('glo-slider__prev');
        this.next.classList.add('glo-slider__next');

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);
    }

    showArrow() {
        if (!this.next || !this.prev) {
            return;
        }
        this.prev.removeAttribute('style');
        this.next.removeAttribute('style');
        this.checkArrow();
    }

    hideArrow() {
        if (!this.next || !this.prev) {
            return;
        }
        this.prev.style.display = 'none';
        this.next.style.display = 'none';
    }

    checkArrow() {
        if (!this.next || !this.prev) {
            return;
        }
        if (!this.options.infinity && this.options.position === 0) {
            this.prev.style.display = 'none';
        } else {
            this.prev.removeAttribute('style');
        }
        if (!this.options.infinity && this.options.position === this.slides.length - this.slidesToShow) {
            this.next.style.display = 'none';
        } else {
            this.next.removeAttribute('style');
        }
    }

    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = () => {
            const widthWindow = window.innerWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slideToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.setSlideWidth();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.setSlideWidth();
            }
            this.checkArrow();
            if (this.options.position > this.slides.length - this.slidesToShow) {
                this.options.position = this.slides.length - this.slidesToShow;
            }
            this.scrollToPosition();
        };
        checkResponse();

        window.addEventListener('resize', this.initCheck.bind(this));
        window.addEventListener('resize', checkResponse);
    }
}
