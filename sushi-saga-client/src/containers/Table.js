import React, { Component } from 'react'

class Table extends Component {

  renderPlates = (array) => {
    console.log(array)
    return array.map((x, index) => {
      return <div key={Math.floor(Math.random()*10000)} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  // getBill(){
  //   return this.props.table.reduce((total, item) => total + item.price, 0)
  // }

  render() {
    return (
      <React.Fragment>
        <h1 className="remaining" style={this.props.remaining < 40 ? {color: "red"} : null }>
          {this.props.remaining === 0 ? "Whoops, you're out of money 🤷‍♂️" : `You have: ¥${(this.props.remaining * 109.46).toFixed(2)} remaining!`}
        </h1>
        <div className="table">
          <div className="stack">
            {
              this.props.table.length > 0 ? this.renderPlates([this.props.table]) : null
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
  
}

export default Table