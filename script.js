// Функция для плавного скролла к элементу
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Функция для переключения между режимами отображения меню
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');
    const logo = document.querySelector('.logo');

    // Скрываем меню и показываем иконку
    if (menu.style.display !== 'none') {
        menu.style.display = 'none';
        menuIcon.style.display = 'block';
        logo.style.display = 'none';
    } else {
        // Показываем меню и скрываем иконку
        menu.style.display = 'flex';
        menuIcon.style.display = 'none';
        logo.style.display = 'block';
    }
}

// Добавляем обработчики событий
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

// Добавляем обработчик для изменения активного состояния меню при прокрутке страницы
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    const homeSection = document.getElementById('home');
    const tariffsSection = document.getElementById('tariffs');

    if (scrollPosition > homeSection.offsetHeight) {
        setActiveMenuItem('home');
    } else if (scrollPosition > homeSection.offsetHeight + tariffsSection.offsetHeight) {
        setActiveMenuItem('tariffs');
    } else if (scrollPosition > homeSection.offsetHeight + tariffsSection.offsetHeight + document.getElementById('features').offsetHeight) {
        setActiveMenuItem('features');
    } else if (scrollPosition > homeSection.offsetHeight + tariffsSection.offsetHeight + document.getElementById('features').offsetHeight + document.getElementById('about').offsetHeight) {
        setActiveMenuItem('about');
    } else if (scrollPosition > homeSection.offsetHeight + tariffsSection.offsetHeight + document.getElementById('features').offsetHeight + document.getElementById('about').offsetHeight + document.getElementById('reviews').offsetHeight) {
        setActiveMenuItem('reviews');
    } else if (scrollPosition > homeSection.offsetHeight + tariffsSection.offsetHeight + document.getElementById('features').offsetHeight + document.getElementById('about').offsetHeight + document.getElementById('reviews').offsetHeight + document.getElementById('feedback').offsetHeight) {
        setActiveMenuItem('feedback');
    }
});

// Функция для установки активного состояния меню
function setActiveMenuItem(currentPage) {
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentPage}`) {
            item.classList.add('active');
        }
    });
}

// Добавляем обработчик для изменения активного состояния меню при прокрутке страницы
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    const homeSection = document.getElementById('home');
    const tariffsSection = document.getElementById('tariffs');

    if (scrollPosition > homeSection.offsetHeight) {
        setActiveMenuItem('home');
    } else if (scrollPosition > homeSection.offsetHeight + tariffsSection.offsetHeight) {
        setActiveMenuItem('tariffs');
    } else if (scrollPosition > homeSection.offsetHeight + tariffsSection.offsetHeight + document.getElementById('features').offsetHeight) {
        setActiveMenuItem('features');
    } else if (scrollPosition > homeSection.offsetHeight + tariffsSection.offsetHeight + document.getElementById('features').offsetHeight + document.getElementById('about').offsetHeight) {
        setActiveMenuItem('about');
    } else if (scrollPosition > homeSection.offsetHeight + tariffsSection.offsetHeight + document.getElementById('features').offsetHeight + document.getElementById('about').offsetHeight + document.getElementById('reviews').offsetHeight) {
        setActiveMenuItem('reviews');
    } else if (scrollPosition > homeSection.offsetHeight + tariffsSection.offsetHeight + document.getElementById('features').offsetHeight + document.getElementById('about').offsetHeight + document.getElementById('reviews').offsetHeight + document.getElementById('feedback').offsetHeight) {
        setActiveMenuItem('feedback');
    }
});


