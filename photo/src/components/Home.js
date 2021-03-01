import React, { Component } from 'react';
import maisema from '../img/maisema.jpeg'

export class Home extends Component {

    render() {
        console.log(this.props.pictures)
        return (
            <div>
                <div className="organize">
                    <div className="home-content">
                        <h1>"Photography is the story I fail to put into words" -Destin Sparks
                </h1>
                    </div>
                    <div className="front-pic">
                        <img src={maisema} alt="maisema" className="maisema"></img>
                    </div>
                </div>
            </div >
        )
    }
}

export default Home
