import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log(props)
  
  const {id,name,img_url,price} = props.sushiObj 
  
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={props.putOnPlate}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          true ?
            null
          :
          null 
            // <img src={require(img_url)} width="100%"/>
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price} 
      </h4>
    </div>
  )
}


export default Sushi 



