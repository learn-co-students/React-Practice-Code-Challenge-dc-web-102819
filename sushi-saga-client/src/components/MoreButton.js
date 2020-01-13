import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => {props.resetSushi()}}>
            More sushi!
          </button>
}

export default MoreButton