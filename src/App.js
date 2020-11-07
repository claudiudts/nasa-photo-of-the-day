import React, { Component } from "react";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";


class App extends Component {
  state = {
    date: "",
    photo: ""
  };
  
  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };
  
  
  getPhoto() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=HuxtTypi6hVRBtYcrHhOFrSHhQNl2BtGd4S4Jg4o&date=2020-03-09&hd=true')
    .then(resp => resp.json())
    .then(photoData => this.setState({ photo: photoData }));
  };
  
  
  render() {
    return (
      <div>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <h2>Date: {this.date}</h2>
        <DateInput changeDate={this.changeDate} />
        <Photo photo={this.state.photo} />
      </div>
    )
  }
}


export default App;

