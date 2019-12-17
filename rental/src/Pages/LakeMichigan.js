import React, { Component } from "react";
import Card from "../Components/Card";
import API from "../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);

class LakeMichigan extends Component {
    constructor() {
        super()
        this.state = {
            cottages: [],
            ready: false
        }
    }

    componentDidMount() {
        API.getCottagesLocation("Lake Michigan")
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

        const lakemichiganCottages = this.state.cottages.map((cottage, i) => <Card key={i} data={cottage} />);

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
                <div className="lakemichigan80">
                <div className="valign-wrapper callout">
                  <h2>Lake Michigan</h2>
                </div>
              </div>
                <div className="container">
                    <p>Lake Michigan is simply breathtaking. The lake has so many beaches that it’s referred to as America’s “Third Coast”. Whether you plan to swim, play in the sand, or just watch a spectacular sunset, the shores of Lake Michigan are the perfect place to unplug and unwind.</p>
                    <div className="row flex-container">
                        {lakemichiganCottages}
                    </div>
                </div>
                </div>
            )

        }


    }
}


export default LakeMichigan