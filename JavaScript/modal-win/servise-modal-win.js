const serviceData = {
    'Техническое обслуживание': {
        title: 'Техническое обслуживание',
        description: 'Профессиональное техническое обслуживание автомобилей Mercedes-Benz. Регламентные работы проводятся в строгом соответствии с рекомендациями завода-изготовителя.',
        details: [
            'Замена масла и фильтров',
            'Проверка и регулировка тормозной системы',
            'Диагностика ходовой части',
            'Проверка уровней жидкостей',
            'Замена расходных материалов',
            'Компьютерная диагностика всех систем'
        ]
    },
    'Диагностика': {
        title: 'Компьютерная диагностика',
        description: 'Полная компьютерная диагностика всех систем автомобиля с использованием профессионального оборудования Mercedes-Benz.',
        details: [
            'Диагностика двигателя',
            'Проверка АКПП и трансмиссии',
            'Диагностика ABS, ESP, SRS',
            'Проверка электронных систем',
            'Считывание и расшифровка ошибок',
            'Рекомендации по устранению неисправностей'
        ]
    },
    'Сход-развал': {
        title: 'Регулировка сход-развала',
        description: 'Профессиональная регулировка углов установки колес на современном 3D-стенде.',
        details: [
            'Измерение углов установки колес',
            'Регулировка развала и схождения',
            'Настройка кастора',
            'Проверка геометрии кузова',
            'Балансировка колес',
            'Протокол замеров до и после регулировки'
        ]
    },
    'Проверка сход-развала': {
        title: 'Проверка сход-развала',
        description: 'Точная диагностика углов установки колес без последующей регулировки.',
        details: [
            'Компьютерное измерение всех углов',
            'Проверка состояния подвески',
            'Выявление геометрических отклонений',
            'Детальный протокол замеров',
            'Консультация специалиста',
            'Рекомендации по ремонту'
        ]
    },
    'Шиномонтаж': {
        title: 'Шиномонтаж',
        description: 'Профессиональный шиномонтаж на современном оборудовании для любых типов шин включая низкопрофильные.',
        details: [
            'Демонтаж и монтаж шин любых размеров',
            'Балансировка колес на станке',
            'Ремонт проколов и боковых порезов',
            'Вулканизация',
            'Очистка и смазка ступиц',
            'Подкачка шин азотом'
        ]
    },
    'Детейлинг-уход': {
        title: 'Детейлинг-уход',
        description: 'Комплексный уход за автомобилем для сохранения идеального внешнего вида.',
        details: [
            'Мойка двигателя',
            'Химчистка салона',
            'Полировка кузова',
            'Нанесение керамического покрытия',
            'Антигравийная защита плёнкой',
            'Чистка и обработка кожи'
        ]
    },
    'Замена-масла': {
        title: 'Замена масла',
        description: 'Профессиональная замена моторного масла с использованием оригинальных масел и фильтров Mercedes-Benz.',
        details: [
            'Слив отработанного масла',
            'Замена масляного фильтра',
            'Промывка двигателя (по желанию)',
            'Заливка нового масла',
            'Проверка уровня масла',
            'Сброс сервисного интервала компьютера'
        ]
    },
    'Кузовной ремонт': {
        title: 'Кузовной ремонт',
        description: 'Профессиональный кузовной ремонт и покраска автомобилей любой сложности.',
        details: [
            'Рихтовка кузова',
            'Сварка и замена элементов',
            'Вытяжка геометрии кузова',
            'Шпаклевка и подготовка к покраске',
            'Подбор краски по цвету',
            'Покраска и полировка'
        ]
    }
};

function openServiceModal(serviceName) {
    const modalOverlay = document.getElementById('serviceModalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    const service = serviceData[serviceName];
    
    if (service) {
        modalTitle.textContent = service.title;
        
        let detailsHtml = `<p>${service.description}</p>`;
        detailsHtml += '<ul style="margin-top: 20px; padding-left: 20px;">';
        service.details.forEach(detail => {
            detailsHtml += `<li style="margin-bottom: 10px; list-style: disc;">${detail}</li>`;
        });
        detailsHtml += '</ul>';
        
        modalBody.innerHTML = detailsHtml;
        
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeServiceModal() {
    const modalOverlay = document.getElementById('serviceModalOverlay');
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function setupServiceModals() {
    const serviceLinks = document.querySelectorAll('.services-list__item a');
    
    serviceLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceName = link.textContent.trim();
            openServiceModal(serviceName);
        });
    });
    
    const closeButtons = document.querySelectorAll('#closeServiceModalBtn, #closeModalFooterBtn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeServiceModal);
    });
    
    const modalOverlay = document.getElementById('serviceModalOverlay');
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeServiceModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
            closeServiceModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupServiceModals();
});