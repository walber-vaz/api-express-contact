-- create datebase contacts
CREATE DATABASE contacts;

-- create extension uuid-ossp
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- create table categories
CREATE TABLE IF NOT EXISTS categories (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL
);

-- create table contacts
CREATE TABLE IF NOT EXISTS contacts (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(255),
    category_id UUID,
    CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES categories (id)
);
