const langSelector = document.querySelectorAll('.header__lang-link-text'); // Выбираю "кнопки" ru и en
const langArr = ['ru', 'en']; // Массив языков для выбора

// Устанавливаю слушателей событий клика на "кнопки" языка
langSelector.forEach(element => {
    element.addEventListener('click', changeURL)
});

// Меняю URL страницы и делаю перезагрузку
function changeURL() {
    let lang = this.textContent.toLowerCase();
    location.href = window.location.pathname + '#' + lang;
    location.reload();
};

// Меняю язык страницы исходя из URL
function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!langArr.includes(hash)) {
        // Устанавливаю русский язык, если допущена ошибка в названии языка в URL
        location.href = window.location.pathname + '#' + 'ru';
    }
    langSelector.forEach(element => {
        if (element.textContent.toLowerCase() === hash) {
            element.classList.add('header__lang-link-text_active')
        };
    });
    for (let key in translationObj) {
        let element = document.querySelector('.' + key)
        if (element) {
            element.textContent = translationObj[key][hash];
        };
    }
}

changeLanguage();