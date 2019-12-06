import React, {Component} from 'react'
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css' // For some basic styling. (OPTIONAL)
 
class DateRangeCalendar extends Component {
//   constructor(props){
//       super(props)  -=-=-=-=-=-=-=-=-=- need to add some way of passing props to calendar
      state = {
          dates: null
        }
        
    
  onSelect = dates => this.setState({dates})
 
  render() {

    console.log(this.state);

    return (
      <div>
        <DateRangePicker
          onSelect={this.onSelect}
          value={this.state.dates}
        />
      </div>
    )
  }
}

export default DateRangeCalendar