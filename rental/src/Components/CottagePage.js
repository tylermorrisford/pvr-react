import React, {Component} from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
import DateRangeCalendar from "./DateRangeCalendar";
// import DateRangeSelect from "./DateRangeSelect";
// import Iframe from 'react-iframe';
// import dotenv from 'dotenv';
 
class CottagePage extends Component{
        state = {
            cottage: {},
        }

    componentDidMount() {
        API.getCottage(this.props.match.params.id)
            .then(res => this.setState({ cottage: res.data }))
            .catch(err => console.log(err));
          }

    bookDates() {
        // api. booking dates to db, using put route
        // console.log(this.state.cottage.cottageBooked);
        // this.setState({
        //     booking: {
        //         start: this.state.dates.start,
        //         end: this.state.dates.end
        //     } // this.state.cottage.cottageBooked.push(this.state.booking)
        // })
        // console.log(this.state.cottage.cottageBooked);
        // API.updateCottage(id)
    }     

    render() {
        return(
            <div className="container">
                <h1>{this.state.cottage.cottageName}</h1>
                <div className="row">
                    <div className="col s12 m6">
                        <img alt="cottagePhoto" src={this.state.cottage.cottageImage} />

                    </div>
                    <div className="col s12 m6">
                        <div className="center"><DateRangeCalendar data={this.state.cottage}/><br/>
                        {/* <div className="center"><DateRangeSelect data={this.state.cottage}/><br/> */}
                        {/* <button type="submit" onClick={() => {}} className="waves-effect waves-light btn">Book Your Stay ></button></div> */}
                        </div>

                    </div>
                </div>
                <h5>{this.state.cottage.cottageSlug}</h5>
                <h6>Sleeps: {this.state.cottage.cottageSleeps}, Beds: {this.state.cottage.cottageBedrooms}, Baths: {this.state.cottage.cottageBathrooms}</h6>
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