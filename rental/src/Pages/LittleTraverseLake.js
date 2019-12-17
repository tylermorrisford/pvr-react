import React, { Component } from "react";
import Card from "../Components/Card";
import API from "../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);

class LittleTraverseLake extends Component {
    constructor() {
        super()
        this.state = {
            cottages: [],
            ready: false
        }
    }

    componentDidMount() {
        API.getCottagesLocation("Little Traverse Lake")
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

        const traverseCottages = this.state.cottages.map((cottage, i) => <Card key={i} data={cottage} />);

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
                <div className="littletraverse80">
                <div className="valign-wrapper callout">
                  <h2>Little Traverse Lake</h2>
                </div>
              </div>
                <div className="container">
                    <p><b>Little Traverse</b> is a 640 acre lake located in north central Leelanau County, Cleveland Township, Michigan. Maximum depth is apx. 54ft. The lake lies just south of a portion of Sleeping Bear Dunes National Lakeshore. Little Traverse Lake and Lime Lake, along with their tributaries, make up the Good Harbor Bay watershed. <em>-LittleTraverseLake.org</em></p>
                    <div className="row flex-container">
                        {traverseCottages}
                    </div>
                </div>
                </div>
            )

        }


    }
}

export default LittleTraverseLake