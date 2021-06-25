const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors = require('cors');
const PORT = 3000;

const db = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'Admin2020%',
    database: 'CRUDDataBase',
    port: '3306'
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/api/insert', (req, res) => {

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?);";
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result);
    })
});

app.get('/api/get', (req,res) => {
    const sqlSelect = "SELECT * FROM movie_reviews;";
    db.query(sqlSelect, (error, result) => {
        if (error) throw error;
        res.send(result);
    })
});


app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})