import React, { Component } from 'react';

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
                        <img src="/img/maisema.jpeg" alt="valas" width="480px" height="600px"></img>
                    </div>
                </div>
            </div >
        )
    }
}

export default Home
