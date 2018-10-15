import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import '../src/magazine.css'




class Magazine extends Component{

  constructor(){
    super();
    this.state = {
      magazineData:[],
      monthArray:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
  }

  convertNumberToMonth = number => {
    return (this.state.monthArray[number - 1]).toUpperCase()
  }

  componentDidMount(){
    fetch('https://covers.condenast.co.uk/api/v1/vg/')
    .then(results => {
      return results.json();
    })
    .then(data => {
      let magazineData = data.data.issues.map( info => {
        return(
          <div className="data-container" key = {info.cover} onClick={this.loadDetails}>
            <img className="single-image" src= {"https://covers.condenast.co.uk" + info.cover + 500}/>
            <div link={info.href} className="single-date">{this.convertNumberToMonth(info.month) + " " + info.year}</div>
          </div>
        )
      })
      this.setState({magazineData : magazineData});
      console.log("state", this.state.magazineData);
  })

}

  render(){
    return(
      <div>
        <div className="title">
          <h1>Le Catalogue</h1>
        </div>
        <div className = "mainCoverDiv">
          <div className = "magazineCovers">{this.state.magazineData}</div>
        </div>
      </div>
    );
  }
}




export default Magazine;
