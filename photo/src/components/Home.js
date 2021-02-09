import React, { Component } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export class Home extends Component {

    //create an array that contains the images, after that create a loop that goes over the images

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
                        <img src="/img/maisema.jpeg" alt="valas" width="480px" height="600px"></img>
                    </div>
                </div>
                <About />
                <Portfolio />
                <Contact />
            </div >
        )
    }
}

export default Home
