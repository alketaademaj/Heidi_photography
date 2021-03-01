import React, { Component } from 'react'
import meri from '../norway/meri1.jpeg'
import tie from '../norway/tie1.jpeg'
import tie2 from '../norway/tie2.jpeg'
import valas from '../norway/valas1.jpeg'
// import valas2 from '../norway/valas2.jpeg'
import vuori from '../norway/vuori1.jpeg'
import vuori2 from '../norway/vuori2.jpeg'
import vuori3 from '../norway/vuori3.jpeg'
import vuori4 from '../norway/vuori4.jpeg'

export class PictureOne extends Component {
    render() {
        return (
            <div className="album">
                <img src={meri} alt="meri" width="450px" height="auto" className="norway"></img>
                <img src={tie} alt="tie" width="450px" height="auto" className="norway"></img>
                <img src={tie2} alt="tie" width="450px" height="auto" className="norway"></img>
                <img src={valas} alt="valas" width="450px" height="auto" className="norway"></img>
                <img src={vuori4} alt="vuori" width="450px" height="auto" className="norway"></img>
                <img src={vuori} alt="vuori" width="450px" height="auto" className="norway"></img>
                <img src={vuori2} alt="vuori" width="450px" height="auto" className="norway"></img>
                <img src={vuori3} alt="vuori" width="450px" height="auto" className="norway"></img>
            </div>
        )
    }
}

export default PictureOne
