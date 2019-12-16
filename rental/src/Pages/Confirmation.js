
import React, { Component} from "react";
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Modal, Button } from 'react-materialize';
import ReservationCard from "../Components/ReservationCard";
import API from '../utils/API';
// import stripe
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../Components/CheckoutForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);

class Confirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ready: false,
            cottage: {},
            reservationStart: null,
            reservationEnd: null,
            reservationLength: null,
            reservationCost: null
        }
    }
    // methods for calculation

    componentDidMount(){

        API.getCottage(this.props.match.params.cottageId)
            .then(res => this.setState({ cottage: res.data }))
            .catch(err => console.log(err));

        this.setState({
            reservationStart: this.props.match.params.reservationStart,
            reservationEnd: this.props.match.params.reservationEnd,
            reservationLength: this.props.match.params.reservationLength,
            ready: true

        })
        

            // console.log('new date with startDate: ', new Date(this.state.startDate._d))
            // let reservation = {
            //     cottageId: this.props.data._id,
            //     startDate: this.state.startDate._d,
            //     endDate: this.state.endDate._d
            // };


        // API.saveReservation(reservation)
        // .catch(err => console.log(err));

        this.setState({
            ready: true
        })

    }

    render() {

        if (!this.state.ready) {
            // spinner "circle-notch"
            return (
                <div className="spinner-wrapper">
                    <FontAwesomeIcon icon="circle-notch" size="6x" spin />
                </div>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <ReservationCard data={this.state.cottage} resLength={this.state.reservationLength}/>
                    </div>
                    <div className="col s12 m6">
                        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                            <div className="example">
                                <h5>Enter your payment details</h5>
                                <Elements>
                                    <CheckoutForm />
                                </Elements>
                            </div>
                        </StripeProvider>
                    </div>
                </div>
            </div>
        )
    }

}

export default Confirmation