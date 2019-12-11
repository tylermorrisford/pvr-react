import React, {Component} from "react";
import API from "../utils/API";
import AddForm from "../Components/AddForm";

class Admin extends Component {
            state = {
                cottages: []
            }

    componentDidMount() {
        API.getCottages()
            .then(res => this.setState({ cottages: res.data }))
            .catch(err => console.log(err));
          }

    reload() {
        API.getCottages()
            .then(res => this.setState({ cottages: res.data }))
            .catch(err => console.log(err));
          
    }
    
    deleteCottage = (id, event) => {
            //    alert(`are you sure you'd like to delete ${name}, ${id}?`);
            event.preventDefault(); 
            console.log(id)
              API.deleteCottage(id)
                  .then(API.getCottages()
                      .then(res => this.setState({ cottages: res.data }))
                      .catch(err => console.log(err)))
          }      
    
    
    render(){
        

    const listCottages = this.state.cottages.map((cottage,i) => (
        <li className="collection-item" key={i} data={cottage}><h6>{cottage.cottageName}, {cottage.cottageLocation}<button className="btn delete-btn" type="submit" onClick={(event) => this.deleteCottage(cottage._id, event)}>Delete</button></h6></li>
        ))

        console.log('listCottages', listCottages);
        console.log('this.state', this.state);

    return(

        <div className="container">
            <div className="row">
                <div className="col m6 s12">
        <h5>Add A New Cottage:</h5>
        <AddForm reload={() => {this.reload()}} />
        <hr />
                </div>
                <div className="col m6 s12 left-align">
        <h5>Active Cottages:</h5>
        <ul className="collection">{listCottages}</ul>
                </div>
                
            </div>
        </div>

    )
}
    
}

export default Admin
