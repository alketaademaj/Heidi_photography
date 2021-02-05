import React, { Component } from 'react'

export class Home extends Component {

    //create an array that contains the images, after that create a loop that goes over the images

    render() {
        console.log(this.props.pictures)
        return (
            <div>
                <img src="/img/Etu-leea.jpeg" alt="Leea" width="1300px" height="800px"></img>
                <h1>this will display a link to social media accounts</h1>
            </div>
        )
    }
}

export default Home
