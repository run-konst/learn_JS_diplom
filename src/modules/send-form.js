const sendForm = () => {
    const loader = document.createElement('div');
    loader.classList.add('popup');
    loader.innerHTML = `
        <div class="sk-wave">
            <div class="sk-rect sk-rect-1"></div>
            <div class="sk-rect sk-rect-2"></div>
            <div class="sk-rect sk-rect-3"></div>
            <div class="sk-rect sk-rect-4"></div>
            <div class="sk-rect sk-rect-5"></div>
        </div>
    `;
    const
        thank = document.querySelector('.popup-thank'),
        closeThank = thank.querySelector('.close'),
        postData = data => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        },
        sendData = data => {
            if (data.status !== 200) {
                throw new Error('Network status is not 200');
            }
            thank.style.visibility = 'visible';
            loader.removeAttribute('style');
        },
        errorData = error => {
            console.error(error);
        },
        clearInputs = inputs => {
            inputs.forEach(input => input.value = '');
        };

    document.addEventListener('submit', event => {
        event.preventDefault();
        loader.style.visibility = 'visible';
        document.body.append(loader);
        const
            form = event.target,
            formData = new FormData(form),
            data = {},
            inputs = form.querySelectorAll('input');

        formData.forEach((value, key) => {
            data[key] = value;
        });
        postData(data)
            .then(sendData)
            .catch(errorData)
            .finally(() => clearInputs(inputs));
    });

    closeThank.addEventListener('click', () => {
        thank.removeAttribute('style');
    });
};

export default sendForm;
