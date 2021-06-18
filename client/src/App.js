import React, {useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';

function App() {


  const [movieName, setMoviename] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieList] = useState([]);

useEffect(()=> {
  Axios.get('http://localhost:3001/api/get').then((response) => {
         setMovieList(response.data);})
}, []);

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movieName: movieName, 
      movieReview: review,
    }).then(() => {alert('a tu mama le insertamos')})
  };

  return (
    <div className="App">
      <h1>AGUANTE EL DIEGO Y LA FALOPA</h1>

      <div className="form" >
        <label>Nombre de tu movie</label>
        <input type="text" name="movieName" onChange = {(e)=> {
          setMoviename(e.target.value)
        }} />      
        <label>Como la pasaste </label>      
        <input type="text" name="review"  onChange = {(e)=> {
          setReview(e.target.value)
        }}/>
        <button class='primary' onClick={submitReview}>Mandalo </button>

        {movieReviewList.map((val) => {
          return <h1> MovieName: {val.movieName} | MovieReview: {val.movieReview} </h1>
        })}
      </div>
    </div>
          );
  }

export default App;
