
// обработка формы партнёрства с валидацией и localStorage
const partnershipForm = document.getElementById('partnershipForm');
const partnerMsgDiv = document.getElementById('partnerFormMessage');

// загрузка ранее отправленных заявок (имитация)
let partnerApplications = JSON.parse(localStorage.getItem('daredevils_partners')) || [];

function showPartnerToast(message, isError = false) {
    partnerMsgDiv.style.color = isError ? '#ff8866' : '#dd9206';
    partnerMsgDiv.innerHTML = message;
    setTimeout(() => { if(partnerMsgDiv.innerHTML === message) partnerMsgDiv.innerHTML = ''; }, 4000);
}

partnershipForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const company = document.getElementById('companyName').value.trim();
    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('partnerPhone').value.trim();
    const email = document.getElementById('partnerEmail').value.trim();
    const direction = document.getElementById('partnerDirection').value;
    const city = document.getElementById('city').value.trim();
    const message = document.getElementById('partnerMessage').value.trim();
    const agree = document.getElementById('agreePolicy').checked;
    
    if(!company || !name || !phone || !email || !direction || !agree) {
        showPartnerToast('❌ Пожалуйста, заполните все обязательные поля и подтвердите согласие', true);
        return;
    }
    const phoneRegex = /^[\d\s\+\(\)\-]{10,20}$/;
    if(!phoneRegex.test(phone)) { showPartnerToast('❌ Введите корректный номер телефона', true); return; }
    if(!email.includes('@') || !email.includes('.')) { showPartnerToast('❌ Введите корректный email', true); return; }
    
    const newApplication = {
        id: Date.now(),
        company, name, phone, email, direction, city, message,
        date: new Date().toLocaleString('ru-RU')
    };
    partnerApplications.push(newApplication);
    localStorage.setItem('daredevils_partners', JSON.stringify(partnerApplications));
    
    // очистка формы
    partnershipForm.reset();
    showPartnerToast('✅ Заявка на сотрудничество успешно отправлена! Наш менеджер свяжется с вами в ближайшее время.');
    
    // Можно дополнительно отправить на сервер, но здесь демо
    console.log('Партнёрская заявка:', newApplication);
});

// кнопка "Стать партнёром" скролл к форме
document.getElementById('scrollToFormBtn').addEventListener('click', () => {
    document.getElementById('partnerFormSection').scrollIntoView({ behavior: 'smooth' });
});

// Кнопка "Заказать звонок" — демо уведомление
const callBtn = document.getElementById('callOrderBtn');
if(callBtn) {
    callBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('📞 Заказать звонок: наши менеджеры перезвонят вам для консультации по партнёрству и сотрудничеству.');
    });
}

// навигационные ссылки для единообразия
document.querySelectorAll('.main-nav__link, .footer-nav__list a').forEach(link => {
    link.addEventListener('click', (e) => {
        if(link.getAttribute('href') === '#') e.preventDefault();
    });
});