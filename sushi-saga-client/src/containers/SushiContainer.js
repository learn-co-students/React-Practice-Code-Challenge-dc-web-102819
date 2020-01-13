import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer =  (props) =>  {

  return (
    <Fragment>
      <div className="belt"> 
      {props.sushis.map((sushi) => {
      return <Sushi eatenSushi={props.eatenSushi} eatSushi={props.eatSushi} sushi={sushi} sushiName={sushi.name}/> 
      })
  
  }
        <MoreButton resetSushi = {props.resetSushi}/>
      </div>
    </Fragment>
  )   
      }


export default SushiContainer