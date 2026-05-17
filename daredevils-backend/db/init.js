CREATE DATABASE IF NOT EXISTS daredevils_db;

\c daredevils_db;

CREATE TYPE user_role AS ENUM ('admin', 'manager', 'user');
CREATE TYPE vacancy_category AS ENUM ('sales', 'service', 'finance', 'admin');
CREATE TYPE application_status AS ENUM ('new', 'reviewed', 'interview', 'rejected', 'accepted');
CREATE TYPE partnership_status AS ENUM ('new', 'processing', 'approved', 'rejected');
CREATE TYPE service_status AS ENUM ('new', 'scheduled', 'in_progress', 'completed', 'cancelled');
CREATE TYPE credit_status AS ENUM ('new', 'processing', 'approved', 'rejected');
CREATE TYPE tradein_status AS ENUM ('new', 'evaluating', 'approved', 'rejected');
CREATE TYPE testdrive_status AS ENUM ('new', 'confirmed', 'completed', 'cancelled');
CREATE TYPE call_status AS ENUM ('new', 'processed', 'failed');

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    role user_role DEFAULT 'user',
    password VARCHAR(255),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cars (
    id SERIAL PRIMARY KEY,
    model VARCHAR(100) NOT NULL,
    series VARCHAR(50) NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    engine VARCHAR(100),
    transmission VARCHAR(50),
    drive VARCHAR(50),
    acceleration VARCHAR(50),
    fuel_consumption VARCHAR(50),
    image_url VARCHAR(500),
    is_available BOOLEAN DEFAULT true,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS vacancies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    category vacancy_category NOT NULL,
    salary VARCHAR(100),
    description TEXT,
    requirements TEXT[],
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS job_applications (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    message TEXT,
    resume_url VARCHAR(500),
    status application_status DEFAULT 'new',
    vacancy_id INTEGER REFERENCES vacancies(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS partnership_requests (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    contact_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    direction VARCHAR(100) NOT NULL,
    city VARCHAR(100),
    message TEXT,
    status partnership_status DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS service_requests (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    car_model VARCHAR(100),
    service_type VARCHAR(100) NOT NULL,
    preferred_date TIMESTAMP,
    comment TEXT,
    status service_status DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS credit_requests (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    initial_payment DECIMAL(10,2),
    credit_term INTEGER,
    monthly_payment DECIMAL(10,2),
    status credit_status DEFAULT 'new',
    car_id INTEGER REFERENCES cars(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS trade_in_requests (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    current_car_brand VARCHAR(100),
    current_car_model VARCHAR(100),
    current_car_year INTEGER,
    desired_car_id INTEGER,
    estimated_value DECIMAL(10,2),
    status tradein_status DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS test_drive_requests (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    preferred_date TIMESTAMP,
    status testdrive_status DEFAULT 'new',
    car_id INTEGER REFERENCES cars(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS call_requests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    preferred_time VARCHAR(50),
    status call_status DEFAULT 'new',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_vacancies_category ON vacancies(category);
CREATE INDEX idx_vacancies_is_active ON vacancies(is_active);
CREATE INDEX idx_job_applications_status ON job_applications(status);
CREATE INDEX idx_partnership_status ON partnership_requests(status);
CREATE INDEX idx_service_status ON service_requests(status);
CREATE INDEX idx_credit_status ON credit_requests(status);
CREATE INDEX idx_tradein_status ON trade_in_requests(status);
CREATE INDEX idx_testdrive_status ON test_drive_requests(status);
CREATE INDEX idx_testdrive_car_id ON test_drive_requests(car_id);
CREATE INDEX idx_credit_car_id ON credit_requests(car_id);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

DO $$
DECLARE
    t text;
BEGIN
    FOR t IN 
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name IN ('users', 'cars', 'vacancies', 'job_applications', 'partnership_requests', 'service_requests', 'credit_requests', 'trade_in_requests', 'test_drive_requests', 'call_requests')
    LOOP
        EXECUTE format('CREATE TRIGGER update_%s_updated_at BEFORE UPDATE ON %s FOR EACH ROW EXECUTE FUNCTION update_updated_at_column()', t, t);
    END LOOP;
END $$;