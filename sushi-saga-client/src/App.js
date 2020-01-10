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
			eatenSushis: []
		}
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

	eatSushi = (sushi) => {
		this.setState({
			eatenSushi: [...this.state.eatSushi,sushi]
		})
	}

  render() {
  	console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.allSushis.slice(0,4)} eatSushi={this.eatSushi} eatenSushi={this.state.eatenSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;