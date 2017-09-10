drop database if exists bamazon;

create database bamazon;

use bamazon;

create table products (
item_id integer auto_increment not null,
product_name varchar(50) not null,
department_name varchar(50) not null,
price decimal (10,2),  
stock_quantity integer,
primary key(item_id));


insert into products (product_name, department_name, price, stock_quantity)
values ("Diapers", "Baby", 34.99, 30);

insert into products (product_name, department_name, price, stock_quantity)
values ("Johnson-Johnson", "Health & Beauty", 6.99, 40);

insert into products (product_name, department_name, price, stock_quantity)
values ("Tylenol","Pharmacy", 8.99, 15);

insert into products (product_name, department_name, price, stock_quantity)
values ("Alantic Salmon", "Meats", 28.50, 8);

insert into products (product_name, department_name, price, stock_quantity)
values ("Wild Shrimp", "Meats", 13.49, 10);

insert into products (product_name, department_name, price, stock_quantity)
values ("Pro-namel Toothpaste", "Health & Beauty", 5.80, 20);

insert into products (product_name, department_name, price, stock_quantity)
values ("iPhone 7s", "Electronics", 849.99, 8);

insert into products (product_name, department_name, price, stock_quantity)
values ("Flat-Screen TV (60in)", "Electronics", 950.99, 5);

insert into products (product_name, department_name, price, stock_quantity)
values ("Dr. Pepper", "Soft Drinks", 2.49, 35);

insert into products (product_name, department_name, price, stock_quantity)
values ("Mac-Book Pro (15in)", "Electronics", 2323.99, 5);