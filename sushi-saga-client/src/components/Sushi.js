import React from 'react'

const Sushi = (props) => {

  const {id, name, price, img_url, isEaten} = props.sushi
// console.log(props)
  return (
    <div className="sushi" >
      <div className="plate" onClick={props.eatSushi} data-id={id}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          isEaten ?
            null
          :
            <img alt='' src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
      {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi