import React, {Component} from "react";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

class DateRangeSelect extends Component {
    handleSelect(ranges){
        console.log(ranges);
        // {
        // 	selection: {
        // 		startDate: "",
        // 		endDate: "",
        // 	}
        // }
    }
    render(){
        const selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
        return (
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={this.handleSelect}
            />
        )
    }
}

export default DateRangeSelect