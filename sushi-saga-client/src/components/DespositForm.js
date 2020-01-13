import React, { Component } from "react";


export default class DepositForm extends Component {
    constructor(props) {
        super(props)
        this.state = {depositAmt: 0}
    }

    handleChange = (e) => {
        this.setState({depositAmt: e.target.value})
    }

    render() {
        return (
            <form onSubmit={(e) => { 
                this.props.handleDeposit(e, this.state.depositAmt)
                this.setState({depositAmt: 0})
            }}>
                <label>Deposit More Money to Your Wallet:</label> <br />
                <input type='number' name='depositAmt' min='0' max='250' value={this.state.depositAmt} onChange={this.handleChange} /> <br />
                <input type='submit' />
            </form>
        )
    }
}