import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/MoneyForm'
import {Container} from 'semantic-ui-react'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushis: [],
      eatenSushis: [],
      money: 100,
      index: 0
    }
  }


  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(sushis => this.setState(
        {sushis: sushis}
      )
    )
  }

  showFour = () => {
    return this.state.sushis.slice(this.state.index, this.state.index + 4)
  }
  
  
  eatSushi = (event) => {
    const idSushi = event.currentTarget.dataset.id
    
    const updatedEatenSushis = [...this.state.eatenSushis]
    
    let newMoney = this.state.money

    const newSushiArray = this.state.sushis.map(sushi => {
        if (sushi.id === parseInt(idSushi, 10) && !sushi.isEaten && (newMoney - sushi.price >= 0)){
          sushi.isEaten = true
          updatedEatenSushis.push(sushi)
          newMoney -= sushi.price
        }
        return sushi
      }
    )
    this.setState(
      {
        sushis: newSushiArray,
        eatenSushis: updatedEatenSushis,
        money: newMoney
      }
    )
  }

  moreSushi = () => {
    const newIndex = this.state.index + 4
    this.setState(
      { index: newIndex}
    )
  }

  addMoney = (event) => {
    event.preventDefault()
    let moreMoney = parseInt(event.currentTarget.money.value,10)
    this.setState(
      {money: this.state.money + moreMoney}
    )
    event.currentTarget.money.value = ''

  }

  render() {
    return (
      <Container className="app">
        <br/>
        <SushiContainer 
            sushis={this.showFour()} 
            eatSushi = {this.eatSushi}
            moreSushi={this.moreSushi}
        />
        <br/>
        <Table eatenSushis={this.state.eatenSushis} money={this.state.money}/>
        <br/>
        <MoneyForm addMoney={this.addMoney}/>
      </Container>
    );
  }
}

export default App;