// src/config/seed.js
const { sequelize, Car, User, Order } = require('../models');

const seed = async () => {
  await sequelize.sync({ force: true });
  console.log('✅ БД пересоздана');

  const users = await User.bulkCreate([
    { name: 'Алексей Петров',   email: 'alex@example.com',  phone: '+7 900 123-45-67', role: 'buyer'  },
    { name: 'Мария Иванова',    email: 'maria@example.com', phone: '+7 901 234-56-78', role: 'seller' },
    { name: 'Дмитрий Сидоров',  email: 'dima@example.com',  phone: '+7 902 345-67-89', role: 'admin'  },
  ]);

  const cars = await Car.bulkCreate([
    {
      brand: 'Toyota', model: 'Camry', year: 2022, price: 2850000,
      mileage: 18000, engine: '2.5L Бензин', transmission: 'Автомат',
      bodyType: 'Седан', color: 'Белый',
      description: 'Отличное состояние, один владелец, полная комплектация.',
      status: 'active',
      imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
    },
    {
      brand: 'BMW', model: 'X5', year: 2021, price: 6200000,
      mileage: 32000, engine: '3.0L Дизель', transmission: 'Автомат',
      bodyType: 'Внедорожник', color: 'Чёрный',
      description: 'M-пакет, панорамная крыша, адаптивный круиз.',
      status: 'active',
      imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    },
    {
      brand: 'Kia', model: 'Sportage', year: 2023, price: 3100000,
      mileage: 5000, engine: '2.0L Бензин', transmission: 'Автомат',
      bodyType: 'Кроссовер', color: 'Серый',
      description: 'Новый автомобиль, гарантия дилера.',
      status: 'active',
      imageUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
    },
    {
      brand: 'Mercedes-Benz', model: 'E-Class', year: 2020, price: 4500000,
      mileage: 55000, engine: '2.0L Бензин', transmission: 'Автомат',
      bodyType: 'Седан', color: 'Серебристый',
      description: 'AMG-линия, кожаный салон, полный привод.',
      status: 'reserved',
      imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
    },
    {
      brand: 'Lada', model: 'Vesta', year: 2021, price: 850000,
      mileage: 40000, engine: '1.8L Бензин', transmission: 'Механика',
      bodyType: 'Седан', color: 'Синий',
      description: 'Отечественное качество, экономичный расход.',
      status: 'active',
      imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
    },
    {
      brand: 'Volkswagen', model: 'Tiguan', year: 2022, price: 3800000,
      mileage: 22000, engine: '2.0L Бензин', transmission: 'Робот',
      bodyType: 'Кроссовер', color: 'Красный',
      description: 'DSG-7, полный привод 4Motion, вентиляция сидений.',
      status: 'sold',
      imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800',
    },
  ]);

  await Order.create({
    userId: users[0].id,
    carId: cars[3].id,
    status: 'confirmed',
    contactName: 'Алексей Петров',
    contactPhone: '+7 900 123-45-67',
    message: 'Хочу осмотреть в субботу',
    totalPrice: cars[3].price,
  });

  console.log(`✅ Создано ${users.length} пользователей, ${cars.length} авто, 1 заявка`);
  process.exit(0);
};

seed().catch(err => { console.error(err); process.exit(1); });
