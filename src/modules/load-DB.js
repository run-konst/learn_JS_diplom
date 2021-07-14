const loadDB = () => {

    let repairDB = [];

    const
        repairTypes = new Set(),
        popup = document.querySelector('.popup-dialog-repair-types'),
        typeList = popup.querySelector('.nav-list-popup-repair'),
        tableTitle = popup.querySelector('.popup-repair-types-content__head-title'),
        tableWrapper = popup.querySelector('.popup-repair-types-content-table__list tbody'),
        getTypes = data => {
            data.forEach(item => {
                repairTypes.add(item.type);
            });
            repairDB = data;
        },
        createTypeList = () => {
            repairTypes.forEach(item => {
                const typeBtn = document.createElement('button');
                typeBtn.classList.add('button_o', 'popup-repair-types-nav__item');
                typeBtn.textContent = item;
                typeList.append(typeBtn);
            });
        },
        chooseType = type => {
            tableTitle.textContent = type;
            tableWrapper.textContent = '';
            const typeItems = repairDB.filter(item => item.type === type);
            typeItems.forEach(item => {
                const tableItem = document.createElement('tr');
                tableItem.classList.add('mobile-row', 'showHide');
                tableItem.innerHTML = `
                    <td class="repair-types-name">${item.name}</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                    <td class="repair-types-value">${item.units.replace(/м2/, 'м<sup>2</sup>')}</td>
                    <td class="repair-types-value">${item.cost}</td>
                `;
                tableWrapper.append(tableItem);
            });
        },
        addListeners = () => {
            popup.addEventListener('click', event => {
                const typeBtn = event.target.closest('.popup-repair-types-nav__item');
                if (!typeBtn) {
                    return;
                }
                const type = typeBtn.textContent;
                chooseType(type);
            });
        },
        initSlider = () => {
            const slider = new Slider({
                main: '.nav-popup-repair-types',
                wrap: '.nav-list-popup-repair',
                prev: '#nav-arrow-popup-repair_left',
                next: '#nav-arrow-popup-repair_right',
                slidesToShow: 1,
                initWidth: 1024
            });
            slider.init();
            slider.next.addEventListener('click', () => {
                chooseType(Array.from(repairTypes)[slider.options.position]);
            });
            slider.prev.addEventListener('click', () => {
                chooseType(Array.from(repairTypes)[slider.options.position]);
            });
        };

    fetch('../crm-backend/db.json')
        .then(response => {
            if (response.status !== 200) {
                throw new Error('Network status is not 200');
            }
            return response.json();
        })
        .then(getTypes)
        .then(createTypeList)
        .then(addListeners)
        .then(() => chooseType(Array.from(repairTypes)[0]))
        .then(initSlider)
        .catch(error => {
            console.error(error);
        });
};

export default loadDB;
