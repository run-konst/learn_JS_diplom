document.addEventListener('DOMContentLoaded', () => {
    let dataBase = [];
    let patchId;
    console.log('asd');

    const
        tableWrap = document.getElementById('tbody'),
        typeList = document.getElementById('typeItem'),
        modal = document.getElementById('modal'),
        showModalBtn = document.querySelector('.btn-addItem'),
        postBtn = document.querySelector('.button-ui_firm'),
        typeInput = document.getElementById('type'),
        nameInput = document.getElementById('name'),
        unitsInput = document.getElementById('units'),
        costInput = document.getElementById('cost'),
        modalTitle = document.querySelector('.modal__header'),
        getData = async () => {
            const response = await fetch('http://localhost:3000/api/items');
            if (response.status !== 200) {
                throw new Error('Network status is not 200');
            }
            const data = await response.json();
            dataBase = data;
            return data;
        },
        render = data => {
            tableWrap.textContent = '';
            data.forEach(element => {
                const tableRow = document.createElement('tr');
                tableRow.classList.add('table__row');
                tableRow.innerHTML = `
                    <td class="table__id table__cell">${element.id}</td>
                    <td class="table-type table__cell">${element.type}</td>
                    <td class="table-name table__cell">${element.name}</td>
                    <td class="table-units table__cell">${element.units}</td>
                    <td class="table-cost table__cell">${element.cost} руб</td>
                    <td>
                        <div class="table__actions table__cell">
                            <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                            </button>
                            <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                            </button>
                        </div>
                    </td>
                `;
                tableWrap.append(tableRow);
            });
            return data;
        },
        renderTypeList = data => {
            const selectSet = new Set();
            data.forEach(element => {
                selectSet.add(element.type);
            });
            typeList.textContent = '';
            const optionAll = document.createElement('option');
            optionAll.value = 'Все услуги';
            optionAll.textContent = 'Все услуги';
            typeList.append(optionAll);
            selectSet.forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                typeList.append(option);
            });
        },
        filterList = () => {
            typeList.addEventListener('change', () => {
                if (typeList.value === 'Все услуги') {
                    render(dataBase);
                    return;
                }
                const typeItems = dataBase.filter(item => item.type === typeList.value);
                render(typeItems);
            });
        },
        renderFromServer = () => {
            getData()
                .then(render)
                .then(renderTypeList)
                .then(filterList)
                .catch(error => console.error(error));
        };

    showModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalTitle.textContent = 'Добавение новой услуги';
        typeInput.value = '';
        nameInput.value = '';
        unitsInput.value = '';
        costInput.value = '';
    });
    modal.addEventListener('click', event => {
        event.preventDefault();
        const closeBtn = event.target.closest('.button__close');
        const cancelBtn = event.target.closest('.cancel-button');
        if (closeBtn || cancelBtn) {
            modal.removeAttribute('style');
        }
    });

    postBtn.addEventListener('click', () => {
        const newItem = {};
        newItem.type = typeInput.value.trim();
        newItem.name = nameInput.value.trim();
        newItem.units = unitsInput.value.trim();
        newItem.cost = costInput.value.trim();
        if (modalTitle.textContent === 'Добавение новой услуги') {
            fetch('http://localhost:3000/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(newItem)
            })
                .then(renderFromServer);
        } else if (modalTitle.textContent === 'Редактировать услугу') {
            fetch(`http://localhost:3000/api/items/${patchId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(newItem)
            })
                .then(renderFromServer);
        }
        modal.removeAttribute('style');
    });

    window.addEventListener('click', event => {
        const btnRemove = event.target.closest('.action-remove');
        const btnChange = event.target.closest('.action-change');
        if (btnRemove) {
            const id = event.target.closest('.table__row').querySelector('.table__id').textContent;
            fetch(`http://localhost:3000/api/items/${id}`, {
                method: 'DELETE',
            })
                .then(renderFromServer);
        }
        if (btnChange) {
            const
                item = event.target.closest('.table__row'),
                type = item.querySelector('.table-type').textContent,
                name = item.querySelector('.table-name').textContent,
                units = item.querySelector('.table-units').textContent,
                cost = item.querySelector('.table-cost').textContent.replace(/[^\d]/g, '');
            patchId = item.querySelector('.table__id').textContent;
            modal.style.display = 'flex';
            typeInput.value = type;
            nameInput.value = name;
            unitsInput.value = units;
            costInput.value = cost;
            modalTitle.textContent = 'Редактировать услугу';
        }
    });

    renderFromServer();
});
