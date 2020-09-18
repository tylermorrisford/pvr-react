import React, { Component } from "react";
import Card from "../Components/Card";
import API from "../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);

class Leland extends Component {
    constructor() {
        super()
        this.state = {
            cottages: [],
            ready: false
        }
    }

    componentDidMount() {
        API.getCottagesLocation("Leland")
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
        const lelandCottages = this.state.cottages.map((cottage, i) => <Card key={i} data={cottage} />);

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
                    <div className="leland80">
                        <div className="valign-wrapper callout">
                            <h2>Leland</h2>
                        </div>
                    </div>
                    <div className="container">
                        <p><b>Leland</b> is a picturesque, coastal small town located on a sliver of land between Lake Michigan and Lake Leelanau, on Michigan’s Leelanau Peninsula… surrounded by incredible natural beauty, excellent amenities and charm!</p>

                        <p>Leland is a great “walk around” town. All shops, restaurants, galleries, and museums are located within a short distance. You will also find easy access to public beaches, hiking trails, boat launches on each lake – with a river connecting the two.</p>

                        <p>Leland’s historical district, known as Fishtown, features rustic shanties and docks reminiscent of life and commercial fishing one hundred years ago. Today, galleries and unique shops fill their walls, and charter fishing trips and the only public ferry to the popular Manitou Islands depart from those same docks. The adjacent full service marina is the perfect place for launching and mooring boats on Lake Michigan. <em>– LelandMi.com</em></p>
                        <div className="row flex-container">
                            {lelandCottages}
                        </div><hr />
                    </div>
                </div>
            )

        }


    }
}
export default Leland