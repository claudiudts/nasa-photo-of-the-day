import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Picture from './components/Picture'; 
import Footer from "./components/Footer";
import Header from './components/Header';


function App() {
  const [nasaPhoto, setNasaPhoto] = useState([])
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=HuxtTypi6hVRBtYcrHhOFrSHhQNl2BtGd4S4Jg4o&date=2020-12-08")
    .then((res) => {
      console.log(res.data)
      setNasaPhoto(res.data)
    })
  }, []);

  if (!nasaPhoto) return <h3>Loading...</h3>;

  return (
    <div className="App">
    <Header />
    <Picture title={nasaPhoto.title} photo={nasaPhoto.url} date={nasaPhoto.date} info={nasaPhoto.explanation} />
    <Footer copyright={nasaPhoto.copyright}/>
      
      </div>
  );

};



export default App;