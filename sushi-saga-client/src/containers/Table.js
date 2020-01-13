import React, { Fragment } from 'react'

const Table = ({appState: {devoured, wallet}}) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={'eaten-' + x.id} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          { renderPlates(devoured) }
        </div>
      </div>
    </Fragment>
  )
}

export default Table