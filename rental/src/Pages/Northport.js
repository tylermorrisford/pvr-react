import React, { Component } from "react";
import Card from "../Components/Card";
import API from "../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);

class Northport extends Component {
    constructor() {
        super()
        this.state = {
            cottages: [],
            ready: false
        }
    }

    componentDidMount() {
        API.getCottagesLocation("Northport")
        .then(res => {
            console.log(res.data)
                this.setState({
                    cottages: res.data,
                    ready: true
                });
            })
            .catch(err => console.log(err));
    }

    render() {

        const northportCottages = this.state.cottages.map((cottage, i) => <Card key={i} data={cottage} />);

        if (!this.state.ready) {
            // spinner "circle-notch"
            return (
                <div className="spinner-wrapper">
                    <FontAwesomeIcon icon="circle-notch" size="6x" spin />
                </div>
            )
        } else {
            return (
                <div>
                <div className="northport80">
                <div className="valign-wrapper callout">
                  <h2>Northport</h2>
                </div>
              </div>
                <div className="container">
                    <p>At the northern tip of Leelanau County, <b>Northport</b> was the gateway to Grand Traverse Bay and one of the earliest settlements in the county. Today, the village of Northport boasts a beautiful harbor and park, a full service grocery and many other stores, antique shops, and art galleries. The hills around Northport are filled with cherry and apple orchards. Leelanau State Park at the northern tip of the Leelanau Peninsula is home to the historic and well restored Grand Traverse Lighthouse. <em>-Leelanau.com</em></p>
                    <div className="row flex-container">
                        {northportCottages}
                    </div>
                </div>
                </div>
            )

        }


    }
}

export default Northport