import React, { Component } from 'react'

class Sushi extends Component {
  render() {
    const {name, img_url, price} = this.props.object
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={() => this.props.onSushiAdd(this.props.object)}>
          { 
            /* Tell me if this sushi has been eaten! */
            this.props.eaten ?
              null
            :
              <img src={img_url} width="100%" alt={name}/>
          }
        </div>
        <h4 className="sushi-details">
          {name} - ¥{(price * 109.46).toFixed(2)}
        </h4>
      </div>
    )
  }
}

export default Sushi

/* REPLACE TEST WITH 
<div className="plate" 
             onClick={null}>
          { 
            /* Tell me if this sushi has been eaten! 
            false ?
              null
            :
              <img src={img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>


*/

