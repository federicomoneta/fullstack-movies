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
	id	integer auto-increment,
	movieName	varchar(100),
	movieReview	text,
	PRIMARY KEY (id));
