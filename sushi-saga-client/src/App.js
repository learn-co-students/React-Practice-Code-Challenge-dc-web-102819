import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state ={
      sushis: [],
      money: 100,
      sushisOnPage: 0,
      goneSushis: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({sushis: sushis}))
    .catch(err => console.warn(err.message))
  }

  renderSushis = () => {
    return this.state.sushis.slice(this.state.sushisOnPage, this.state.sushisOnPage + 4)
  }
  handleMoreBtn = () => {
    console.log('show next page')
    this.setState({
      sushisOnPage: this.state.sushisOnPage + 4
    })
    return this.state.sushis.slice(this.state.sushisOnPage, this.state.sushisOnPage + 4)

  }

  handleSushi = e => {
    console.log('My sushi id is', e.currentTarget.dataset.id)
    const targetID = e.currentTarget.dataset.id
    const eatenSushis = [...this.state.goneSushis]
    let money = this.state.money
    const sushisCopy = this.state.sushis.map(sushi => {
      const price = sushi.price
      if(sushi.id === Number(targetID) && money >= price && !sushi.isEaten) {
        sushi.isEaten = true
        eatenSushis.push(sushi)
        money -= price
      }
      return sushi
    })
    this.setState({
      sushis: sushisCopy,
      money: money,
      goneSushis: eatenSushis
    })
  }
  render() {
    return (
      <div className="app">
        <SushiContainer renderSushis={this.renderSushis()}
        handleMoreBtn={this.handleMoreBtn}
        handleSushi={this.handleSushi}
        />
        <Table money={this.state.money} goneSushis={this.state.goneSushis}/>
      </div>
    );
  }
}

export default App;
