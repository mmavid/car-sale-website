const callBtn = document.getElementById('callOrderBtn');
if(callBtn) {
    callBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('📞 Спасибо! Наши менеджеры свяжутся с вами в ближайшее время.');
    });
}

// Плавная навигация для ссылок
document.querySelectorAll('.main-nav__link, .footer-nav__list a').forEach(link => {
    link.addEventListener('click', (e) => {
        if(link.getAttribute('href') === '#') e.preventDefault();
    });
});