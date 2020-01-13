import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'

class MoneyForm extends Component {
    render (){
        return (
            <Form onSubmit={this.props.addMoney}>
                <Form.Input fluid label='Amount:' placeholder = 'Enter amount' name='money'/>
                <Button inverted color='green' type='submit'>Add Money</Button>
            </Form>
        )
    }
}

export default MoneyForm