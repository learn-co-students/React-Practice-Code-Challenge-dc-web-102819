import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.renderSushis.map(sushi => <Sushi key={sushi.id} renderSushis={sushi} handleSushi={props.handleSushi} /> )
        }
        <MoreButton handleMoreBtn={props.handleMoreBtn}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
