import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  constructor(){
    super()
    this.state = {
      currentSushis: [],
      lastSushi: 0
    }
  }

  pick4Sushis = () => {
    const start = this.state.lastSushi !== 100 ? this.state.lastSushi : 0
    const end = start + 4
    this.setState({
      currentSushis: this.props.sushis.slice(start, end),
      lastSushi: end
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="belt">
          {
            this.state.currentSushis.map(sushi => <Sushi key={sushi.name + '-' + Math.floor(Math.random()*100)} onSushiAdd={this.props.onSushiAdd} object={sushi} eaten={this.props.table.includes(sushi)}/>)
          }
          <MoreButton currentSushis={this.state.currentSushis} handleOnClick={this.pick4Sushis}/>
        </div>
      </React.Fragment>
    )
  }
}

export default SushiContainer