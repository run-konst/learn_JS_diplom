const repairTypes = () => {
    const sliderRepairTypes = new Slider({
        main: '.repair-types-slider',
        wrap: '.repair-types-wrapper',
        pagination: '.repair-types-nav__item',
        slidesToShow: 1,
        direction: 'vertical',
    });
    sliderRepairTypes.init();
    sliderRepairTypes.pagination.forEach(btn => {
        btn.addEventListener('click', () => {
            sliderRepairTypes.pagination.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    const typesSlider = new Slider({
        main: '.repair-types-nav',
        wrap: '.nav-list-repair',
        prev: '#nav-arrow-repair-left_base',
        next: '#nav-arrow-repair-right_base',
        slidesToShow: 1,
        initWidth: 1024
    });
    typesSlider.init();
    typesSlider.prev.addEventListener('click', () => {
        sliderRepairTypes.options.position = typesSlider.options.position;
        sliderRepairTypes.scrollToPosition();
        sliderRepairTypes.pagination.forEach(btn => btn.classList.remove('active'));
        sliderRepairTypes.pagination[sliderRepairTypes.options.position].classList.add('active');
    });
    typesSlider.next.addEventListener('click', () => {
        sliderRepairTypes.options.position = typesSlider.options.position;
        sliderRepairTypes.scrollToPosition();
        sliderRepairTypes.pagination.forEach(btn => btn.classList.remove('active'));
        sliderRepairTypes.pagination[sliderRepairTypes.options.position].classList.add('active');
    });

    const sliderRepair1 = new Slider({
        main: '.types-repair1',
        wrap: '.types-repair1-wrapper',
        prev: '#repair-types-arrow_left',
        next: '#repair-types-arrow_right',
        counterCurrent: '.slider-counter-content__current-1',
        counterTotal: '.slider-counter-content__total-1',
        infinity: true,
        slidesToShow: 1,
    });
    sliderRepair1.init();
    sliderRepair1.initCounter();

    const sliderRepair2 = new Slider({
        main: '.types-repair2',
        wrap: '.types-repair2-wrapper',
        prev: '#repair-types-arrow_left',
        next: '#repair-types-arrow_right',
        counterCurrent: '.slider-counter-content__current-2',
        counterTotal: '.slider-counter-content__total-2',
        infinity: true,
        slidesToShow: 1,
    });
    sliderRepair2.init();

    const sliderRepair3 = new Slider({
        main: '.types-repair3',
        wrap: '.types-repair3-wrapper',
        prev: '#repair-types-arrow_left',
        next: '#repair-types-arrow_right',
        counterCurrent: '.slider-counter-content__current-3',
        counterTotal: '.slider-counter-content__total-3',
        infinity: true,
        slidesToShow: 1,
    });
    sliderRepair3.init();

    const sliderRepair4 = new Slider({
        main: '.types-repair4',
        wrap: '.types-repair4-wrapper',
        prev: '#repair-types-arrow_left',
        next: '#repair-types-arrow_right',
        counterCurrent: '.slider-counter-content__current-4',
        counterTotal: '.slider-counter-content__total-4',
        infinity: true,
        slidesToShow: 1,
    });
    sliderRepair4.init();

    const sliderRepair5 = new Slider({
        main: '.types-repair5',
        wrap: '.types-repair5-wrapper',
        prev: '#repair-types-arrow_left',
        next: '#repair-types-arrow_right',
        counterCurrent: '.slider-counter-content__current-5',
        counterTotal: '.slider-counter-content__total-5',
        infinity: true,
        slidesToShow: 1,
    });
    sliderRepair5.init();
};

export default repairTypes;
