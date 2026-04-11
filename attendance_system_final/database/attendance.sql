CREATE DATABASE attendance_system;

USE attendance_system;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE faculty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    faculty_id INT,
    date DATE,
    status VARCHAR(10)
);