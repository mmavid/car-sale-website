const carModelsData = {
    Audi: ['A3', 'A4', 'A4 Allroad', 'A5', 'A5 Sportback', 'A6', 'A6 Allroad', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q5 Sportback', 'Q7', 'Q8', 'e-tron', 'e-tron GT', 'R8', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'RS Q3', 'RS Q8', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'SQ2', 'SQ5', 'SQ7', 'SQ8'],
    BMW: ['1 Series', '2 Series', '2 Series Gran Coupe', '3 Series', '4 Series', '4 Series Gran Coupe', '5 Series', '6 Series GT', '7 Series', '8 Series', '8 Series Gran Coupe', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'XM', 'i3', 'i4', 'i5', 'i7', 'iX', 'iX1', 'iX2', 'iX3', 'M2', 'M3', 'M4', 'M5', 'M8', 'X3 M', 'X4 M', 'X5 M', 'X6 M'],
    Mercedes_Benz: ['A-Class', 'A-Class Sedan', 'B-Class', 'C-Class', 'C-Class Sedan', 'CLA', 'CLA Shooting Brake', 'CLS', 'E-Class', 'E-Class All-Terrain', 'E-Class Coupe', 'E-Class Sedan', 'E-Class Wagon', 'EQE', 'EQE SUV', 'EQS', 'EQS SUV', 'G-Class', 'GLA', 'GLC', 'GLC Coupe', 'GLE', 'GLE Coupe', 'GLS', 'GT 4-Door Coupe', 'S-Class', 'S-Class Sedan', 'V-Class', 'AMG GT', 'AMG GT 4-Door', 'AMG GT Black Series', 'AMG GT Coupe', 'AMG GLE 53', 'AMG GLE 63', 'AMG GLS 63'],
    Cadillac: ['CT4', 'CT5', 'CT6', 'Escalade', 'Escalade ESV', 'XT4', 'XT5', 'XT6', 'XTS', 'Lyriq', 'Celestiq'],
    Chery: ['Tiggo 4', 'Tiggo 4 Pro', 'Tiggo 7', 'Tiggo 7 Pro', 'Tiggo 8', 'Tiggo 8 Pro', 'Arrizo 6', 'Arrizo 7', 'Arrizo 8', 'Exeed LX', 'Exeed TXL', 'Exeed VX', 'eQ1', 'eQ5'],
    Chevrolet: ['Cruze', 'Malibu', 'Camaro', 'Corvette', 'Corvette Stingray', 'Corvette Z06', 'Traverse', 'Tahoe', 'Suburban', 'Spark', 'Aveo', 'Orlando', 'Trailblazer', 'Blazer', 'Equinox', 'Silverado', 'Colorado', 'Bolt EV', 'Bolt EUV'],
    Citroen: ['C3', 'C3 Aircross', 'C4', 'C4 Cactus', 'C4 Picasso', 'C5', 'C5 Aircross', 'C5 X', 'Berlingo', 'Jumpy', 'SpaceTourer', 'Ami', 'E-Mehari'],
    Daewoo: ['Matiz', 'Matiz Creative', 'Nexia', 'Lacetti', 'Gentra', 'Damas', 'Alpheon', 'Tosca', 'Chairman', 'Winstorm'],
    Datsun: ['mi-DO', 'on-DO', 'Cross', 'Go', 'Go+', 'redi-GO'],
    Fiat: ['500', '500C', '500X', '500L', '500 Electric', 'Panda', 'Tipo', 'Ducato', 'Doblo', 'Fullback', '124 Spider', 'Spider'],
    Ford: ['Focus', 'Focus Sedan', 'Mondeo', 'Fusion', 'Kuga', 'Explorer', 'Mustang', 'Mustang Mach-E', 'Transit', 'Transit Custom', 'Fiesta', 'EcoSport', 'F-150', 'Ranger', 'Bronco', 'Bronco Sport', 'Edge', 'Expedition', 'GT', 'Puma', 'S-Max', 'Galaxy'],
    Great_Wall: ['Hover H3', 'Hover H5', 'Hover H6', 'Hover H7', 'Hover H8', 'Hover H9', 'Wingle 5', 'Wingle 6', 'Wingle 7', 'Poer', 'Poer King Kong', 'Tank 300', 'Tank 500', 'Tank 700', 'Ora Cat', 'Ora R1'],
    Honda: ['Civic', 'Civic Sedan', 'Civic Hatchback', 'Civic Type R', 'Accord', 'CR-V', 'CR-V Hybrid', 'HR-V', 'Pilot', 'Odyssey', 'Fit', 'Jazz', 'City', 'e', 'NSX', 'S2000', 'Ridgeline', 'Passport', 'Clarity', 'Insight'],
    Hyundai: ['Solaris', 'Elantra', 'Sonata', 'Grandeur', 'Creta', 'Santa Fe', 'Santa Fe Hybrid', 'Tucson', 'Palisade', 'i10', 'i20', 'i30', 'i40', 'ix35', 'Kona', 'Kona Electric', 'IONIQ', 'IONIQ 5', 'IONIQ 6', 'Nexo', 'Veloster', 'Genesis', 'Equus', 'Venue', 'Bayon', 'Staria'],
    Infiniti: ['Q50', 'Q60', 'QX50', 'QX55', 'QX60', 'QX70', 'QX80', 'Q70', 'QX30', 'Q30', 'EX35', 'EX37', 'FX35', 'FX37', 'FX50', 'G25', 'G35', 'G37', 'M37', 'M56'],
    Jaguar: ['XE', 'XF', 'XJ', 'F-PACE', 'E-PACE', 'I-PACE', 'F-TYPE', 'XK', 'XKR', 'S-Type', 'C-Type', 'D-Type', 'E-Type'],
    Jeep: ['Wrangler', 'Wrangler Unlimited', 'Grand Cherokee', 'Grand Cherokee L', 'Compass', 'Renegade', 'Cherokee', 'Gladiator', 'Summit', 'Patriot', 'Commander', 'Liberty', 'Wagoneer', 'Grand Wagoneer'],
    Kia: ['Rio', 'Rio X-Line', 'Cerato', 'K5', 'Optima', 'Stinger', 'Sportage', 'Sorento', 'Sorento Hybrid', 'Telluride', 'Carnival', 'Mohave', 'Ceed', 'Proceed', 'XCeed', 'Niro', 'Niro Hybrid', 'Niro EV', 'Seltos', 'Soul', 'K900', 'Quoris', 'Picanto', 'Morning', 'Stonic', 'EV6', 'EV9'],
    LADA: ['Granta', 'Granta Drive Active', 'Granta Cross', 'Vesta', 'Vesta Cross', 'Vesta SW', 'Vesta SW Cross', 'Largus', 'Largus Cross', 'Niva', 'Niva Legend', 'Niva Travel', 'XRAY', 'XRAY Cross', 'Kalina', 'Kalina Cross', 'Kalina Sport', 'Priora', 'Priora Coupe', 'Priora Hatchback'],
    Land_Rover: ['Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque', 'Discovery', 'Discovery Sport', 'Defender', 'Defender 90', 'Defender 110', 'Defender 130', 'LR2', 'LR3', 'LR4', 'Freelander'],
    Lexus: ['ES', 'GS', 'IS', 'LS', 'LC', 'RC', 'NX', 'NX Hybrid', 'RX', 'RX Hybrid', 'GX', 'LX', 'UX', 'UX Hybrid', 'RZ', 'LFA', 'CT', 'HS'],
    Lifan: ['Solano', 'X60', 'X70', 'Murman', 'Cebrium', 'Celliya', 'Smily', 'MyWay', 'Breeze', 'X50', 'X80', '620', '720', '820'],
    Mazda: ['3', '3 Sedan', '3 Hatchback', '6', 'CX-3', 'CX-5', 'CX-7', 'CX-8', 'CX-9', 'CX-30', 'CX-50', 'CX-60', 'CX-90', 'MX-5', 'MX-5 RF', 'RX-8', 'RX-7', '2', 'Demio', 'BT-50', 'CX-4'],
    Mini: ['Cooper', 'Cooper S', 'Cooper SE', 'Clubman', 'JCW Clubman', 'Countryman', 'JCW Countryman', 'Paceman', 'Roadster', 'Coupe', 'Convertible'],
    Nissan: ['Almera', 'Sentra', 'Teana', 'Qashqai', 'X-Trail', 'Murano', 'Patrol', 'Patrol Y62', 'GT-R', 'Leaf', 'Juke', 'Note', 'Micra', 'March', 'Versa', 'Altima', 'Maxima', 'Frontier', 'Navara', 'Titan', 'Armada', 'Pathfinder', 'Kicks', 'Townstar'],
    Opel: ['Astra', 'Astra Sports Tourer', 'Corsa', 'Corsa-electric', 'Insignia', 'Insignia Sports Tourer', 'Mokka', 'Mokka-e', 'Zafira', 'Zafira Life', 'Grandland', 'Grandland X', 'Crossland', 'Crossland X', 'Combo', 'Vivaro', 'Mokka X', 'Karl', 'Adam'],
    Peugeot: ['208', '308', '408', '508', '2008', '3008', '5008', '4008', '7008', 'Partner', 'Partner Tepee', 'Rifter', 'Traveller', 'Expert', 'Boxer', 'iOn', 'e-208', 'e-2008', 'e-308', 'e-3008'],
    Renault: ['Logan', 'Logan Stepway', 'Sandero', 'Sandero Stepway', 'Duster', 'Kaptur', 'Koleos', 'Megane', 'Megane E-Tech', 'Arkana', 'Arkana Hybrid', 'Laguna', 'Fluence', 'Latitude', 'Scenic', 'Grand Scenic', 'Kangoo', 'Master', 'Trafic', 'Twingo', 'Zoe', 'Talisman'],
    SEAT: ['Ibiza', 'Leon', 'Leon SC', 'Leon ST', 'Ateca', 'Arona', 'Tarraco', 'Alhambra', 'Mii', 'Exeo', 'Toledo'],
    Skoda: ['Octavia', 'Octavia Combi', 'Octavia RS', 'Rapid', 'Rapid Spaceback', 'Superb', 'Superb Combi', 'Kodiaq', 'Kodiaq GT', 'Karoq', 'Kamiq', 'Fabia', 'Fabia Combi', 'Scala', 'Enyaq iV', 'Yeti', 'Roomster'],
    Smart: ['Fortwo', 'Fortwo Coupe', 'Fortwo Cabrio', 'Forfour', 'EQ Fortwo', 'EQ Forfour', 'Roadster', 'Crossblade'],
    SsangYong: ['Korando', 'Tivoli', 'Tivoli XLV', 'Rexton', 'Rexton W', 'Kyron', 'Actyon', 'Actyon Sports', 'Chairman', 'Stavic', 'Musso', 'Musso Grand', 'Torres', 'Korando e-Motion', 'Korando C'],
    Subaru: ['Impreza', 'Impreza WRX', 'WRX STI', 'Legacy', 'Legacy Outback', 'Outback', 'Forester', 'XV', 'Crosstrek', 'BRZ', 'Levorg', 'Tribeca', 'Exiga', 'Solterra', 'Ascent'],
    Suzuki: ['Swift', 'Swift Sport', 'SX4', 'Vitara', 'Grand Vitara', 'Jimny', 'Jimny Sierra', 'Ignis', 'Celerio', 'Alto', 'Baleno', 'Kizashi', 'Across', 'Ertiga', 'APV', 'Carry', 'Liana'],
    Toyota: ['Camry', 'Corolla', 'Corolla Cross', 'Land Cruiser Prado', 'Land Cruiser 300', 'Land Cruiser 70', 'RAV4', 'RAV4 Hybrid', 'Highlander', 'Hilux', 'Supra', 'GR Supra', 'GR86', 'GR Yaris', 'Crown', 'Avalon', 'Prius', 'Prius Prime', 'Mirai', 'Fortuner', 'Yaris', 'Yaris Cross', 'C-HR', 'bZ4X', 'Auris', 'Venza', 'Tundra', 'Sequoia', '4Runner', 'Celica', 'MR2'],
    Volkswagen: ['Polo', 'Jetta', 'Passat', 'Passat CC', 'Tiguan', 'Tiguan Allspace', 'Touareg', 'ID.3', 'ID.4', 'ID.5', 'ID.6', 'ID. Buzz', 'Golf', 'Golf GTI', 'Golf R', 'Golf Plus', 'Golf Sportsvan', 'Beetle', 'Beetle Cabrio', 'Arteon', 'Arteon Shooting Brake', 'CC', 'Eos', 'Scirocco', 'Sharan', 'Touran', 'Caddy', 'T-Roc', 'T-Cross', 'Taos', 'Atlas', 'Virtus', 'Phaeton'],
    Volvo: ['S60', 'S80', 'S90', 'V40', 'V50', 'V60', 'V70', 'V90', 'XC40', 'XC60', 'XC70', 'XC90', 'C30', 'C70', 'S40', 'S70'],
    ВИС: ['2349', '2349-00', '2349-01', '2349-02', '2932', '2945', '29451', '2347', '2348', '2346'],
    ГАЗ: ['Gazelle', 'Gazelle Business', 'GAZelle Next', 'Gazelle Next Crew', 'Gazelle City', 'Gazelle NN', 'Sobol', 'Sobol Business', 'Sobol Next', 'Valdai', 'Valdai Next', 'Ural Next', 'Sadko Next', 'Sadko', 'GAZon', 'GAZon Next', 'Volga', 'Volga Siber'],
    Москвич: ['3', '3е', '6', 'Иж-2126', 'Иж-2715', 'Иж-2717', 'Святогор', 'Москвич-2141'],
    УАЗ: ['Patriot', 'Patriot 2021', 'Hunter', 'Hunter Classic', 'Pickup', 'Pickup Pro', 'Bukhanka', 'Cargo', 'Cargo 4x4', 'Profi', 'Profi 4x4']
};

function normalizeBrandName(brand) {
    const brandMap = {
        'Mercedes-Benz': 'Mercedes_Benz',
        'Land Rover': 'Land_Rover',
        'Great Wall': 'Great_Wall'
    };
    return brandMap[brand] || brand;
}

function populateModels(selectedBrand) {
    const modelSelect = document.querySelector('.tradein-block__form .form-select:last-child');
    if (!modelSelect) return;
    
    modelSelect.innerHTML = '<option value="">Выберите модель</option>';
    
    if (!selectedBrand) return;
    
    const normalizedBrand = normalizeBrandName(selectedBrand);
    const models = carModelsData[normalizedBrand];
    
    if (models) {
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
}

function setupTradeInForm() {
    const brandSelect = document.querySelector('.tradein-block__form .form-select:first-child');
    if (!brandSelect) return;
    
    brandSelect.addEventListener('change', (e) => {
        const selectedBrand = e.target.value;
        populateModels(selectedBrand);
    });
    
    if (brandSelect.value && brandSelect.value !== 'Выберите марку') {
        populateModels(brandSelect.value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupTradeInForm();
});