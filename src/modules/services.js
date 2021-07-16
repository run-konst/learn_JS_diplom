const services = () => {
    console.log('asd');
    const servicesSlider = new Slider({
        main: '.services-slider',
        wrap: '.services-slider-wrapper',
        prev: '#services_left',
        next: '#services_right',
        slidesToShow: 1,
        initWidth: 576,
        infinity: true
    });
    servicesSlider.init();
};

export default services;
