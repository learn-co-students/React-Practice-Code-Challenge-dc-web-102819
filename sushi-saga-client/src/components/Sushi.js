import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {id, name, img_url, price, isEaten} = props.renderSushis
  return (
    <Fragment>
    <div className="sushi">
      <div className="plate"
        data-id={id}
        onClick={props.handleSushi}>
        {

          isEaten
          ? null
          : <img alt='name' src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
    </Fragment>
  )
}

export default Sushi
