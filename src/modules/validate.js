const validate = () => {
    const maskPhone = (selector, masked = '+7 (___) ___-__-__') => {
        const elems = document.querySelectorAll(selector);

        function mask(event) {
            const
                keyCode = event.keyCode,
                template = masked,
                def = template.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            let i = 0,
                newValue = template.replace(/[_\d]/g, match => i < val.length ? val.charAt(i++) || def.charAt(i) : match);
            i = newValue.indexOf("_");
            if (i !== -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, this.value.length).replace(/_+/g, match => "\\d{1," + match.length + "}").replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = newValue;
            }
            if (event.type === "blur" && this.value.length < 5) {
                this.value = "";
            }

        }

        for (const elem of elems) {
            elem.addEventListener("input", mask);
            elem.addEventListener("focus", mask);
            elem.addEventListener("blur", mask);
        }
    };
    maskPhone('input[name="phone"]');

    const
        phoneInputs = document.querySelectorAll('input[name="phone"]'),
        nameInputs = document.querySelectorAll('input[name="name"]'),
        checkboxes = document.querySelectorAll('input[type="checkbox"]'),
        validateName = name => {
            name.value = name.value.replace(/[^а-яА-ЯёЁa-zA-Z\s]/g, "");
            if (name.value.length < 2) {
                return false;
            } else {
                return true;
            }
        },
        validatePhone = phone => {
            if (phone.value.match(/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/)) {
                return true;
            } else {
                return false;
            }
        },
        validateCheckbox = checkbox => {
            if (checkbox.checked === true) {
                return true;
            } else {
                return false;
            }
        },
        validateForm = function() {
            const
                form = this.form,
                btn = form.querySelector('button'),
                name = form.querySelector('input[name="name"]'),
                phone = form.querySelector('input[name="phone"]'),
                checkbox = form.querySelector('input[type="checkbox"]');
            if (name) {
                if (validateName(name) && validatePhone(phone) && validateCheckbox(checkbox)) {
                    btn.disabled = false;
                } else {
                    btn.disabled = true;
                }
            } else {
                if (validatePhone(phone) && validateCheckbox(checkbox)) {
                    btn.disabled = false;
                } else {
                    btn.disabled = true;
                }
            }
        };

    phoneInputs.forEach(input => { input.addEventListener('input', validateForm); });
    nameInputs.forEach(input => { input.addEventListener('input', validateForm); });
    checkboxes.forEach(input => { input.addEventListener('change', validateForm); });
};

export default validate;
