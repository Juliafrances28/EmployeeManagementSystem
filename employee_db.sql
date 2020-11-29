
-- Create the database employee_db and specified it for use.
CREATE DATABASE employee_db;
USE employee_db;


CREATE TABLE department 
id INT NOT NULL AUTO_INCREMENT,  
title VARCHAR (30) NOT NULL,
PRIMARY KEY (id) 


-- I subsituted title in place of the word name. Everytime I used the name, it   insisted on being blue. The computer didn't generate a syntax error, but I know that is wrong. 


insert into department (id, title) value ("programmer,1");
insert into department (id, title) value ("It, 2");
insert into department (id, title) value ("advertising, 3");
insert into department (id, title) value ("sales, 4");
insert into department (id, title) value ("payroll, 5");

CREATE TABLE roles
department_id INT NOT NULL AUTO_INCREMENT,
title VARCHAR (30) NOT NULL,
Salary INT default 0, 
PRIMARY KEY (id) 

insert into roles (title,salary, department_id) values ("programmer, 100, 1 ")
insert into roles (title,salary, department_id) values ("It, 90, 2")
insert into roles (title,salary, department_id) values ("advertising, 70, 3")
insert into roles (title,salary, department_id) values ("sales, 50, 4")
insert into roles (title,salary, department_id) values ("payroll, 30, 5")

CREATE TABLE employee 
first_name VARCHAR (30) not null,
last_name  VARCHAR (30) not null, 
role_id int not null, 
PRIMARY KEY (id)

insert into (first_name, last_name, roles_id) values ('Julia', 'Horan', 1)
insert into (first_name, last_name, roles_id) values ('Meredith', 'Mcguire', 2)
insert into (first_name, last_name, roles_id) values ('Gita', 'Shawney', 3)
insert into (first_name, last_name, roles_id) values ('Lisa', 'Joseph', 4)
insert into (first_name, last_name, roles_id) values ('Joanna', 'krieder', 5)












