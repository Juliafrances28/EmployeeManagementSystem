
-- Create the database employee_db and specified it for use.
DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db;
USE employee_db;


CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,  
title VARCHAR (30),
PRIMARY KEY (id) 
);
      
insert into department (tile)  values ('engineering');
insert into department (title)  values ('marketing');
insert into department (title)  values ('sales');
insert into department (title)  values ('HR');

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
department_id INT,
title VARCHAR (30),
Salary DECIMAL (5,2),  
PRIMARY KEY (id)
); 


insert into roles ( title, salary, department_id) values ('front-end', 100, 1 );
insert into roles (title, salary,  department_id) values ('advertiser', 70, 2);
insert into roles (title, salary,  department_id) values ('sales rep', 70, 3);
insert into roles (title, salary, department_id) values ('payroll', 30, 4);


CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR (30) not null,
last_name  VARCHAR (30) not null, 
role_id int NOT NULL, 
PRIMARY KEY (id)
);

insert into employee (first_name, last_name, role_id) values ('Julia', 'Horan', 1);
insert into employee (first_name, last_name, role_id) values  ('Meredith', 'Mcguire', 2);
insert into employee (first_name, last_name, role_id) values  ('Gita', 'Shawney', 3);
insert into employee (first_name, last_name, role_id) values ('Lisa', 'Joseph', 4);

