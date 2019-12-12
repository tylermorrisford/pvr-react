import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
import Calendar from "./Calendar";
// import Iframe from 'react-iframe';
// import dotenv from 'dotenv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);

class CottagePage extends Component {
    state = {
        cottage: {},
        reservations: {},
        ready: false
    }

    componentDidMount() {
        API.getCottage(this.props.match.params.id)
            .then(res => this.setState({ cottage: res.data }))
            .catch(err => console.log(err));

        API.getReservations(this.props.match.params.id)
            .then(res => this.setState({ reservations: res.data }))
            .catch(err => console.log(err));    

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
                <h1>{this.state.cottage.cottageName}</h1>
                <div className="row">
                    <div className="col s12 m6">
                        <img alt="cottagePhoto" src={this.state.cottage.cottageImage} />

                    </div>
                    <div className="col s12 m6">
                        <h5>{this.state.cottage.cottageSlug}</h5>
                        <h5>Sleeps: {this.state.cottage.cottageSleeps}<br />Beds: {this.state.cottage.cottageBedrooms}<br />Baths: {this.state.cottage.cottageBathrooms}</h5>
                        {/* <ul className="collection">{reservationList}</ul> */}
                    </div>

                </div>

                <div className="center">See available dates:<br />
                {this.state.cottage._id && <Calendar data={this.state.cottage} />}<br />
                </div>
                <p>{this.state.cottage.cottageDescription}</p>
                {/* <Iframe 
                    url={this.state.cottage.cottageMap}
                    width="600" 
                    height="450" 
                    frameborder="0" 
                    style="border:0"
                    /> */}
            </div>
        )
    }
}

// add map using google map js api

export default CottagePage