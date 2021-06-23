# fullstack-movies

IMPORTANTE:
- Carpeta client --> frontend
- Carpeta server --> backend
- IGNORAR TRAVIS

Para usar cambiar el pool de la BBDD en MySQL (Usar servidor Local)
const db = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'CRUDDataBase', //Necesario crear un esquema
    port: '3306'
})

ESQUEMA MYSQL: CRUDDataBase
Tabla
CREATE TABLE movie_reviews(
	id	integer auto_increment,
	movieName	varchar(100),
	movieReview	text,
	PRIMARY KEY (id));

## Parte de Docker

Para iniciar el contenedor de MySQL necesitamos posicionarnos en la carpeta base del repo y escribir lo siguiente:
- sudo docker build --tag mysql-docker .
- sudo docker run --detach --name=mysql-docker --publish 6603:3306 mysql-docker

Después de iniciado el contenedor abrimos el workbench, ponemos en host localhost, puerto 6603, contraseña Admin2020% y entramos
Cuando estamos adentro ponemos lo siguiente:
CREATE DATABASE CRUDDataBase;
USE CRUDDataBase;
CREATE TABLE movie_reviews(
	id	integer auto_increment,
	movieName	varchar(100),
	movieReview	text,
	PRIMARY KEY (id));