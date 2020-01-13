import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

	constructor() {
		super()
		this.state = {
			allSushis: [],
			eatenSushis: [],
			moneyRemaining: 100
		}
	}




	currentSushi = () => {
		return this.state.allSushis.slice(0,4)
	}

	componentDidMount() {
		fetch(API)
		.then(resp => resp.json())
		.then(data => {
			this.setState({
				allSushis: data
				})
			
		})
	}

	removeSushis = () => {	
		this.setState({
			allSushis: this.state.allSushis.filter(sushi => !this.currentSushi().includes(sushi))
		})

	
	}

	eatSushi = (sushi) => {

	if ((this.state.moneyRemaining - sushi.price) >= 0 ){
		this.setState({
			eatenSushis: [...this.state.eatenSushis, sushi],
			moneyRemaining: this.state.moneyRemaining - sushi.price
		})} else {
			alert('You cannot afford that sushi!')
		}
	}

  render() {
  	console.log(this.state)
    return (
      <div className="app">
        <SushiContainer 
	        sushis={this.currentSushi()} 
	        eatSushi={this.eatSushi} 
	        eatenSushi={this.state.eatenSushis} 
	        removeSushis={this.removeSushis}
        />
        <Table eatenSushis={this.state.eatenSushis} moneyRemaining={this.state.moneyRemaining}/>
      </div>
    );
  }
}

export default App;