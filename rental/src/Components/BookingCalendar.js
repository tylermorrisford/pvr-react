import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
export default class BookingCalendar extends Component {
  state = {
    date: new Date(),
    // where to setup options for clicking multiple days
  }
 
  onChange = date => this.setState({ date })


  render() {

    console.log(this.state)

    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}
