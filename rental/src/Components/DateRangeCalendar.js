import React, {Component} from 'react';
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css' // For some basic styling. (OPTIONAL)
 
class DateRangeCalendar extends Component {
  constructor(props){
      super(props)  //-=-=-=-=-=-=-=-=-=- need to add some way of passing props to calendar
      this.state = {
            cottage: {},
            dates: null,
            booking: {
                start: "",
                end: ""
            }
        }
    }  

  onSelect = dates => this.setState({dates})
    
  bookDates(dates, booking){
    this.setState({
        booking: {
            start: this.state.dates.start._d,
            end: this.state.dates.end._d
        }
    })
    // this.state.cottage.cottageBooked.push(booking);
    

  }

  render() {

      console.log('this DOT state', this.state);
      console.log('this . state . booking', this.state.booking);
      

    return (
      <div>
        <DateRangePicker
          onSelect={this.onSelect}
          value={this.state.dates}
        />
        <button type="submit" onClick={() => {this.bookDates(this.state.dates)}} className="waves-effect waves-light btn">Book Your Stay ></button>
      </div>
    )
  }
}

export default DateRangeCalendar