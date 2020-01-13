import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { Button } from 'semantic-ui-react'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
	constructor() {
		super()
		this.state = {
			sushis: [],
			table: [],
			remaining: 100
		}
	}

	onSushiAdd = (object) => {
		const newBalance = this.state.remaining - object.price
		if (object.price <= this.state.remaining) {
			this.setState({
				table: [...this.state.table, object],
				remaining: newBalance
			})
		} else {
			alert("Sorry dude, you're out of money!")
		}
	}

	componentDidMount(){
		fetch(API)
			.then(res => res.json())
			.then(sushis => this.setState({
				sushis: sushis
			}))
	}

	closeTab = () =>{
		alert(`You owe ¥${100 - this.state.remaining}`)
		this.setState({
			table: [],
			remaining: 100
		})
	}

  render() {
    return (
    	<React.Fragment>
	      <div className="app" >
	        <SushiContainer sushis={this.state.sushis} onSushiAdd={this.onSushiAdd} table={this.state.table}/>
	        <Table remaining={this.state.remaining} table={this.state.table}/>
	        
	      </div>
	      <div className="belt">
		      {this.state.table.length !== 0 ? <Button negative onClick={this.closeTab} >Close Tab</Button> : null}
	      </div>
      </React.Fragment>
    );
  }
}

export default App;