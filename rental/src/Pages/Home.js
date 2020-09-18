import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);

class Home extends Component{
    constructor(){
        super()
        this.state = {
            ready: false
        }
    }

    componentDidMount(){
        this.setState({
            ready: true
        })
    }


    render(){
        if(!this.state.ready) {
            return(
                <div className="spinner-wrapper">
                    <FontAwesomeIcon icon="circle-notch" size="10x" spin />
                </div>
            )
        }

        return(
            <div className="leland">
            <div className="valign-wrapper callout">
            <Animated animationIn="fadeIn" animationInDuration={1700} isVisible={true}>
              <h2>Explore Leelanau County</h2>
              </Animated>
            </div>
          </div>
        )

    }
}

export default Home