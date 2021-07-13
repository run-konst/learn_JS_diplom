const faqAccordeon = () => {
    const titles = document.querySelectorAll('.title_block');
    console.log(titles);

    titles.forEach(title => title.addEventListener('click', () => {
        title.classList.toggle('msg-active');
    }));
};

export default faqAccordeon;
