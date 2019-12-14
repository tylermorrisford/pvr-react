/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
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
            reservations: []
        }
        this.M = window.M;
    }

    componentDidMount() {
        var elems1 = document.querySelectorAll(".modal");
        var instances1 = this.M.Modal.init(elems1);
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
            console.log(new Date(this.state.startDate._d))
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
                    orientation="vertical"
                    verticalHeight={568}
                    isDayBlocked={this.isBlocked}
                />
                {/* <DateRangePickerWrapper
                    anchorDirection="left"
                    autoFocus={false}
                    autoFocusEndDate={false}
                    block={false}
                    customArrowIcon={null}
                    customCloseIcon={null}
                    customInputIcon={null}
                    disabled={false}
                    displayFormat={function noRefCheck() { }}
                    enableOutsideDays={false}
                    endDateId="endDate"
                    endDatePlaceholderText="Check-out"
                    horizontalMargin={0}
                    initialEndDate={null}
                    initialStartDate={null}
                    initialVisibleMonth={null}
                    isDayBlocked={function noRefCheck() { }}
                    isDayHighlighted={function noRefCheck() { }}
                    isOutsideRange={function noRefCheck() { }}
                    isRTL={false}
                    keepOpenOnDateSelect={false}
                    minimumNights={1}
                    monthFormat="MMMM YYYY"
                    navNext={null}
                    navPosition="navPositionTop"
                    navPrev={null}
                    numberOfMonths={2}
                    onClose={function noRefCheck() { }}
                    onNextMonthClick={function noRefCheck() { }}
                    onPrevMonthClick={function noRefCheck() { }}
                    orientation="vertical"
                    phrases={{
                        calendarLabel: 'Calendar',
                        chooseAvailableEndDate: function noRefCheck() { },
                        chooseAvailableStartDate: function noRefCheck() { },
                        clearDates: 'Clear Dates',
                        closeDatePicker: 'Close',
                        dateIsSelected: function noRefCheck() { },
                        dateIsSelectedAsEndDate: function noRefCheck() { },
                        dateIsSelectedAsStartDate: function noRefCheck() { },
                        dateIsUnavailable: function noRefCheck() { },
                        enterKey: 'Enter key',
                        escape: 'Escape key',
                        focusStartDate: 'Interact with the calendar and add the check-in date for your trip.',
                        hideKeyboardShortcutsPanel: 'Close the shortcuts panel.',
                        homeEnd: 'Home and end keys',
                        jumpToNextMonth: 'Move forward to switch to the next month.',
                        jumpToPrevMonth: 'Move backward to switch to the previous month.',
                        keyboardBackwardNavigationInstructions: 'Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.',
                        keyboardForwardNavigationInstructions: 'Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.',
                        keyboardShortcuts: 'Keyboard Shortcuts',
                        leftArrowRightArrow: 'Right and left arrow keys',
                        moveFocusByOneDay: 'Move backward (left) and forward (right) by one day.',
                        moveFocusByOneMonth: 'Switch months.',
                        moveFocusByOneWeek: 'Move backward (up) and forward (down) by one week.',
                        moveFocustoStartAndEndOfWeek: 'Go to the first or last day of a week.',
                        openThisPanel: 'Open this panel.',
                        pageUpPageDown: 'page up and page down keys',
                        questionMark: 'Question mark',
                        returnFocusToInput: 'Return to the date input field.',
                        roleDescription: 'datepicker',
                        selectFocusedDate: 'Select the date in focus.',
                        showKeyboardShortcutsPanel: 'Open the keyboard shortcuts panel.',
                        upArrowDownArrow: 'up and down arrow keys'
                    }}
                    regular={false}
                    renderCalendarDay={undefined}
                    renderDayContents={null}
                    renderMonthText={null}
                    reopenPickerOnClearDates={false}
                    required={false}
                    screenReaderInputMessage=""
                    showClearDates={false}
                    showDefaultInputIcon={false}
                    small={false}
                    startDateId="startDate"
                    startDatePlaceholderText=" Check-in"
                    stateDateWrapper={function noRefCheck() { }}
                    verticalHeight={568}
                    withFullScreenPortal={false}
                    withPortal={false}
                    isDayBlocked={this.isBlocked}
                /> */}
                <br /><br />
                <button className="btn" data-target="modal1" type="submit" onClick={(event) => this.bookDates(event)}>Reserve these dates</button>


                <div id="modal1" className="modal bottom-sheet">
                    <div className="modal-content">
                        <h4>Reservation Details</h4>
                        <p>{this.props.data.cottageName}</p>
                        <p>Check-in: </p>
                        <p>Check-out: </p>
                    </div>
                    <div className="modal-footer">
                        <a href="/confirmation/:id" className="modal-close waves-effect waves-green btn-flat">Confirm Reservation</a>
                    </div>
                </div>
            </div>
        )
    }
}



export default Calendar;