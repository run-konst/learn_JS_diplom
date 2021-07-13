const faqAccordeon = () => {
    const titles = document.querySelectorAll('.title_block');

    titles.forEach(title => title.addEventListener('click', () => {
        if (title.classList.contains('msg-active')) {
            title.classList.remove('msg-active');
            return;
        }
        titles.forEach(title => title.classList.remove('msg-active'));
        title.classList.add('msg-active');
    }));
};

export default faqAccordeon;
