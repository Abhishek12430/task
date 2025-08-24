📌 Employee App (Full Stack Project)

This is a Full Stack Employee Management App built with React (frontend) and Node.js + Express + MySQL (backend).
The project has three pages:

Select Employee Page – Choose an employee name from options.

Employee Form Page – Fill employee details like role, salary, and mobile number. The name is auto-filled from page one.

Employee Details Page – Displays only the employees with complete details, along with Edit and Delete options.

##🚀 Features

MySQL Database with two tables:

employees (id, name)

employee_details (id, employee_id, role, salary, mobile,branchs)

##Frontend in React with:

SelectEmployee.jsx → Select employee

EmployeeForm.jsx → Fill details

EmployeeDetails.jsx → View, Edit, Delete

Backend in Node.js with Express:

REST APIs for employee CRUD

MySQL database connection using mysql2 with promises

Navigation between pages with React Router




## database

create database employee_management_system;
use employee_management_system;
-- First table: Employee (id, name)
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

-- Second table: Employee Details (role, salary, mobile, employee_id)
CREATE TABLE employee_details (
  id INT AUTO_INCREMENT PRIMARY KEY,
  role VARCHAR(100),
  salary DECIMAL(10,2),
  mobile VARCHAR(15),
  employee_id INT,
  FOREIGN KEY (employee_id) REFERENCES employee(id) ON DELETE CASCADE
);

USE employee_app;

INSERT INTO employee (name) VALUES ('Neha Sharma'),('Ravi Kumar'),('Priya Singh'),('Amit Verma'),('Sneha Reddy'),('Rahul Mehta'),('Kiran Patel');

ALTER TABLE employee_details
ADD COLUMN branchs VARCHAR(100);
