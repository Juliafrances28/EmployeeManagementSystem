
-- Create the database employee_db and specified it for use.
DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db;
USE employee_db;


CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,  
title VARCHAR (30) NOT NULL,
PRIMARY KEY (id) 
);
      
insert into department (title,id)  values ('programmer',1);
insert into department (title,id)  values ('It', 2);
insert into department (title,id)  values ('advertising',3);
insert into department (title,id)  values ('sales', 4);
insert into department (title,id)  values ('payroll', 5);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
department_id INT NOT NULL,
title VARCHAR (30) NOT NULL,
Salary DECIMAL (5,2),  
PRIMARY KEY (id)
); 


insert into roles (title,salary, department_id) values ('programmer', 100, 1 );
insert into roles (title,salary, department_id) values ('It', 90, 2);
insert into roles (title,salary, department_id) values ('advertising', 70, 3);
insert into roles (title,salary, department_id) values ('sales', 50, 4);
insert into roles (title,salary, department_id) values ('payroll', 30, 5);


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

