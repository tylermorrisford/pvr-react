import React, {Component} from "react";
import moment from "moment";
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class Calendar extends Component {
    constructor(props){
        super(props)
        this.state = {
            ready: false
        }
    }

componentDidMount(){
    this.setState({
        ready: true
    })
}

// open a modal to confirm, link modal to transaction confirmation page, pass props
// this.state.cottage.cottageBooked.push(booking);

render(){
    return(
            <div>
             <DayPickerRangeController
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
            />
            </div>
    )
}
}

export default Calendar