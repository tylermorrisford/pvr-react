import React, {Component} from 'react';
// import { Button } from 'react-materialize';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        reservationTotal: null
    }
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

componentDidMount() {
    this.setState({
        reservationTotal: this.props.data
    })
}



  render() {
      console.log('this.state: ', this.state)
    return (
      <div className="checkout">
        {/* <p>Your stay total: ${this.state ? this.state.reservationTotal : "Would you like to complete the purchase?"}</p> */}
        <br />
        <CardElement />
        <hr />
        <br />
        {/* <Button waves="light" onClick={this.submit}>Purchase</Button> */}
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);