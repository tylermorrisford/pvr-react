/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import { Modal, Button } from 'react-materialize';
import API from '../utils/API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);


class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // cottage: {}, 
            ready: false,
            startDate: null,
            endDate: null,
            reservations: [],
            reservationStart: null,
            reservationEnd: null,
            reservationLength: null,
        }
    }

    componentDidMount() {

        console.log('props data from cottage page: ', this.props.data);
        API.getReservations(this.props.data._id)
            .then(res => {
                console.log('reservations ->', res.data);
                this.setState({ reservations: res.data });
            })
            .catch(err => console.log(err));
        this.setState({
            ready: true,
            // cottage: this.props.data
        })
    }

    bookDates(event) {
        event.preventDefault();
        if (!this.state.startDate || !this.state.endDate) {
            alert('Please click \'Start Date\' or  \'End Date\' to choose reservation dates.');
        } else {
            let resStart = moment(this.state.startDate._d);
            let resEnd = moment(this.state.endDate._d);
            let resLength = Math.abs(resStart.diff(resEnd, 'days'));
            // for actual number of nights, use resLength - 1
            console.log('start: ', resStart, 'end: ', resEnd, 'reservation length: ', resLength);
            this.setState({
                reservationStart: resStart,
                reservationEnd: resEnd,
                reservationLength: resLength - 1,

            })
            console.log('new date with startDate: ', new Date(this.state.startDate._d))
            let reservation = {
                cottageId: this.props.data._id,
                startDate: this.state.startDate._d,
                endDate: this.state.endDate._d
            };
            API.saveReservation(reservation)
                .catch(err => console.log(err));
        }

        // new Date()
        // startDate.toISOString();

        // find by id, push object with start and end date into cottageBooked
        // trigger modal - direct modal to shopping cart page with stripe

    }
    isBlocked = day => {
        // const availableDates = ["2019-12-21", "2019-12-24", "2019-12-25", "2019-12-30"];
        // return !blockedDates.some(date => day.isSame(date), 'day')
        // return this.state.reservations.some(date => day.isSame(date), 'day')
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
            <div>
                <DateRangePicker
                    anchorDirection="right"
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    endDatePlaceholderText="Check-out"
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    minimumNights={3}
                    startDatePlaceholderText=" Check-in"
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    orientation="horizontal"
                    // verticalHeight={568}
                    // isDayHighlighted={function noRefCheck() { }}
                    // isOutsideRange={function noRefCheck() { }}
                    isDayBlocked={this.isBlocked}
                />
                
                <br /><br />
                <Modal
                    actions={[
                        <Button flat modal="close" node="button" to="/confirmation" renderas={Link} data={this.state} waves="green">Confirm ></Button>
                    ]}
                    bottomSheet
                    fixedFooter={false}
                    header="Reservation Details"
                    id="modal-0"
                    options={{
                        dismissible: true,
                        endingTop: '10%',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: '4%'
                    }}
                    trigger={<Button node="button" type="submit" onClick={(event) => this.bookDates(event)}>Reserve these dates</Button>}
                ><h5>Your stay at {this.props.data.cottageName}:</h5>
                    <h6>Check-in: {this.state.reservationStart ? this.state.reservationStart : "No check-in dates selected"} || Check-out: {this.state.reservationEnd ? this.state.reservationStart : "No check-out dates selected"}</h6>
                </Modal>

            </div>
        )
    }
}



export default Calendar;