import React, { Component } from 'react'
import Lea from '../minea/Lea1.jpeg'
import Lea2 from '../minea/Lea2.jpeg'
// import Lea3 from '../minea/Lea3.jpeg'
import Minea from '../minea/Minea1.jpeg'
import Minea2 from '../minea/Minea2.jpeg'
import Minea3 from '../minea/Minea3.jpeg'
import Minea4 from '../minea/Minea4.jpeg'
import Minea5 from '../minea/Minea5.jpeg'
import Minea6 from '../minea/Minea6.jpeg'
import Minea7 from '../minea/Minea7.jpeg'

export class PictureTwo extends Component {
    render() {
        return (
            <div>
                <img src={Lea} alt="Lea" width="450px" height="auto" className="norway"></img>
                <img src={Lea2} alt="Lea" width="450px" height="auto" className="norway"></img>
                {/* <img src={Lea3} alt="Lea" width="450px" height="auto" className="minea"></img> */}
                <img src={Minea} alt="Minea" width="450px" height="auto" className="norway"></img>
                <img src={Minea2} alt="Minea" width="450px" height="auto" className="norway"></img>
                <img src={Minea3} alt="Minea" width="450px" height="auto" className="norway"></img>
                <img src={Minea4} alt="Minea" width="450px" height="auto" className="norway"></img>
                <img src={Minea5} alt="Minea" width="450px" height="auto" className="norway"></img>
                <img src={Minea6} alt="Minea" width="450px" height="auto" className="norway"></img>
                <img src={Minea7} alt="Minea" width="450px" height="auto" className="norway"></img>
            </div>
        )
    }
}

export default PictureTwo

