/* eslint-disable react/no-unused-prop-types */
import React, {Component} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
// import moment from 'moment';
// import API from '../utils/API';

class Calendar extends Component{
    constructor(props){
        super(props)
        this.state ={
            cottage: {}, 
            ready: false,
            startDate: null,
            endDate: null
        }
    }

    componentDidMount(){
        this.setState({
            ready:true,
            cottage: this.props.data
        }) 
    }

    bookDates(event){
        event.preventDefault();
        if (!this.state.startDate || !this.state.endDate){
            alert('Please choose reservation dates!');
        } else {
            console.log('start: ', this.state.startDate._d, 'end: ', this.state.endDate._d)
            // API.updateCottage(this.state.cottage._id)
        }
        // find by id, push object with start and end date into cottageBooked
    }

    render() {

        return(
            <div>
            <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
            <br />
            <button className="btn" type="submit" onClick={(event)=> this.bookDates(event)}>book them dates</button>
            </div>    
        )
    }
}



export default Calendar;