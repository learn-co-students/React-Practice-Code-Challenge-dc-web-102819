import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
constructor(){
  super() 
  this.state = {
    allSushis: [] ,
    index: 0 ,
    currentSushis: [] ,
    eatenSushis: []
  } 
} 
  
// to get next four sushis 
  getMoreSuhis = () => {
    let newIndex = this.state.index + 4 
    let newCurrentSushis = this.state.allSushis.slice(newIndex,newIndex + 4)
    console.log(newCurrentSushis)
    this.setState({
      index: newIndex ,
      currentSushis: newCurrentSushis 
    }) 
  } 

  putOnPlate = () => {
    console.log("is this working!!") 
  }
  
  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushiData => {
      let newCurrentSushis = sushiData.slice(this.state.index,4) 
      this.setState({
        allSushis: sushiData ,
        currentSushis: newCurrentSushis 
      })
    })  
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  
        currentSushis={this.state.currentSushis}
        getMoreSuhis={this.getMoreSuhis} 
        putOnPlate={this.putOnPlate}
        /> 
        <Table />
      </div>
    ); 
  }
  
}

export default App; 