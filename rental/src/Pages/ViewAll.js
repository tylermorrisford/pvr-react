import React, {Component} from "react";
import API from "../utils/API";
import Card from "../Components/Card";

class ViewAll extends Component {
    state = {
        cottages: []
    }

    componentDidMount() {
        API.getCottages()
            .then(res => this.setState({ cottages: res.data }))
            .catch(err => console.log(err));
          }
render(){

    const allCottages = this.state.cottages.map((cottage,i) => (
        <Card key={i} data={cottage} />
        ))

    return(
        <div className="container">
            <h3>All Rentals</h3>
            <div className="row flex-container">
            {allCottages}
            </div>
        </div>
    )
}
    
}

export default ViewAll;