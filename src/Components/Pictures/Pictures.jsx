import React, { Component } from 'react'
import './Pictures.css'

class Pictures extends Component {
    state = { 
        pictures: {
        0: "https://vignette.wikia.nocookie.net/survivor/images/d/dc/S40_Yul_Kwon.jpg/revision/latest?cb=20200115164424",
        1: "https://vignette.wikia.nocookie.net/survivor/images/0/04/S40_Sophie_Clarke.jpg/revision/latest?cb=20200115164420",
        2: "https://vignette.wikia.nocookie.net/survivor/images/8/86/S38_Aubry_Bracco.jpg/revision/latest?cb=20200527182840",
        3: "https://vignette.wikia.nocookie.net/survivor/images/b/b2/S40_Nick_Wilson.jpg/revision/latest?cb=20200115164414"
        }
     }
    render() { 
        return ( 
            <div>
                <img alt='survivor circle' src={this.state.pictures[this.props.circleIdx]} />
                <h6>My Favorite Survivor Winners</h6>
            </div>
         );
    }
}
 
export default Pictures;