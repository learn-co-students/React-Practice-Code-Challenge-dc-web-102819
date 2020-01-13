import React from 'react'
import { Button } from 'semantic-ui-react'


const MoreButton = (props) => {
    return <Button inverted color='orange' onClick={props.moreSushi}>
            More sushi!
          </Button>
}

export default MoreButton