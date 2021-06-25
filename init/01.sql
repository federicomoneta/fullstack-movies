CREATE TABLE movie_reviews(
	id	integer auto_increment,
	movieName	varchar(100),
	movieReview	text,
	PRIMARY KEY (id));
	
INSERT INTO movie_reviews (movieName, movieReview) VALUES ("pelicula1", "buena");
