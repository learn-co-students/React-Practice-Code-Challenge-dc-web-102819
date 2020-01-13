import React from 'react'

const Sushi = (props) => {

return(
  
    <div className="sushi" >

      <div className="plate" id= {props.sushi.id} onClick={props.eatSushi} >

      {props.eatenSushi.includes(props.sushi.id) ? null : <img src={props.sushi.img_url} alt='j' width="100%" id= {props.sushi.id}/>}

      </div>
      

      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}

      </h4>
       </div>

   
   
)
}


export default Sushi