import React, { Component } from "react";
import DateInput from './components/DateInput.js';
import Photo from './components/Photo.js';
import "./App.css";
import { render } from "@testing-library/react";

function App() {

  changeDate = e => {
  
      return (
        <div className="App">
          <h1>NASA's Picture of the Day</h1>
          <DateInput />
          <Photo />

        </div>
      );
    }
  }

  export default App;
