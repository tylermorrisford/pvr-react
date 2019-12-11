/* eslint-disable react/no-unused-prop-types */
import React, {Component} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
// import moment from 'moment';
import API from '../utils/API';

class Calendar extends Component{
    constructor(props){
        super(props)
        this.state ={
            cottage: {}, 
            ready: false,
            startDate: null,
            endDate: null
        }
        this.M = window.M;
    }

    componentDidMount(){
        var elems1 = document.querySelectorAll(".modal");
        var instances1 = this.M.Modal.init(elems1);
        this.setState({
            ready:true,
            cottage: this.props.data
        }) 
    }

    bookDates(event){
        event.preventDefault();
        if (!this.state.startDate || !this.state.endDate){
            alert('Please click \'Start Date\' or  \'End Date\' to choose reservation dates.');
        } else {
            console.log('start: ', this.state.startDate._d, 'end: ', this.state.endDate._d, 'cottageBooked: ', this.props.data.cottageBooked)
        //     let reservation = {
        //              startDate: this.state.startDate._d,
        //              endDate: this.state.endDate._d
        //    };
        //     API.updateCottage(this.state.cottage._id)({
        //        cottageBooked: [reservation]
        //     })
        //    .then(res => this.loadBooks())
        // .catch(err => console.log(err));
        }
        // find by id, push object with start and end date into cottageBooked
        // trigger modal - direct modal to shopping cart page with stripe


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
            <br /><br />
            <button className="btn" data-target="modal1" type="submit" onClick={(event)=> this.bookDates(event)}>Reserve these dates</button>
            
            
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