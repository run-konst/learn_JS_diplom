const reviews = () => {

    const sliderReviews = new Slider({
        main: '.reviews-slider-wrap',
        wrap: '.reviews-slider',
        prev: '#reviews-arrow_left',
        next: '#reviews-arrow_right',
        infinity: true,
        slidesToShow: 1,
    });
    sliderReviews.init();

};

export default reviews;
