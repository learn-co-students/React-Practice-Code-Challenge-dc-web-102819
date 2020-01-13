import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi' 

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.currentSushis.map(sushi => 
          <Sushi  
          sushiObj={sushi} 
          key={props.currentSushis.id}
          putOnPlate={props.putOnPlate}
          />)
        }
        <MoreButton getMoreSuhis={props.getMoreSuhis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer