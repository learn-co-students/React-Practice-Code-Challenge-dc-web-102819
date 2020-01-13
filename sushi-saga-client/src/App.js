import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import DepositForm from './components/DespositForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      nextStartPoint: 4,
      activeSushis: [],
      devoured: [],
      wallet: 100
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({
      sushis: data,
      activeSushis: data.slice(0, 4)
    }))
  }

  changeActiveSushis = () => {
    this.setState((prevState) => {
      return {
        activeSushis: prevState.sushis.slice(prevState.nextStartPoint, prevState.nextStartPoint + 4),
        nextStartPoint: prevState.nextStartPoint + 4 < prevState.sushis.length ? prevState.nextStartPoint + 4 : 0
      }
    })
  }

  devourSushi = (sushi) => {
    if (this.state.wallet >= sushi.price) {
      this.setState((prevState) => {
        return { 
          devoured: [...prevState.devoured, sushi],
          wallet: prevState.wallet - sushi.price
        }
      })
    }
  }

  deposit = (e, amt) => {
    e.preventDefault()
    this.setState((prevState) => {
      return {wallet: prevState.wallet + parseInt(amt)}
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eat={this.devourSushi} browse={this.changeActiveSushis} appState={this.state} />
        <Table appState={this.state} />
        <DepositForm handleDeposit={this.deposit} />
      </div>
    );
  }
}

export default App;