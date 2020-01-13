import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({appState: {activeSushis, devoured}, browse, eat}) => {
  return (
    <Fragment>
      <div className="belt">
        {
         activeSushis.map(sushi => <Sushi sushi={sushi} key={sushi.id} clickHandler={eat} devoured={devoured} />)
        }
        <MoreButton clickHandler={browse}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer