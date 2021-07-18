const
    login = document.querySelector('#name'),
    password = document.querySelector('#type'),
    loginBtn = document.querySelector('.button-ui_firm'),
    warnings = document.querySelectorAll('.text-warning'),
    checkCookies = () => {
        let cookiesArr;
        const cookies = {};
        if (document.cookie) {
            cookiesArr = document.cookie.split('; ');
            cookiesArr.forEach(cookie => {
                const cookieArr = cookie.split('=');
                cookies[cookieArr[0]] = cookieArr[1];
            });
        }
        if (cookies.user) {
            login.value = cookies.user;
        }
        if (cookies.password) {
            login.password = cookies.password;
        }
    },
    getUsers = async () => {
        const response = await fetch('../../crm-backend/users.json');
        if (response.status !== 200) {
            throw new Error('Network status is not 200');
        }
        const data = await response.json();
        return data;
    },
    checkLogin = data => {
        let logged = false;
        data.forEach(user => {
            if (user.login === login.value && user.password === password.value) {
                logged = true;
            }
        });
        if (logged) {
            document.location.href = "table.html";
            document.cookie = `logged=true`;
            document.cookie = `user=${login.value}`;
            document.cookie = `password=${password.value}`;
        } else {
            warnings.forEach(item => {
                item.style.display = 'block';
                login.value = '';
                password.value = '';
            });
        }
    };

checkCookies();

loginBtn.addEventListener('click', event => {
    event.preventDefault();
    getUsers()
        .then(checkLogin)
        .catch(() => { console.log('false'); });
});
