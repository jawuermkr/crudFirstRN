create database prueba;
use prueba;

create table users (
    id_user bigint(20) NOT NULL PRIMARY KEY,
    nombre varchar(100) NOT NULL,
    pass varchar(20) NOT NULL,
    ciudad varchar(30) NOT NULL
)