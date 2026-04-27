// Получаем элементы
const modal = document.getElementById('carModal');
const closeBtn = document.querySelector('.close-modal');
const modalCarName = document.getElementById('modalCarName');
const modalCarImage = document.getElementById('modalCarImage');
const modalCarPrice = document.getElementById('modalCarPrice');
const modalCarSpecs = document.getElementById('modalCarSpecs');

const carData = {
    'C-Class': {
        name: 'Mercedes-Benz C-Class',
        price: '6 990 000 ₽',
        image: '/car-sale-website/img/auto-img/auto1.png',
        specs: [
            'Двигатель: 2.0 л (204 л.с.)',
            'Коробка: 9-ступенчатая АКПП',
            'Привод: Задний',
            'Расход: 7.5 л/100 км',
            'Разгон 0-100 км/ч: 7.3 сек',
            'Максимальная скорость: 250 км/ч'
        ]
    },
    'CLE-Class coupe': {
        name: 'Mercedes-Benz CLE-Class coupe',
        price: 'от 10 999 000 ₽',
        image: '/car-sale-website/img/auto-img/auto2.png',
        specs: [
            'Двигатель: 2.0 л (258 л.с.)',
            'Коробка: 9-ступенчатая АКПП',
            'Привод: Полный',
            'Расход: 8.2 л/100 км',
            'Разгон 0-100 км/ч: 6.2 сек',
            'Максимальная скорость: 250 км/ч'
        ]
    },
    'E-Class': {
        name: 'Mercedes-Benz E-Class',
        price: 'от 9 999 000 ₽',
        image: '/car-sale-website/img/auto-img/auto3.png',
        specs: [
            'Двигатель: 2.0 л (258 л.с.)',
            'Коробка: 9-ступенчатая АКПП',
            'Привод: Задний / Полный',
            'Расход: 7.8 л/100 км',
            'Разгон 0-100 км/ч: 6.9 сек',
            'Максимальная скорость: 250 км/ч'
        ]
    },
    'EQE-Class SUV': {
        name: 'Mercedes-Benz EQE-Class SUV',
        price: 'от 13 100 000 ₽',
        image: '/car-sale-website/img/auto-img/auto4.png',
        specs: [
            'Двигатель: Электрический (292 л.с.)',
            'Запас хода: до 550 км',
            'Привод: Полный',
            'Зарядка: 170 кВт (DC)',
            'Разгон 0-100 км/ч: 6.3 сек',
            'Максимальная скорость: 210 км/ч'
        ]
    },
    'G-Class': {
        name: 'Mercedes-Benz G-Class',
        price: 'от 25 000 000 ₽',
        image: '/car-sale-website/img/auto-img/auto5.png',
        specs: [
            'Двигатель: 4.0 л (421 л.с.)',
            'Коробка: 9-ступенчатая АКПП',
            'Привод: Полный',
            'Расход: 14.5 л/100 км',
            'Разгон 0-100 км/ч: 5.9 сек',
            'Максимальная скорость: 220 км/ч'
        ]
    },
    'GLC-Class': {
        name: 'Mercedes-Benz GLC-Class',
        price: 'от 12 200 000 ₽',
        image: '/car-sale-website/img/auto-img/auto6.png',
        specs: [
            'Двигатель: 2.0 л (258 л.с.)',
            'Коробка: 9-ступенчатая АКПП',
            'Привод: Полный',
            'Расход: 8.5 л/100 км',
            'Разгон 0-100 км/ч: 6.3 сек',
            'Максимальная скорость: 240 км/ч'
        ]
    },
    'GLC-Class купе': {
        name: 'Mercedes-Benz GLC-Class купе',
        price: 'от 9 800 000 ₽',
        image: '/car-sale-website/img/auto-img/auto7.png',
        specs: [
            'Двигатель: 2.0 л (258 л.с.)',
            'Коробка: 9-ступенчатая АКПП',
            'Привод: Полный',
            'Расход: 8.5 л/100 км',
            'Разгон 0-100 км/ч: 6.2 сек',
            'Максимальная скорость: 240 км/ч'
        ]
    },
    'GLE-Class': {
        name: 'Mercedes-Benz GLE-Class',
        price: 'от 12 990 000 ₽',
        image: '/car-sale-website/img/auto-img/auto8.png',
        specs: [
            'Двигатель: 2.0 л (258 л.с.)',
            'Коробка: 9-ступенчатая АКПП',
            'Привод: Полный',
            'Расход: 8.7 л/100 км',
            'Разгон 0-100 км/ч: 7.0 сек',
            'Максимальная скорость: 235 км/ч'
        ]
    },
    'GLE-Class купе': {
        name: 'Mercedes-Benz GLE-Class купе',
        price: 'от 17 370 000 ₽',
        image: '/car-sale-website/img/auto-img/auto9.png',
        specs: [
            'Двигатель: 2.0 л (258 л.с.)',
            'Коробка: 9-ступенчатая АКПП',
            'Привод: Полный',
            'Расход: 8.9 л/100 км',
            'Разгон 0-100 км/ч: 7.0 сек',
            'Максимальная скорость: 235 км/ч'
        ]
    },
    'GLS-Class': {
        name: 'Mercedes-Benz GLS-Class',
        price: 'от 17 400 000 ₽',
        image: '/car-sale-website/img/auto-img/auto10.png',
        specs: [
            'Двигатель: 3.0 л (367 л.с.)',
            'Коробка: 9-ступенчатая АКПП',
            'Привод: Полный',
            'Расход: 9.5 л/100 км',
            'Разгон 0-100 км/ч: 6.1 сек',
            'Максимальная скорость: 250 км/ч'
        ]
    },
    'S-Class': {
        name: 'Mercedes-Benz S-Class',
        price: 'от 21 900 000 ₽',
        image: '/car-sale-website/img/auto-img/auto11.png',
        specs: [
            'Двигатель: 3.0 л (367 л.с.)',
            'Коробка: 9-ступенчатая АКПП',
            'Привод: Задний / Полный',
            'Расход: 8.3 л/100 км',
            'Разгон 0-100 км/ч: 5.9 сек',
            'Максимальная скорость: 250 км/ч'
        ]
    },
    'S-Class Maybach': {
        name: 'Mercedes-Benz S-Class Maybach',
        price: 'Доступно к предзаказу',
        image: '/car-sale-website/img/auto-img/auto12.png',
        specs: [
            'Двигатель: 6.0 л (612 л.с.)',
            'Коробка: 9-ступенчатая АКПП',
            'Привод: Полный',
            'Расход: 13.0 л/100 км',
            'Разгон 0-100 км/ч: 4.5 сек',
            'Максимальная скорость: 250 км/ч',
            'Роскошный интерьер с VIP-местами'
        ]
    },
    'V-Class': {
        name: 'Mercedes-Benz V-Class',
        price: 'от 17 600 000 ₽',
        image: '/car-sale-website/img/auto-img/auto13.png',
        specs: [
            'Двигатель: 2.0 л (163 л.с.)',
            'Коробка: 7-ступенчатая АКПП',
            'Привод: Задний',
            'Расход: 8.8 л/100 км',
            'Максимальная скорость: 200 км/ч',
            'Вместимость: 7-8 мест'
        ]
    }
};

function openModal(carKey) {
    const car = carData[carKey];
    if (!car) return;
    
    modalCarName.textContent = car.name;
    modalCarPrice.textContent = car.price;
    modalCarImage.src = car.image;
    
    modalCarSpecs.innerHTML = '';
    car.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        modalCarSpecs.appendChild(li);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.querySelectorAll('.button--details').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const carModel = this.getAttribute('data-car');
        openModal(carModel);
    });
});

closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('test-drive-btn')) {
        const carName = modalCarName.textContent;
        alert(`Заявка на тест-драйв ${carName} отправлена! Мы свяжемся с вами.`);
    }
    
    if (e.target.classList.contains('order-btn')) {
        const carName = modalCarName.textContent;
        alert(`Заявка на ${carName} отправлена! Менеджер свяжется с вами.`);
    }
});