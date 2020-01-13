import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
      sushis: [],
      eatenSushi: [],
      emptyPlates: []
    }

  setFourSushis = () => {

    if(this.state.sushis.length !== 0){
    let sushi1 = this.state.sushis[Math.floor(Math.random() * 99) + 1]
    let sushi2 = this.state.sushis[Math.floor(Math.random() * 99) + 1]
    let sushi3 = this.state.sushis[Math.floor(Math.random() * 99) + 1]
    let sushi4 = this.state.sushis[Math.floor(Math.random() * 99) + 1]

    let sushiArr = [sushi1, sushi2, sushi3, sushi4]
    return sushiArr

    }else{
    return this.state.sushis.slice(0, 4)
    }

  }
  
  eatSushi = (sushi) =>{

    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi.target.id]
    })
    if(this.state.emptyPlates.includes(sushi.target.id)){
     return null
    }else{
      this.setEmptyPlates(sushi)
    }
  }

  setEmptyPlates = (sushi) => {
    this.setState({
      emptyPlates: [...this.state.emptyPlates, sushi.target.id]
    })
  }

  resetSushi = () => {
   
    this.setState({
      eatenSushi: []
    })

  }

  componentDidMount(){
    fetch('http://127.0.0.1:3000/sushis')
    .then(response => response.json())
    .then((sushis) =>  {
      this.setState({sushis: sushis})
  })}
   
  

  render() {
   
    return (
      <div className="app">
        <SushiContainer 
            resetSushi={this.resetSushi} 
            eatenSushi={this.state.eatenSushi} 
            eatSushi={this.eatSushi} 
            sushis={this.setFourSushis()}
            emptyPlates={this.emptyPlates}/>
        <Table 
        emptyPlates={this.state.emptyPlates}/>
      </div>
    );
  }
}

export default App;