import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
// console.log(props)
  return (
    <Fragment>
      <h1 style={{textAlign:"center"}} className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eatenSushis)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table