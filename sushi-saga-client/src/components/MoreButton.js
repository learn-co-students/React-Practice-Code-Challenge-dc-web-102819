import React from 'react'
import { Button } from 'semantic-ui-react'

const MoreButton = (props) => {
    return <Button onClick={props.handleOnClick} style={{backgroundColor: '#FECECD', color: '#000'}}>
            {props.currentSushis.length > 0 ? "Moar sushi!" : "Let's eat!"}
          </Button>
}

export default MoreButton