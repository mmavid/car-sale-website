document.getElementById('scrollToVacancies')?.addEventListener('click', () => {
    const section = document.getElementById('vacanciesSection');
    if(section) section.scrollIntoView({ behavior: 'smooth' });
});

const vacancyBtns = document.querySelectorAll('.vacancy-btn');
const vacancySelect = document.getElementById('vacancySelect');
vacancyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const vacancyName = btn.getAttribute('data-vacancy');
        if(vacancySelect && vacancyName) {
            const options = vacancySelect.options;
            for(let i=0; i<options.length; i++) {
                if(options[i].text === vacancyName) {
                    vacancySelect.selectedIndex = i;
                    break;
                }
            }
        }
        document.getElementById('responseForm').scrollIntoView({ behavior: 'smooth' });
    });
});

const form = document.getElementById('careerForm');
const feedback = document.getElementById('formFeedback');
const successModal = document.getElementById('successModal');
const closeSuccess = document.getElementById('closeSuccessModal');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const vacancy = vacancySelect.value;
    if(!name || !phone || !vacancy) {
        feedback.textContent = 'Пожалуйста, заполните имя, телефон и выберите вакансию.';
        return;
    }
    feedback.textContent = 'Отправка...';
    setTimeout(() => {
        if(successModal) successModal.style.display = 'flex';
        form.reset();
        feedback.textContent = '';
        closeSuccess.onclick = () => {
            successModal.style.display = 'none';
        };
        window.onclick = (event) => {
            if(event.target === successModal) successModal.style.display = 'none';
        };
    }, 600);
});
const callBtn = document.querySelector('.button--call-order');
if(callBtn) {
    callBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Функция обратного звонка. Наши менеджеры перезвонят вам!');
    });
}