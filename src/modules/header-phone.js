const showHeaderPhone = () => {
    const
        accord = document.querySelector('.header-contacts__phone-number-accord'),
        phone = document.querySelector('.header-contacts__phone-number-accord a'),
        btn = document.querySelector('.header-contacts__arrow'),
        togglePhone = () => {
            if (phone.style.opacity === '0' || !phone.style.opacity) {
                accord.style.top = '25px';
                phone.style.opacity = '1';
                btn.style.transform = 'rotate(180deg)';
            } else {
                accord.style.top = '0';
                phone.style.opacity = '0';
                btn.style.transform = 'rotate(0)';
            }
        };

    btn.addEventListener('click', togglePhone);
};

export default showHeaderPhone;
