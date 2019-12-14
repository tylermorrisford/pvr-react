import React, {Component} from 'react';
import { Modal, Button } from 'react-materialize';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <div className="checkout">
        <p>{this.state ? this.state.reservationTotal : "Would you like to complete the purchase?"}</p>
        <br />
        <CardElement />
        <hr />
        <br />
        <Button waves onClick={this.submit}>Purchase</Button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);