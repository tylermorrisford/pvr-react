import React, { Component } from "react";
import Card from "../Components/Card";
import API from "../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);

class LakeLeelanau extends Component {
    constructor() {
        super()
        this.state = {
            cottages: [],
            ready: false
        }
    }

    componentDidMount() {
        API.getCottagesLocation("Lake Leelanau")
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

        // Leland
        // const leland = this.state.cottages.filter(el => el.cottageLocation === "Leland" );
        // const lelandCottages = leland.map((cottage, i) => <Card key={i} data={cottage} />);
        const leelanauCottages = this.state.cottages.map((cottage, i) => <Card key={i} data={cottage} />);

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
                    <div className="leelanau80">
                        <div className="valign-wrapper callout">
                            <h2>Lake Leelanau</h2>
                        </div>
                    </div>
                    <div className="container">
                        <p>The village of Lake Leelanau sits along M-204 at the “narrows” between North & South Lake Leelanau, making it a prime location for boating and swimming!</p>
                        <div className="row flex-container">
                            {leelanauCottages}
                        </div>
                    </div>
                </div>
            )

        }


    }
}

export default LakeLeelanau